import './Sidebar.css'
import logoSpotify from '../../assets/icons/logo-spotify.png';
import homeIcon from '../../assets/icons/home-icon.png'
import searchIcon from '../../assets/icons/search-icon.png'
import libraryIcon from '../../assets/icons/library-icon.png'
import globeIcon from '../../assets/icons/globe-icon.png'
import plusIcon from '../../assets/icons/plus-icon.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <Link to='/'>
                        <img src={logoSpotify} alt="Spotify icon"/>
                    </Link>
                </div>
                <ul>
                    <li className="sidebar__home__search__library">
                        <Link to='/'>
                            <img src={homeIcon} alt='home icon' id='iconHome' />
                        </Link>
                        <Link to='/'>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="sidebar__home__search__library">
                        <a href="">
                            <img src={searchIcon} alt='search icon' id='iconSearch' />
                        </a>
                        <a href="">
                            <span>Search</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button sidebar__home__search__library">
                        <img src={libraryIcon} alt='library icon' id='iconLibrary' />
                        <span>Library</span>
                    </button>
                    <a href="">
                        <img src={plusIcon} alt='plus icon' id='iconPlus' />
                    </a>
                </div>

                <section className="section-list">
                    <div className="section-list__content">
                        <span className="text title">Create your first list of the favorite superheroes</span>
                        <span className="text subtitle">It's quick, we'll help you!</span>
                        <button className="section-list__button">
                            <span>Create list</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a href="">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <img src={globeIcon} alt='globe icon' id='iconGlobe' />
                        <span>English</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
