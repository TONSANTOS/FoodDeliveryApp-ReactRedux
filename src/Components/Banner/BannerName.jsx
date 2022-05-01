import React from 'react'

function BannerName({ name, discount, link }) {
  return (
    <div className="bannerContent">
      <h3>Olá {name}</h3>
      <p>
        Ganhe desconto a cada <span>${discount}</span> em compras
      </p>

      <a href={link}>Saber mais</a>
    </div>
  )
}

export default BannerName