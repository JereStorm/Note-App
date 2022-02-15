import React from 'react';


const CardGame = ({game}) => {

    return(
        <div className='card m-2 tarjeta bg-dark text-light border-light'>
            <div className='card-head'>
                <h1 className='card-title'>{game.title}</h1>
            </div>
            <div className='card-img'>
                <a href='#'>
                    <img  className='game_img' src={game.img}></img>
                </a>
            </div>

        </div>
    );
}

export default CardGame;