import React, { useEffect, useState } from 'react';
import './HeaderMain.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';
import simbol from '../../assets/icons/png-superHero.png'
import Cards from './Cards/Cards';
//npx json-server ./src/api-superHeroes/superHeroes.json --port 3001

const HeaderMain = (setGetHeroeId) => {

const [searchTerm, setSearchTerm] = useState("");
const [imgCard, setImgCard] = useState("");
const [idCard, setIdCard] = useState("");
const [colorHeroeCard, setColorHeroeCard] = useState("");
const [backgroundHeroeCard, setbackgroundHeroeCard] = useState("");

const searchInput = document.getElementById('search-input');
const listContainer = document.getElementById('list-container');
const resultSuperHero = document.getElementById('result-superHero');
const superHeroCard = document.getElementById('superHero-card');
const superHeroName = document.getElementById("superHero-name");
const descriptionHeroContainer = document.getElementById('descriptionHero'); 
const superHeroDescription = document.getElementById("descriptionHeroSpan");

function requestApi(searchTerm) {   
    fetch("http://localhost:3001/superHeroes")
        .then(response => response.json())
        .then(data => {
            const result = data.filter(hero => 
            hero.name.toLowerCase().includes(searchTerm)
           
        );
            data.map(hero => {
                if (hero.name.toLowerCase().includes(searchTerm)) {
                    setImgCard(hero.urlImg)
                    setIdCard(hero.id)
                    setbackgroundHeroeCard(hero.backgroundHeroe)
                    setColorHeroeCard(hero.colorText)
                } 
            })
            displayResults(result)
  
        })
        .catch(error => console.error("Erro:", error));

};

function hideLists() {
    listContainer?.classList.add("hidden");

};

function displayResults(result) {
    hideLists();

    result.forEach((element) => {       
        superHeroCard.setAttribute('style', `background: ${backgroundHeroeCard}`)
        superHeroName.innerText = element.name;
        superHeroName.setAttribute('style', `color: ${colorHeroeCard}`)
        superHeroDescription.innerText = element.description;
    });

    listContainer?.classList.add("hidden");
    resultSuperHero?.classList.remove("hidden");
    superHeroCard?.classList.remove("hidden");
    superHeroCard?.classList.add("visible");

};

useEffect(() => {
    if (searchTerm === "") {
        listContainer?.classList.remove("hidden");
        resultSuperHero?.classList.add("hidden");
        superHeroCard?.classList.add("hidden");
        superHeroCard?.classList.remove("visible");
        return;
    } else {
        requestApi(searchTerm);      
    }

}, [searchTerm, requestApi]);

function touchCard() {
    descriptionHeroContainer?.classList.remove('hidden')

}

function outCard() {
    descriptionHeroContainer?.classList.add('hidden')

}

return (
    <div className="main-container">
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Arrow left" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Arrow right" />
                </button>
            
                <button className="header__search">
                    <img src={search} alt="" />
                    <input 
                        id="search-input" 
                        type="text" 
                        maxLength="800" 
                        placeholder="Choose your superhero..."
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                        autoComplete='off'
                    />
                </button>
                <span id='messageSideInput' className='hidden' >WELLCOME!!! SEARCH HERE!</span>
            </div>
        
            <div className="header__login">
                <button className="subscribe">Subscribe</button>
                <button className="login">Login</button>
            </div>
        </nav>
    
        <div id="list-container" className="list-containerClass">
            <div id="result-lists">
                <div className="list">
                    <h1 id="greeting">Hello!!!</h1>
                    <h2 className="session">Super Heroes</h2>
                </div>

                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            <Cards setGetHeroeId={setGetHeroeId} />
                        </section>
                    </div>
                </div>
            </div>
        </div>

        <div id="result-superHero" className="hidden">            
            <div 
                id="superHero-card" 
                className="hidden superHero-cardClass"
                onMouseOver={touchCard}
                onMouseOut={outCard}
            >
                <div className="card-img-class">
                    <img 
                        src={imgCard}
                        alt={idCard}
                        id="superHero-img" className="superHero-img-class" 
                    />
                    <div className="simbol">
                        <img 
                            src={simbol} 
                            className="simbolHero" 
                            alt="simbolHero"
                        />
                    </div>                            
                </div>

                <div className="card-text-class">
                        <span id="superHero-name" className="superHero-name-class"></span>
                </div>
            </div>
            
            <div id="descriptionHero" className="hidden">
                <span id="descriptionHeroSpan" className="descriptionHeroSpan-class"></span>
            </div>
        </div>
    </div>
)};

export default HeaderMain;
