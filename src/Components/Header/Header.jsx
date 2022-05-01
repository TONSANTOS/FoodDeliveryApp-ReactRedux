import React, { useEffect } from 'react'
import { } from '@mui/material';
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';

import logoImg from './../../assets/logo.png';
import profileImg from './../../assets/profile.jpg';


import './header.css'

function HeaderComponent() {
    useEffect(() => {
        const toggleMenu = document.querySelector(".toggleMenu");

        toggleMenu.addEventListener("click", () => {
            document.querySelector(".rightMenu").classList.toggle("active")
        })
    }, [])

    return (
        <header>
            <img className="logo" src={logoImg} alt="Logo" />

            <div className="inputBox">
                <SearchRounded className="searchIcon" />
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div className="shoppingCart">
                <ShoppingCartRounded className="cart" />
                <div className="cart_content">
                    <p>2</p>
                </div>
            </div>

            <div className="profileContainer">
                <div className="imgBox">
                    <img className="profilePic" src={profileImg} alt="Profile" />
                </div>

                <h2 className="userName">Ton Santos</h2>
            </div>

            <div className="toggleMenu">
                <BarChart className="toggleIcon" />
            </div>
        </header>
    )
}

export default HeaderComponent;