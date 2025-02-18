import './IllustrativesCards.css'

function IllustrativesCards() {

    function alertIllustrativesCards() {
        const greeting = document.querySelector('.list #greeting')
        const session = document.querySelector('.list .session')
        const alert = document.querySelector('#alertGreetingSession')
        
        greeting?.classList.add('hidden')
        session?.classList.add('hidden')
        alert?.classList.remove('hidden')

        setTimeout(() => {
            greeting?.classList.remove('hidden')
            session?.classList.remove('hidden')
            alert?.classList.add('hidden')
        }, 5000)

    }

    return (
        <>
            <div
                onClick={alertIllustrativesCards}
                id='ill1' 
                className="cardsList"
            >
                <div                    
                    style={{color: 'blue', background: 'linear-gradient(19deg, rgba(2,0,166,1) 30%, rgba(172,0,0,1) 54%, rgba(99,0,0,1) 77%)'}}
                    className="cards"
                >
                    <img className="imgStyle" src='/assets/list/ill1.gif' alt='sonic gif' />
                    <span style={{color: 'blue'}}>Sonic</span>
                </div>
            </div>
            <div
                onClick={alertIllustrativesCards}
                id='ill2' 
                className="cardsList"
            >
                <div
                    style={{color: 'red', background: 'linear-gradient(19deg, rgba(190,3,3,1) 30%, rgba(161,4,4,1) 54%, rgba(0,0,0,1) 77%)'}}
                    className="cards"
                >
                    <img className="imgStyle" src='/assets/list/ill2.gif' alt='shadow gif' />
                    <span style={{color: 'darkred'}}>Shadow</span>
                </div>
            </div>
            <div
                onClick={alertIllustrativesCards}
                id='ill3' 
                className="cardsList"
            >
                <div
                    style={{color: 'yellow', background: 'linear-gradient(19deg, rgba(246,243,2,1) 30%, rgba(203,201,13,1) 54%, rgba(255,3,3,1) 77%)'}}
                    className="cards"
                >
                    <img className="imgStyle" src='/assets/list/ill3.gif' alt='pikachu gif' />
                    <span style={{color: 'yellow'}}>Pikachu</span>
                </div>
            </div>
            <div
                onClick={alertIllustrativesCards}
                id='ill4' 
                className="cardsList"
            >
                <div
                    style={{color: 'green', background: 'linear-gradient(19deg, rgba(14,84,0,1) 30%, rgba(51,168,0,1) 54%, rgba(109,247,0,1) 77%)'}}
                    className="cards"
                >
                    <img className="imgStyle" src='/assets/list/ill4.gif' alt='bulbasaur gif' />
                    <span style={{color: 'green'}}>Bulbasaur</span>
                </div>
            </div>
            <div
                onClick={alertIllustrativesCards}
                id='ill5' 
                className="cardsList"
            >
                <div
                    style={{color: 'gray', background: 'linear-gradient(19deg, rgba(84,84,84,1) 30%, rgba(193,193,193,1) 54%, rgba(171,130,16,1) 77%)'}}
                    className="cards"
                >
                    <img className="imgStyle" src='/assets/list/ill5.gif' alt='he man gif' />
                    <span style={{color: 'gray'}}>He Man</span>
                </div>
            </div>
        </>
    )
}

export default IllustrativesCards
