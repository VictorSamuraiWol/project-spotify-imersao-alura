import { useOutletContext } from 'react-router-dom'
import HeaderMain from '../../componentes/HeaderMain/HeaderMain'
import './PageMain.css'
import { useEffect } from 'react'

function PageMain() {
    // Obtém a função setGetHeroeId do contexto da rota 
    const { setGetHeroeId } = useOutletContext()
    const { heroesListContextAll } = useOutletContext()

    // aparecer o search do menu quando renderizar este componente
    useEffect(() => {
        const liSearch = document.querySelector('#liSearch')
        liSearch.setAttribute('style', 'display:flex')  
    }, [])

    return(
        // Renderiza o componente HeaderMain e passa a função setGetHeroeId como propriedade
        <HeaderMain
            setGetHeroeId={setGetHeroeId}
            heroesListContextAll={heroesListContextAll}
        />
    )
}

export default PageMain // Exporta o componente  
