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

            <img src={img}></img>

            <div className='card-end bg-dark tarjeta_footer'>
                <span class="btn btn-dark">team: </span>
                <div class="btn-group gap-2" role="group">
                    
                    <span><a class="btn btn-dark">{ game.team }</a></span>
                </div>
            </div>
        </div>
    );
}

export default CardGame;