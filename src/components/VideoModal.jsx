// import React from 'react';
// import demoVideo from '../assets/geniusAct.mp4'

// const VideoModal = ({ isOpen, onClose }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     // Modal Overlay (The dark backdrop)
//     <div 
//       className="fixed inset-0 z-50 bg-black/50 bg-opacity-75 flex items-center justify-center p-4" 
//       onClick={onClose}
//     >
//       {/* Modal Content Container */}
//       <div 
//         className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl"
//         onClick={e => e.stopPropagation()} // Stop click inside from closing the modal
//       >
//         {/* Close Button (positioned outside the iframe for better visibility) */}
//         <button 
//           className="absolute top-0 right-0 m-4 text-white text-3xl hover:text-gray-300 transition duration-150" 
//           onClick={onClose}
//         >
//           &times;
//         </button>

//         {/* Video Embed Container (16:9 aspect ratio) */}
//         <div className="relative pt-[56.25%]"> {/* pt-[56.25%] ensures 16:9 ratio */}
//           <video
//             className="absolute top-0 left-0 w-full h-full rounded-lg"
//             src={demoVideo}
//             title="Embedded Video"
//             autoPlay
//             controls
//             allowFullScreen
//             muted
//           ></video>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoModal;