import React from 'react';
import CardGame from './CardGame';


const games = [
    {
        title: 'truco',
        team: 2,
        counter: 30,
        img: 'truco.jpg',
    },
    {
        title: 'generala',
        team: 'any',
        counter: false,
        img: 'truco.jpg',
    },
    {
        title: 'burako',
        team: 2,
        counter: 3000,
        img: 'burako.jpg',
    },
];

const NoteGames = () => {
    return(
        <section className='box-games d-flex flex-column align-items-center mt-5'>
            <h2 className='center mb-5'>Aqui puede seleccionar el Juego:</h2>
            <div className='d-flex flex-wrap justify-content-center tarjeta_container'>
                {games.map( game => <CardGame game={game}/>)}
            </div>
        </section>
    );
}
export default NoteGames;