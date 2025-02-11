import { useOutletContext } from 'react-router-dom'
import './PageCard.css'
import { useEffect, useState } from 'react';

function PageCard() {

    const { getHeroeId } = useOutletContext(); 
    const { heroesListContextAll } = useOutletContext();

    const [idPageCard, setIdPageCard] = useState('');
    const [namePageCard, setNamePageCard] = useState('');
    const [imgPageCard, setImgPageCard] = useState('');
    const [descriptionPageCard, setDescriptionPageCard] = useState('');
    const [colorTextPageCard, setColorTextPageCard] = useState('');
    const [backgroudPageCard, setBackgroundPageCard] = useState('');


    function dynamicPageCards() {   
        
        for(let i = 0; i <= heroesListContextAll.heroesListContext.length; i++) {
            if (`${i}` === getHeroeId) {
                setIdPageCard(heroesListContextAll.heroesListContext[i - 1].id)
                setNamePageCard(heroesListContextAll.heroesListContext[i - 1].name)
                setImgPageCard(heroesListContextAll.heroesListContext[i - 1].urlImg)
                setDescriptionPageCard(heroesListContextAll.heroesListContext[i - 1].description)
                setColorTextPageCard(heroesListContextAll.heroesListContext[i - 1].colorText)
                setBackgroundPageCard(heroesListContextAll.heroesListContext[i - 1].backgroundHeroe)
            } else {}           
        }
        
    }

    useEffect(() => {
        dynamicPageCards();
    }, []);

    return(
        <div
            className='page-card-class'
            key={idPageCard}
            style={{ background: backgroudPageCard }}
        >
            <img 
                className='page-card-img-class' 
                src={imgPageCard} 
                alt={namePageCard}
            />
            <h1 
                style={{ color: `${colorTextPageCard}` }}
                className=''>{namePageCard}
            </h1>
            <p 
                className=''
                style={{ color: `${colorTextPageCard}` }}
            >
                {descriptionPageCard}
            </p>
        </div>
    )
}

export default PageCard
