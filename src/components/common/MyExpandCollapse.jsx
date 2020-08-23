// import React, { useState, useEffect } from 'react';
// const MyExpandCollapse = ({ text }) => {
//     const txtContainer = React.useRef(null);
//     const [readMore, setReadMore] = useState(false);
//     const [show, setShow] =useState(false);
//     useEffect(() => {
//         const scrollHeight = txtContainer.current.scrollHeight;
//         const offsetHeight = txtContainer.current.offsetHeight;
//         scrollHeight > offsetHeight && setShow(true);
//     }, []);
//     return (
//         <div id="Container">
//             <div id="Card" ref={txtContainer}>
//                 <div
//                     id="CardText"
//                     style={{
//                         overflow: readMore === false ? "none" : "auto",
//                         height:
//                             "calc(100%-60px)" && (readMore && "100%") || "calc(100%-60px)",
//                     }}
//                 >
//                     {text}
//                 </div>
//                 {show === true ? (
//                     <div
//                         id="ReadMore"
//                         style={{ height: readMore === false ? 60 : 0 }}
//                         onClick={() => setReadMore(true)}
//                     >
//                         Read More
//                     </div>
//                 ) : null}
//             </div>
//         </div>
//     );
// }

// export default MyExpandCollapse;
