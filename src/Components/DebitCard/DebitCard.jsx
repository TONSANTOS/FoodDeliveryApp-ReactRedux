import React from 'react'

import IconVisaLogo from '../../assets/VisaLogo.png'
import IconChip from '../../assets/chip.png'

import './debit-card.css';

export default function DebitCard() {
    return (
        <div className="cardGroup">
            <img src={IconVisaLogo} alt="" className="card_logo" />
            <img src={IconChip} alt="" className="card_chip" />

            <div className="card_number">1234 567 8920 3200</div>
            <div className="card_name">Ton Santos</div>
            <div className="card_from">10/22</div>
            <div className="card_to">10/25</div>
            <div className="card_ring"></div>
        </div>
    )
}
