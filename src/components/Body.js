import './Body.css';
import { GrMail } from 'react-icons/gr';
import { FaBaseballBall, FaFootballBall, FaGlasses, FaLinkedin, FaMailBulk } from 'react-icons/fa';


export default function Body(){
    return(    
        
        <div className="body">
            
            <div className="upperInfo">
                <h1 className="name">Cristiano Ronaldo</h1>
                <h3 className="title">Best Footballer</h3>
                <h4 className="site">cristiano7.com</h4>
           </div> 
           
           <div className="btn">
                <button className="email">
        
                    <div className='contact'><FaMailBulk/></div>
                    <div>Contact</div>

                </button>     

                <button className="goals">

                    <div className='logo'><FaBaseballBall/></div>
                    <div>Goals</div>

                </button>
           </div> 

           <div className="text">
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                
           </div>
           
        </div>       
        

    );

}
