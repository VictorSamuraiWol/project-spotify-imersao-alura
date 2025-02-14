import './Sidebar.css'
import logoSpotify from '../../assets/icons/logo-spotify.png';
import homeIcon from '../../assets/icons/home-icon.png'
import searchIcon from '../../assets/icons/search-icon.png'
import libraryIcon from '../../assets/icons/library-icon.png'
import globeIcon from '../../assets/icons/globe-icon.png'
import plusIcon from '../../assets/icons/plus-icon.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
    function focusSearch() {
        const focusSearchInput = document.querySelector('#search-input')
        const messageSideInput = document.querySelector('#messageSideInput')
        focusSearchInput?.focus()

        messageSideInput?.classList.add('visible')
        setTimeout(() => {
            messageSideInput?.classList.remove('visible')
        }, 3000)

    }

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
                            <span id='textHome'>Home</span>
                        </Link>
                    </li>
                    <li className="sidebar__home__search__library">
                        <img 
                            onClick={focusSearch} 
                            src={searchIcon} 
                            alt='search icon' 
                            id='iconSearch' 
                        />
                        <span 
                            onClick={focusSearch} id='textSearch'>Search</span>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button sidebar__home__search__library">
                        <img src={libraryIcon} alt='library icon' id='iconLibrary' />
                        <span>Library</span>
                    </button>
                    <img src={plusIcon} alt='plus icon' id='iconPlus' />
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

                <span className="cookies">Cookies</span>

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
