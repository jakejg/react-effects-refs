import React, { useState, useEffect } from "react";
import Card from './Card'
import axios from 'axios';

const BASE_URL = "https://deckofcardsapi.com/api/deck"


const CardContainer = () => {
    const [cardData, setCardData] = useState({});
    const [apiData , setApiData] = useState({url: `${BASE_URL}/new/draw/?count=1`, drawCount: 0});
    const [draw, setDraw] = useState(false);

    useEffect(() => {
        const getCard = async () => {
            try{
                const res = await axios.get(apiData.url);
                setCardData(cardData => ({imgSrc: res.data.cards[0].image, deckId: res.data.deck_id}));
            }
            catch(err){
                alert(err)
            }
        }

        if (apiData.drawCount > 51) {
            setDraw(false);
            alert("No cards left");
        }
        else getCard();
    }, [apiData])


    useEffect(() => {
        if (draw) {
            const timerId = setInterval(() => {
                setApiData(apiData => ({
                    url: `${BASE_URL}/${cardData.deckId}/draw/?count=1`,
                    drawCount: apiData.drawCount + 1}
                ))
            }, 1000)

            return () => clearInterval(timerId)
        }
    }, [draw])
        

    const startStopDraw = () => {
        setDraw(!draw)
    }


    return (
        <>
            <Card imgSrc={cardData.imgSrc} />
            <button onClick={startStopDraw}>{draw ? "Stop Draw": "Start Draw"}</button>
        </>
    )
}

export default CardContainer