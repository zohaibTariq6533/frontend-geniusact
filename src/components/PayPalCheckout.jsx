import { useEffect, useRef, useState } from "react";

export default function PayPalCheckout({ subtotal }) {
  const paypalRef = useRef(null);
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);
  const renderRef = useRef(false); // Track if buttons are already rendered

  // Load PayPal SDK
  useEffect(() => {
    if (window.paypal) {
      setIsSdkLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD&disable-funding=card,paylater";
    script.async = true;
    script.onload = () => setIsSdkLoaded(true);
    script.onerror = () => console.error("Failed to load PayPal SDK");
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Render PayPal buttons
  useEffect(() => {
    if (!isSdkLoaded || !window.paypal || !subtotal || isNaN(subtotal) || subtotal <= 0) {
      return;
    }

    let isMounted = true;

    const initializePayPalButtons = async () => {
      const container = paypalRef.current;
      if (!container) {
        console.error("PayPal container not found");
        return;
      }

      // Only render if not already rendered
      if (renderRef.current) {
        return;
      }

      renderRef.current = true;
      container.innerHTML = ""; // Clear container before rendering

      try {
        const buttons = window.paypal.Buttons({
          style: {
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "pay",
            height: 45,
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: { value: Number(subtotal).toFixed(2) },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              if (isMounted) {
                alert(`Transaction completed by ${details.payer.name.given_name}`);
              }
            });
          },
          onError: (err) => {
            if (isMounted) {
              console.error("PayPal Button Error:", err);
              alert("An error occurred during the PayPal transaction.");
            }
          },
        });

        // Check if component is still mounted before rendering
        if (isMounted) {
          await buttons.render(paypalRef.current);
        }
      } catch (err) {
        if (isMounted) {
          console.error("PayPal render failed:", err);
          renderRef.current = false; // Allow retry on next render
        }
      }
    };

    initializePayPalButtons();

    return () => {
      isMounted = false;
      renderRef.current = false; // Reset render state on unmount
      if (paypalRef.current) {
        paypalRef.current.innerHTML = "";
      }
    };
  }, [isSdkLoaded, subtotal]);

  return (
    <div className="paypal-container-wrapper">
      <div id="paypal-container" ref={paypalRef}></div>
    </div>
  );
}