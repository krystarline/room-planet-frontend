// /* eslint-disable react/function-component-definition */
// import React, { useState, useEffect } from "react";
// import { Storage } from "aws-amplify";

// async function fetchModel(src, updateSrc) {
//   if (!src.includes("downloads")) {
//     const model = await Storage.get(src);
//     updateSrc(model);
//   } else {
//     updateSrc(src);
//   }
// }

// const Model = ({ src, ...props }) => {
//   const [modelSrc, updateSrc] = useState(null);

//   useEffect(() => {
//     fetchModel(src, updateSrc);
//   }, [src]);

//   return modelSrc ? <img src={modelSrc} {...props} /> : null;
// };

// export default Model;
