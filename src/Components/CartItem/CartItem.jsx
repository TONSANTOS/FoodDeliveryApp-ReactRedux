import React, { useEffect, useState } from 'react';
import { AddRounded, RemoveRounded } from '@mui/icons-material';

import { useStateValue } from '../StateProvider/StateProvider';
import { actionType } from '../Reducer/reducer';

import './cart-item.css';

let cartItems = []

export default function CartItem({ price, imgSrc, name, itemId }) {
    const [qty, setQty] = useState(1);
    const [{ cart }, dispatch] = useStateValue();
    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

    useEffect(() => {
        cartItems = cart;
        setItemPrice(parseInt(qty) * parseFloat(price));
    }, [qty]);

    const updateQuantity = (action, id) => {
        if (action === "add") {
            setQty(qty + 1);
        } else {
            if (qty == 1) {
                cartItems.pop(id);
                dispatch({
                    type: actionType.SET_CART,
                    cart: cartItems,
                })
            }
            setQty(qty - 1);
        }
    }

    return (
        <div className="cardItem" id={itemId}>
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>

            <div className="itemSection">
                <h2 className="itemName">{name}</h2>
                <div className="itemQuantity">
                    <span>x {qty}</span>
                    <div className="quantity">
                        <RemoveRounded
                            className="itemRemove"
                            onClick={() => updateQuantity("remove", itemId)}
                        />

                        <AddRounded
                            className="itemAdd"
                            onClick={() => updateQuantity("add", itemId)}
                        />
                    </div>
                </div>
            </div>

            <p className="itemPrice">
                <span className="dolorSign">$</span> {" "}
                <span className="itemPriceValue">{itemPrice}</span>
            </p>
        </div>
    )
}
