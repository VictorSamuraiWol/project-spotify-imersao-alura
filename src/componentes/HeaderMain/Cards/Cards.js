import { useEffect, useState } from 'react';
import './Cards.css'
import { Link, useOutletContext } from 'react-router-dom';

function Cards(setGetHeroeId) {

    // const [heroesList, setHeroesList] = useState([]);
    // const [getHeroeId, setGetHeroeId] = useState('');

    const { heroesListContextAll } = useOutletContext();

    const cardsList = document.querySelectorAll('.cardsList');
    const imgList = document.querySelectorAll('.cards img')

    // useEffect(() => {
    //     const url = 'http://localhost:3001/superHeroes'
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setHeroesList(data))
    //         .catch(error => console.log('Error: ', error))    
    // }, []);

    function addDynamicCards(e) {
        const id = e.currentTarget.id

        for(let i = 0; i <= cardsList.length; i++) {
            if (`${i}` === id) {
                cardsList[i - 1].classList.add('dynamicCardsClass')
                imgList[i - 1].classList.remove('imgStyle')
                imgList[i - 1].classList.add('dynamicImgsClass')
            } else {}            
        }
        
    }

    function removeDynamicCards() {
        for(let i = 0; i <= cardsList.length; i++) {
            cardsList[i]?.classList.contains('dynamicCardsClass') && cardsList[i].classList.remove('dynamicCardsClass')

            imgList[i]?.classList.contains('dynamicImgsClass') && imgList[i].classList.remove('dynamicImgsClass')
            imgList[i]?.classList.add('imgStyle')
        }
            
    }

    function getIdContext(e) {
        const id = e.currentTarget.id
        setGetHeroeId.setGetHeroeId.setGetHeroeId(id)
        
    }
    
    return(
        // Creating dynamics cards
        heroesListContextAll.heroesListContext.map((e) =>
            <Link to='/page-card' key={e.id}>      
                <div
                    onClick={getIdContext}
                    onMouseOver={addDynamicCards}
                    onMouseOut={removeDynamicCards}
                    id={e.id} 
                    className="cardsList"
                >
                    <div
                        style={{color: 'red', background: `${e.backgroundHeroe}`}}
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
