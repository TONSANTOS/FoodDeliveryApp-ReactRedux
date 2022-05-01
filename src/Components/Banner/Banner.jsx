import React from 'react'

import BannerName from './BannerName'

import deliveryImg from './../../assets/delivery.png';

import './banner.css';

function Banner() {
    return (
        <div className="banner">
            <BannerName name={"Ton"} discount={"20"} link={"#"} />
            <img className="deliveryPic" src={deliveryImg} alt="Delivery" />
        </div>
    )
}

export default Banner