import React, { useState, useEffect } from "react";
import Card from './Card'
import axios from 'axios';


const CardContainer = () => {
    const [cardData, setCardData] = useState({})
    const [apiData , setApiData] = useState({url: "https://deckofcardsapi.com/api/deck/new/draw/?count=1", drawCount: 0})

    useEffect(() => {
        const getCard = async () => {
            const res = await axios.get(apiData.url);
            setCardData(cardData => ({imgSrc: res.data.cards[0].image, deckId: res.data.deck_id}));
        }
        getCard()
    }, [apiData])


    const draw = () => {
        setApiData(apiData => ({
                    url: `https://deckofcardsapi.com/api/deck/${cardData.deckId}/draw/?count=1`,
                    drawCount: apiData.draw + 1}
        ))
    }


    return (
        <>
            <Card imgSrc={cardData.imgSrc} />
            <button onClick={draw}>Draw Card</button>
        </>
    )
}

export default CardContainer