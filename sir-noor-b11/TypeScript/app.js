import { carsObj } from "./file1";
const list = document.getElementById("list");
// let variable: "shehzad" | "noor" = "noor"
// variable = "shehzad"
for (const company in carsObj) {
  // @ts-ignore
  const cars = carsObj[company];
  for (const car in cars) {
    const models = cars[car];
    for (const model in models) {
      const name = models[model].name;
      const price = models[model].price;
      const modelName = models[model].model;
      list.innerHTML += `<div class="card">
		<img
		  height="100"
		  width="200"
		  src="https://4-wheel-pk.netlify.app/assets/img/KIA_Picanto.png"
		  alt=""
		/>
  
		<p>Name: ${name}</p>
		<p>model: 2022</p>
		<p>price: ${price}</p>
		<p>city: Karachi</p>
		<!-- color: ["Silver", "Black", "Red"], -->
		<button>add to card</button>
	  </div>`;
      console.log("🚀 ~ test:", models[model].price);
    }
  }
}
// const carDetail = {
//   name: "toyota Supra",
//   model: 2024,
//   colors: ["red", "green", "black"],
//   isAuto: false,
// };
// carDetail.name.toFixed()
// let model = "colors";
// console.log(carDetail[model]);
// for (const key in carDetail) {
//   console.log(carDetail[key]);
// }
// const myFunction = async () => {};
