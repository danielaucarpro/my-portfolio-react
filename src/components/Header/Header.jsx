import './Header.css'

import { Link } from 'react-router-dom';

//material icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-container">
                <Link to='/' className='header-logo'>Daniel Aucar</Link>
            </div>
            <div className="menu-container">
                <h2>Web Development</h2>
                <ul className="work-container">
                    <Link to='/detail' className='header-list'>To-do task</Link>
                </ul>
            </div>
            <div className="contact-container">
                <Link to='/contact' className='header-contact'>Contact</Link>
            </div>
            <div>
                <ul className='socialMedia-container'>
                    <a href='https://www.linkedin.com/in/daniel-aucar-felipe-2a922291/' target="_blank">
                        <LinkedInIcon
                            className='social-media'
                            fontSize='small'
                        />
                    </a>
                    <a href='https://github.com/danielaucarpro' target="_blank">
                        <GitHubIcon
                            className='social-media'
                            fontSize='small'
                        />
                    </a>
                </ul>
            </div>
        </header>
    );
}

export default Header;