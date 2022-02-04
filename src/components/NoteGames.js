import React from 'react';
import CardGame from './CardGame';

const NoteGames = () => {
    return(
        <section className='box-games d-flex flex-column align-items-center mt-5'>
            <h2 className='center mb-5'>Aqui puede seleccionar el Juego:</h2>
            <div className='d-flex flex-wrap justify-content-center'>
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
            </div>
        </section>
    );
}
export default NoteGames;