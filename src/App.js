import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [products, setProducts] = React.useState([
    {
      name: "Nike CruzrOne",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
      descrition:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: "20000",
    },
    {
      name: "Nike Epic React Flyknit 2",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
      descrition:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: "20000",
    },
  ]);

  const [myCart, setMyCart] = React.useState();

  return (
    <div className="App">
      <div className="wrapper">
        <div className="screen -left">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/pngwave.png"
            className="logo"
            alt="로고"
          />
          <div class="title">Picked items</div>
          <div class="shop-items">
            {products &&
              products.map((item, index) => {
                return (
                  <div key={`products-${index}`}>
                    <div class="item">
                      <div class="item-block">
                        <div class="image-area">
                          <img
                            src={item.image}
                            alt="상품이미지"
                            className="image"
                          />
                        </div>
                        <div class="name">{item.name}</div>
                        <div class="description">{item.descrition}</div>
                        <div class="bottom-area">
                          <div class="price">{item.price}</div>
                          <div class="button">
                            <p>ADD TO CART</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="screen -right">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/pngwave.png"
            className="logo"
            alt="로고"
          />
          <div class="title">Your Cart</div>
          <div class="shop-items">
            {myCart ? (
              myCart.map((item, index) => {
                return (
                  <div key={`products-${index}`}>
                    <div class="item">
                      <div class="item-block">
                        <div class="image-area">
                          <img
                            src={item.image}
                            alt="상품이미지"
                            className="image"
                          />
                        </div>
                        <div class="name">{item.name}</div>
                        <div class="description">{item.descrition}</div>
                        <div class="bottom-area">
                          <div class="price">{item.price}</div>
                          <div class="button">
                            <p>ADD TO CART</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 300,
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                Your Cart is Empty
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
