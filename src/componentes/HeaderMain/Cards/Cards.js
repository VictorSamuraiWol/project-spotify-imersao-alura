import './Cards.css'
import { Link, useOutletContext } from 'react-router-dom';
import illustrativeCard1 from '../../../assets/icons/icone-wolverine-sem-fundo.png'

function Cards(setGetHeroeId) {

    const { heroesListContextAll } = useOutletContext();

    function getIdContext(e) {
        const id = e.currentTarget.id
        setGetHeroeId.setGetHeroeId.setGetHeroeId(id)
        
    }
     
    return(            
        /* Creating dynamics cards */
        heroesListContextAll.heroesListContext.map((e) =>
            <Link to='/page-card' key={e.id}>     
                <div
                    onClick={getIdContext}
                    id={e.id} 
                    className="cardsList"
                >
                    <div
                        style={{color: `${e.colorText}`, background: `${e.backgroundHeroe}`}}
                        className="cards"
                    >
                        <img className="imgStyle" src={e.urlImg} alt={e.name} />
                        <span style={{color: `${e.colorText}`}}>{e.name}</span>
                    </div>
                </div>
            </Link>
        )
    )

}

export default Cards
