"use client";
import { useState } from "react";
import Image from "next/image";

// export default function Page1() {
//   const myName = "Shehzad";
//   const isLoggedIn = true;

//   const obj = {
//     name: "Hedy Lamarr",
//     imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   };

//   const myFun = () => console.log("testing");
//   const myFun2 = () => "Testing data from fun";

//   return (
//     <>
//       <h2 className="heading">myName</h2>
//       <h2 className="heading">{myName}</h2>
//       <h2 className="heading">{3 + 2}</h2>
//       {/* error */}
//       {/* <h2 className="heading">{3 + }</h2> */}

//       {/* undefined can not appear in jsx */}
//       {/* <h2 className="heading">{myFun()}</h2> */}
//       <h2 className="heading">{myFun2()}</h2>

//       {/* object can not appear as it is in jsx */}
//       {/* <h2 className="heading">{obj}</h2> */}
//       {/* taking string from object */}
//       <h2 className="heading">{obj.name}</h2>

//       {/* this html code is an error in jsx*/}
//       {/* <h2 style="background-color:blue">Shehzad</h2>  */}
//       <h2 style={{ backgroundColor: "blue" }}>
//         Inline styling with passing object
//       </h2>

//       {/* conditional styling */}
//       <div className={isLoggedIn ? "bg-green-400" : "bg-red-500"}>some</div>
//       <div className={`text-5xl ${isLoggedIn ? "bg-green-400" : "bg-red-500"}`}>
//         something
//       </div>
//     </>
//   );
// }

// export default function Page2() {
//   // this is dynamic rendering
//   const products = [
//     { title: "Cabbage", id: 1, price: 100 },
//     { title: "Garlic", id: 2343434, price: 300 },
//     { title: "Apple", id: "3", price: 500 },
//     { title: "mongo", id: "4562", price: 550 },
//   ];

//   return (
//     <div>
//       <span>name: {products[2].title}</span>

//       {products.map((item) => {
//         console.log("hello", item);
//         return (
//           <div key={item.id} className="m-8 border p-4">
//             name: {item.title} price : {item.price}
//           </div>
//         );
//       })}
//     </div>
//   );
// }



// export default function Page3() {
//   // hook are just function given by React
//   const [age, setAge] = useState(20); // hooks are define at top level of the component

//   console.log("age:", age); // my variable
//   console.log("set age:", setAge); //function to update my variable and rerender component

//   const handleClick = () => {
//     console.log("You clicked me!", age);
//     setAge(age + 1);
//   };

//   return <button onClick={handleClick}>Click me {age}</button>;
// }
