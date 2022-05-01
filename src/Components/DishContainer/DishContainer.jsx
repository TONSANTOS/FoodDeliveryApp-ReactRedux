import React from 'react'

import SubMenuContainer from './SubMenuContainer/SubMenuContainer'
import MenuCard from './MenuCard/MenuCard';
import ItemCard from './ItemCard/ItemCard';
import { MenuItems } from '../Data/Data';

import './dish-container.css';

function DishContainer({ isMainData, setMainData, Items }) {
    const setData = (itemId) => {
        setMainData(Items.filter((element) => element.itemId === itemId));
    }

    return (
        <div className="dishContainer">
            <div className="menuCard">
                <SubMenuContainer name={"Categoria do Cardápio"} />
            </div>
            <div className="rowContainer">
                {MenuItems && MenuItems.map(data => (
                    <div key={data.id} onClick={() => setData(data.itemId)}>
                        <MenuCard
                            imgSrc={data.imgSrc}
                            name={data.name}
                            isActive={data.id === 1 ? true : false}
                        />
                    </div>
                ))}

            </div>
            <div className="dishitemContainer">
                {
                    isMainData && isMainData.map(data => (
                        <ItemCard
                            key={data.id}
                            itemId={data.id}
                            imgSrc={data.imgSrc}
                            name={data.name}
                            ratings={data.ratings}
                            price={data.price}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default DishContainer