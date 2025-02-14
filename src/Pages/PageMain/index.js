import { useOutletContext } from 'react-router-dom'
import HeaderMain from '../../componentes/HeaderMain/HeaderMain'
import './PageMain.css'

function PageMain() {
    // Obtém a função setGetHeroeId do contexto da rota 
    const { setGetHeroeId } = useOutletContext()

    return(
        // Renderiza o componente HeaderMain e passa a função setGetHeroeId como propriedade
        <HeaderMain setGetHeroeId={setGetHeroeId} />
    )
}

export default PageMain // Exporta o componente  
