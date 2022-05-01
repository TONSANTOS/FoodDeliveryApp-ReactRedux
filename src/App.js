import { useEffect, useState } from 'react';

import Header from './Components/Header/Header';
import BottomMenu from './Components/BottomMenu/BottomMenu';
import Banner from './Components/Banner/Banner';
import DishContainer from './Components/DishContainer/DishContainer';
import DebitCard from './Components/DebitCard/DebitCard';
import SubMenuContainer from './Components/DishContainer/SubMenuContainer/SubMenuContainer';
import CartItem from './Components/CartItem/CartItem';

import { Items } from './Components/Data/Data';
import { useStateValue } from './Components/StateProvider/StateProvider';

import ImgEmptyCart from './assets/emptyCart.png';

import './Styles/App.css';

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "burger01")
  );

  const [{ cart }, dispatch] = useStateValue();
  const [totalPrice] = useStateValue(0);

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li")

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach(n => n.addEventListener("click", setMenuActive))

    const menuCards = document.querySelector(".rowContainer").querySelectorAll(".rowMenuCard")

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach(n => n.addEventListener("click", setMenuCardActive))
  }, [isMainData, cart, totalPrice])

  return (
    <div className="App">
      <Header />

      {/* Main Container */}
      <main>
        <div className="mainContainer">
          <Banner />
          <DishContainer
            isMainData={isMainData}
            setMainData={setMainData}
            Items={Items}
          />
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart ? (
            <div className="addSomeItem">
              <img
                src={ImgEmptyCart}
                alt="emptyCart"
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContainer">
              <SubMenuContainer name={"Itens do Carrinho"} />
              <div className="cartContainer">
                <div className="cartItems">
                  {
                    cart && cart.map(data => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))
                  }
                </div>
              </div>

              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$</span> 45.0
                </p>
              </div>

              <button className="checkOut">Confira</button>
            </div>
          )}
        </div>
      </main>

      <BottomMenu />
    </div>
  );
}

export default App;
