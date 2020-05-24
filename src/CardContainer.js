import React, { useState, useEffect } from "react";
import Card from './Card'
import axios from 'axios';


const CardContainer = () => {
    const [cardImg, setCardImg] = useState(null)
    const [url , setUrl] = useState("https://deckofcardsapi.com/api/deck/new/draw/?count=1")

    useEffect(() => {
        const getCard = async () => {
            const res = await axios.get(url);
            setCardImg(data => res.data.cards[0].image);
        }
        getCard()
    }, [url])


    return (
        <>
            <Card imgSrc={cardImg} />
            <button>Draw Card</button>
        </>
    )
}

export default CardContainer