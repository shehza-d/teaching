import express from "express";

import "./database.js";
import { Product } from "./models.js";

// https://learn.mongodb.com
// https://www.linkedin.com/in/shehza-d
// https://excalidraw.com/#json=VWRO4oHAqoBXYX5V51Ku9,w1jB8jmrLK4ia5ahuW7ZXw

const app = express();
const port = 3000;

app.get("/", (req, response) => {
  response.send(`Hello World`);
});

app.get("/products", async (req, res) => {
  const result = await Product.find();

  res.send(result);
});

app.post("/product", async (req, res) => {
  try {
    const result = await Product.create({
      name: "palao",
      description: "difjdfidfjdif",
      price: 250,
    });

    console.log(result);

    res.send("add hogya product");
  } catch (err) {
    console.log("err=>", err);

    res.send("nhi add hua product");
  }
});

app.get("products", async (req, res) => {});
app.get("products", async (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
