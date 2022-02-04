import React from 'react';

const CardGame = () => {
    return(
        <div className='card m-2 border-info'>
            <div className='card-head'>
                <h1 className='card-title'>GameName</h1>
            </div>

            {/* IMAGEN DEL JUEGO */}

            <div className='card-footer bg-dark d-flex justify-content-center align-items-end"'>
            <span class="btn btn-dark">Jugadores: </span>
                <div class="btn-group gap-2" role="group">

                    <span><a class="btn btn-dark">2</a></span>
                    <span><a class="btn btn-dark">4</a></span>
                    <span><a class="btn btn-dark">6</a></span>

                </div>
            </div>
        </div>
    );
}

export default CardGame;