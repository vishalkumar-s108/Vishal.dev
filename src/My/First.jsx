// import React, { useState, useEffect } from "react";
// import "./style.css";

// export const First = (props) => {
//   const [cre, setCre] = useState(false);
//   const arr = [
//     { nam: "vishal", id: "12" },
//     { nam: "vishal", id: "12" },
//     { nam: "vishal", id: "12" },
//     { nam: "vishal", id: "12" },
//   ];
//   const [count, setCount] = useState(0);

//   // Apply class on <body> tag
//   useEffect(() => {
//     document.body.className = cre ? "body-dark" : "body-white";
//     // Cleanup to avoid stacking classes
//     return () => {
//       document.body.className = '';
//     };
//   }, [cre]);

//   return (
//     <div>
//       <h1>Radhe Radhe</h1>
//       <div>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Click me</button>
//         <p>{props.name}</p>
//       </div>
//       <ul>
//         {arr.map((item, idx) => (
//           <li key={idx}>
//             {item.nam} - {item.id}
//           </li>
//         ))}
//       </ul>
//       <h1>{cre ? "dark" : "white"}</h1>
//       <button
//         className="toggle-btn"
//         onClick={() => setCre(!cre)}
//       >
//         Toggle Theme
//       </button>
//     </div>
//   );
// };

// export default First;