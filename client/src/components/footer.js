import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../CSS/footer.css"

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-content">
                <h3>BooKraze</h3>
                <p>Discover a World of Stories</p>
                <div className="icons icons-div">
                    <FacebookIcon />
                    <TwitterIcon />
                    <GoogleIcon />
                    <YouTubeIcon />
                    <LinkedInIcon />
                </div>
                <p className="copyright"> Copyright ⓒ {year}</p>
            </div>
        </footer>
    );
}

export default Footer;