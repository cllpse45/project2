import './Footer.css';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer(){
    return(        
         
        <div className="footer"> 
            <a href="https://www.twitter.com"> <FaTwitter color='white' size={20}></FaTwitter></a>
             <a href="https://facebook.com"> <FaFacebook color='white' size={20}></FaFacebook></a>
            <a href="https://instagram.com"> <FaInstagram color='white' size={20}></FaInstagram></a>
            <a href="https://github.com"> <FaGithub color='white' size={20}></FaGithub></a>       
        </div>        
   
    );
}
export default Footer;