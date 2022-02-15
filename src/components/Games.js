import React from 'react';
import CardGame from './CardGame';



const Games = ({games}) => {

    return(
        <section className='box-games d-flex flex-column align-items-center mt-5'>
            <div className='d-flex flex-wrap justify-content-center tarjeta_container'>
           
                        < CardGame  game={games.truco} />
                        < CardGame  game={games.burako}  />
                        < CardGame  game={games.generala}  />
                   
            </div>
        </section>
    );
}
export default Games;