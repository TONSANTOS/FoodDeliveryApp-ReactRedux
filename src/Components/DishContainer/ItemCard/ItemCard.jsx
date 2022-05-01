import React, { useEffect, useState } from 'react'
import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'

import { Items } from '../../Data/Data';
import { useStateValue } from './../../StateProvider/StateProvider';
import { actionType } from './../../Reducer/reducer';

let cartData = []

function ItemCard({ imgSrc, name, ratings, price, itemId }) {
    const [isFavourite, setIsFavourite] = useState(false);
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

    const [isCart, setCart] = useState(null);
    const [{}, dispatch] = useStateValue();

    const handleClick = (value) => {
        setCurrentValue(value);
    }

    useEffect(() => {
        if (isCart) {
            cartData.push(isCart);
            dispatch({
                type: actionType.SET_CART,
                cart: cartData
            })
        }
    }, [isCart])

    return (
        <div className="itemCard" id={itemId}>
            <div
                className={`isFavourite ${isFavourite ? "active" : ""}`}
                onClick={() => setIsFavourite(!isFavourite)}
            >
                <Favorite />
            </div>

            <div className="imgBox">
                <img src={imgSrc} alt="" className="itemImg" />
            </div>
            <div className="itemContent">
                <h3 className="itemName">{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, { length: 5 }).map((element, index) => (
                            <i
                                key={index}
                                className={`rating ${currentValue > index ? "orange" : "gray"}`}
                                onClick={() => handleClick(index + 1)}
                            >
                                <StarRounded />
                            </i>
                        ))}
                        <h3 className="price">
                            <span>$</span>
                            {price}
                        </h3>
                    </div>
                    <i className="addToCart" onClick={() => {
                        setCart(Items.find((n) => n.id === itemId));
                    }}>
                        <AddRounded />
                    </i>
                </div>
            </div>
        </div>
    )
}

export default ItemCard