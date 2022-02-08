//css
import './Footer.css';
//material icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <>
            <ul className='footer-container'>
                <LinkedInIcon
                    className='social-media'
                    fontSize='small'
                />
                <GitHubIcon
                    className='social-media'
                    fontSize='small'
                />
            </ul>
        </>
    );
}

export default Footer;
