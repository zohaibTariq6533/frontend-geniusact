import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Contact() {
  // const [product, setProduct] = useState([]);
  // async function fetchData() {
  //   const product = await axios.get("http://127.0.0.1:8000/api/products");
  //   // console.log(product.data);
  //   setProduct(product.data);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      {/* {product.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))} */}
      {/* <h2>{product.length > 0 && product[0].name}</h2>
      <h2>{product.length > 0 && product[1].name}</h2> */}
    </>
  );
}

export default Contact;
