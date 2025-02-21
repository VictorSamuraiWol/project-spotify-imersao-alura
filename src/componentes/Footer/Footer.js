import { Link } from 'react-router-dom';
import './Footer.css'
import wolverine from '../../assets/icons/icone-wolverine-sem-fundo.png'

const Footer = () => {
    return (
        <footer className="disclaimer-premium">
            <div className="text">
                <p className="disclaimer-premium__title">Test Premium for free</p>
                <p className="disclaimer-premium__subtitle">
                    Sign up to enjoy the list of the best superheroes of all time. No credit card required.
                </p>
            </div>
            <div className='contact'>
                <img src={wolverine} alt="icon wolverine" />
                <p>Created by Victor Cardoso. Feel free to connect on  
                    <Link id='contactLink' to="https://www.linkedin.com/in/victor-cardoso-cloud-front/" target="_blank"> Linkedin.
                    </Link>
                </p>
            </div>
            <div className="button">
                <button type="button">Sign up for free</button>
            </div>
        </footer>
    )
};

export default Footer;
