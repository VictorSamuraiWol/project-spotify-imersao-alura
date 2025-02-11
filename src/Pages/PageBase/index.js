import { useEffect, useState } from 'react';
import Footer from '../../componentes/Footer/Footer'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import './PageBase.css'
import {Outlet} from 'react-router-dom'

function PageBase() {

    const [getHeroeId, setGetHeroeId] = useState('');

    const [heroesListContext, setHeroesListContext] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3001/superHeroes'
        fetch(url)
            .then(response => response.json())
            .then(data => setHeroesListContext(data))
            .catch(error => console.log('Error: ', error))    
    }, []);

    return(
        <>
            <Sidebar />
                <Outlet context={{heroesListContextAll: {heroesListContext}, getHeroeId, setGetHeroeId}} />
            <Footer />
        </>
    )
}

export default PageBase
