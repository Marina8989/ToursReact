import React, {useState, useEffectt} from 'react';
import Loading from './Loading';
import Tours from './Tours';


const url ='https://course-api.netlify.app/api/react-tours-project';

function App() {
    return (
        <div>
            <Loading />
        </div>
    )
}

export default App