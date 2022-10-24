const express = require("express");
const app = express();
const cors = require("cors");

const DB = {
  상품: [],
};

app.use(
  cors({
    origin: true,
  })
);

const port = 4000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/myCart", (req, res) => {
  res.send(DB.상품);
});

app.get("/add/cart", (req, res) => {
  DB.상품.push(req.query);
  res.send("장바구니 담기 !!");
});

app.get("/myCart", (req, res) => {
  console.log(req.query);

  // DB에있는 장바구니 send해주기!
  res.send("MyCart");
});

/**
 * 쿼리스트링
 * req : 요청
 * res : 응답
 */
app.listen(port, () => {
  console.log("Start Node.js Server");
});
