import React from 'react';
import burako from '../imagenes/burako.jpg';
import truco from '../imagenes/truco.jpg';
import generala from '../imagenes/generala.jpeg';

const CardGame = ({game}) => {

    let img = 0;

    switch(game.title){
        case 'truco':
        img = truco;
        break;
        case 'burako':
        img = burako;
        break;
        case 'generala':
        img = generala;
        break;
    }

    return(
        <div className='card m-2 tarjeta'>
            <div className='card-head'>
                <h1 className='card-title'>{game.title}</h1>
            </div>
            <div className='card-img'>
                <a href='#'>
                    <img  className='game_img' src={img}></img>
                </a>
            </div>

        </div>
    );
}

export default CardGame;