import { useOutletContext, useParams } from 'react-router-dom'
import './PageCard.css'
import { useEffect, useState } from 'react';

function PageCard() {
    // Obtém o ID do herói selecionado e a lista de heróis do contexto da rota
    const { getHeroeId } = useOutletContext(); 
    const { heroesListContextAll } = useOutletContext();

    const params = useParams();

    // Estados para armazenar os dados do herói selecionado
    const [idPageCard, setIdPageCard] = useState('');
    const [namePageCard, setNamePageCard] = useState('');
    const [imgPageCard, setImgPageCard] = useState('');
    const [descriptionPageCard, setDescriptionPageCard] = useState('');
    const [colorTextPageCard, setColorTextPageCard] = useState('');
    const [backgroudPageCard, setBackgroundPageCard] = useState('');
       
    // Função para buscar os dados do herói correspondente ao ID selecionado
    function dynamicPageCards() {   
        for(let i = 0; i <= heroesListContextAll.heroesListContext.length; i++) { 
            const id = getHeroeId; 
            if (`${i}` === id) {
                setIdPageCard(heroesListContextAll.heroesListContext[i - 1].id)
                setNamePageCard(heroesListContextAll.heroesListContext[i - 1].name)
                setImgPageCard(heroesListContextAll.heroesListContext[i - 1].urlImg)
                setDescriptionPageCard(heroesListContextAll.heroesListContext[i - 1].description)
                setColorTextPageCard(heroesListContextAll.heroesListContext[i - 1].colorText)
                setBackgroundPageCard(heroesListContextAll.heroesListContext[i - 1].backgroundHeroe)

            } else if ((id === '') && (params.id) && (i === Number(params.id))) {
                setIdPageCard(heroesListContextAll.heroesListContext[i - 1].id)
                setNamePageCard(heroesListContextAll.heroesListContext[i - 1].name)
                setImgPageCard(heroesListContextAll.heroesListContext[i - 1].urlImg)
                setDescriptionPageCard(heroesListContextAll.heroesListContext[i - 1].description)
                setColorTextPageCard(heroesListContextAll.heroesListContext[i - 1].colorText)
                setBackgroundPageCard(heroesListContextAll.heroesListContext[i - 1].backgroundHeroe)

            } 
            else {}         
        }
        
    }

    // Executa a função ao carregar o componente
    useEffect(() => {
        dynamicPageCards();

        // esconder o search do menu quando renderizar este componente
        const liSearch = document.querySelector('#liSearch')
        liSearch.setAttribute('style', 'display:none')  
    }, [heroesListContextAll]);

    return(
        <div
            className='page-card-class'
            key={idPageCard}
            style={{ background: backgroudPageCard }} // Aplica o fundo dinâmico
        >
            <img 
                className='page-card-img-class' 
                src={imgPageCard}
                // src={heroesListContextAll.heroesListContext[0].urlImg}
                alt={namePageCard} // Define o nome como texto alternativo
            />
            <h1 
                style={{ color: `${colorTextPageCard}` }} // Define a cor do texto
                className='namePageCardClass'>
                    {namePageCard}
                    {/* {heroesListContext[Number(params.id - 1)].name} */}
            </h1>
            <p 
                className='descriptionPageCardClass'
                style={{ color: `${colorTextPageCard}`, border: `2px solid ${colorTextPageCard}` }} // Define a cor do texto da descrição
            >
                {descriptionPageCard}
            </p>
        </div>
    )
}

export default PageCard // Exporta o componente
