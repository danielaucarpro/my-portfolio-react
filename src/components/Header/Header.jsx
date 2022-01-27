import './Header.css'

//material icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-container">
                <h1>Daniel Aucar</h1>
            </div>
            <div className="menu-container">
                <h2>Web Development</h2>
                <ul className="work-container">
                    <li className='header-list'>To-do task</li>
                </ul>
            </div>
            <div className="contact-container">
                <h3>Contact</h3>
            </div>
            <div>
                <ul className='socialMedia-container'>
                    <LinkedInIcon
                        className='social-media'
                        fontSize='small'
                    />
                    <GitHubIcon
                        className='social-media'
                        fontSize='small'
                    />
                </ul>
            </div>
        </header>
    );
}

export default Header;