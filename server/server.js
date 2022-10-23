const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// MYSQL 연결 ===========================

app.use(
  cors({
    origin: true,
  })
);
const mysql = require("mysql2");
const DB = mysql.createPoolCluster();

// 127.0.0.1  === localhost
DB.add("nike_shop", {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "nike_shop",
  port: 3306,
});

// MYSQL 연결 ===========================

// MYSQL 가져오기 =======================

app.get("/product", async (req, res) => {
  // 비동기 = Promise 객체
  const data = await new Promise((resolve) => {
    DB.getConnection("nike_shop", (error, connection) => {
      if (error) {
        console.log("데이터베이스 연결 오류 ===>", error);
        return;
      }
      connection.query("SELECT * FROM product", (error, data) => {
        if (error) {
          console.log("쿼리 오류 ===>", error);
          return;
        }

        resolve(data);
      });
    });
  });

  console.log(data);

  //

  res.send(data);
});

const port = 4000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/myCart", (req, res) => {
  // DB에있는 장바구니 send해주기!
  res.send("??");
});

/**
 * 쿼리스트링
 * req : 요청
 * res : 응답
 */

app.listen(port, () => {
  console.log("Start Node.js Server");
});

app.get("/products", async (req, res) => {
  let result = null;

  const 쿼리 = 인서트만들기({
    table: "product",
    data: {
      name: "조던1111",
      cost: 10000,
    },
  });

  const data = await 디비실행({
    database: "nike_shop",
    query: 쿼리,
  });

  // console.log(data);

  res.send("");
});

/**
 * INSERT INTO 테이블명(컬럼~~) VALUES(데이터~~)
 *
 * ex) INSERT INTO product(name,cost,local) VALUES('조던',10000,'대전');
 */
function 인서트만들기(params) {
  const { table, data } = params;

  const 컬럼 = Object.keys(data);
  const 값 = Object.values(data);

  const 쿼리 = `INSERT INTO ${table}(${컬럼.join(",")}) VALUES('${값.join(
    "','"
  )}')`;

  console.log(쿼리);

  return 쿼리;
}

async function 디비실행(params) {
  const { database, query } = params;

  const data = await new Promise((resolve) => {
    DB.getConnection(database, function (err, connection) {
      if (err) {
        console.log("연결 에러 !! ===>", err);
      }

      connection.query(query, function (err, data) {
        if (err) {
          console.log("쿼리 에러 !! ===>", err);
        }

        resolve(data);
      });
    });
  });

  return data;
}
