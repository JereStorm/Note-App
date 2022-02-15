import React, {useState} from 'react';
import Games from './components/Games';

import burako from './imagenes/burako.jpg';
import truco from './imagenes/truco.jpg';
import generala from './imagenes/generala.jpeg';

const initialGames = {
    truco: {
        title: 'truco',
        team: 2,
        counter: 30,
        img: truco,

    },
    generala: {
        title: 'generala',
        team: 'any',
        counter: false,
        img: generala,

    },
    burako: {
        title: 'burako',
        team: 2,
        counter: 3000,
        img: burako,
    },
};

const App = () => {
    return(
        <div className='container contenedor'>
            <h1 className='text-center mt-4 light'>Note-App for Games</h1>
            <Games games={initialGames}/>
        </div>
    );
}

export default App;