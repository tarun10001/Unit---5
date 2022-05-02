import { Link } from 'react-router-dom';
import './Homepage.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <ul className='footer-list'>
                    <li>BRAND INFO</li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Journal</li>
                    <li>Shipping</li>
                    <li>Returns | Exchanges | Refunds</li>
                    <li>Repairs | Warranty Info</li>
                    <li><Link to={"/faq"}>FAQ</Link></li>
                    <li>Opportunities</li>
                    <li>Wholesale</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div>
                <ul className='footer-list'>
                    <li>SHOP</li>
                    <li>Product 1</li>
                    <li>Product 1</li>
                    <li>Product 1</li>
                    <li>Product 1</li>
                    <li>Product 1</li>
                </ul>
            </div>
            <div className='footer-media'>
                <p>STAY IN TOUCH!</p>
                <p>Subscribe to receive updates about new releases and amazing offers.</p>
                <input placeholder="Enter your email"></input>
                <div>
                    <img src="https://www.clipartmax.com/png/middle/169-1696957_instagram-icon-instagram-icon-svg-white.png" alt="insta"></img>
                    <img src="https://www.pngfind.com/pngs/m/8-80848_png-file-svg-facebook-icon-png-free-download.png" alt="fb"></img>
                </div>
            </div>
        </footer>
    )
}

export { Footer }