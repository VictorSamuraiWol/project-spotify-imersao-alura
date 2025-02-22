import { useEffect, useState } from 'react';
import Footer from '../../componentes/Footer/Footer'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import './PageBase.css'
import {Outlet} from 'react-router-dom'

function PageBase() {
    // Estado para armazenar o ID do herói selecionado
    const [getHeroeId, setGetHeroeId] = useState('');

    // Estado para armazenar a lista de heróis 
    const [heroesListContext, setHeroesListContext] = useState([]);

    // Efeito para buscar a lista de heróis da API ao carregar a página
    useEffect(() => {
        async function fetchData () {
            try {
                const url = 'http://localhost:3001/superHeroes' // URL da API local
                const response = await fetch(url);
                const data = await response.json();
                setHeroesListContext(data); //atualiza o estado com os dados
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
        
        fetchData();
    }, []); // Executa apenas na montagem

    return(
        <>
            <Sidebar /> {/* Renderiza a barra lateral */}
                {/* Outlet permite que rotas filhas sejam renderizadas aqui */}
                <Outlet context={{heroesListContextAll: {heroesListContext}, getHeroeId, setGetHeroeId}} />
            <Footer /> {/* Renderiza o rodapé */}
        </>
    )
}

export default PageBase // Exporta o componente
