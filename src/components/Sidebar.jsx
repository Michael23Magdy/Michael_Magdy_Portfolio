import React from 'react';
import MyImage from '../assets/Michael.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faLinkedin , faGoogle , faGithub} from '@fortawesome/free-brands-svg-icons';



export function Sidebar(){

    return(
        <div className="sidebar">
            <img src={MyImage} alt="Michael Magdy Photo" className='picture' />
            <div className='name'>
                <h2>Michael Magdy</h2>
                <p>Software Engineer</p>
            </div>
            
            <ul className='socialMedia'>
                <li><a href="https://www.linkedin.com/in/michael-magdy-96432b1a2" target="_blank" rel="noopener noreferrer"
                        className='linkedin'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <span>LinkedIn</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </a></li>
                <li><a href='https://wa.me/01220687286' target="_blank" rel="noopener noreferrer"
                        className='whatsapp'>
                    <FontAwesomeIcon icon={faWhatsapp}/> 
                    <span>Whatsapp </span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </a></li>
                <li><a href='mailto:michaelmagdymagdy@gamil.com' target="_blank" rel="noopener noreferrer"
                        className='email'>
                    <FontAwesomeIcon icon={faGoogle}/> 
                    <span>Email</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </a></li>
                <li><a href='https://www.facebook.com/michael.magdy.77377' target="_blank" rel="noopener noreferrer"
                        className='facebook'>
                    <FontAwesomeIcon icon={faFacebook}/> 
                    <span>Facebook</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </a></li>
                <li><a href='https://github.com/Michael23Magdy' target="_blank" rel="noopener noreferrer"
                        className='github'>
                    <FontAwesomeIcon icon={faGithub}/> 
                    <span>Github</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </a></li>
            </ul>
        </div>
    );
}