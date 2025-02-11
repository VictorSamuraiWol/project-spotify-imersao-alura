import { useOutletContext } from 'react-router-dom'
import HeaderMain from '../../componentes/HeaderMain/HeaderMain'
import './PageMain.css'

function PageMain() {

    const { setGetHeroeId } = useOutletContext()

    return(
        <HeaderMain setGetHeroeId={setGetHeroeId} />
    )
}

export default PageMain
