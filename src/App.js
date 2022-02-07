import React from 'react';
import NoteGames from './components/NoteGames';


const App = () => {
    return(
        <div className='container contenedor'>
            <h1 className='text-center mt-4 light'>Note-App for Games</h1>
            <NoteGames ></NoteGames>
        </div>
    );
}

export default App;