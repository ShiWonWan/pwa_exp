import { TopWaves } from './Extra';
import { FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";

export const Contact = () => {
  return (
    <div className='contact'>
        <TopWaves />
        <div className="desc">
          <h1>Hello, contact me!</h1>
          <p>You can contact me for anything; job offers, freelance jobs, any questions you may have, or just to say hello.
            <br /><br />
            I will try to answer as soon as possible.
          </p>
          <div className="social">
            <h2>Write me here:</h2>
            <ul>
              <li><FiMail className='iconsocail'/> <p>emmanuelcampu@gmail.com</p></li>
              <li><FiLinkedin className='iconsocail'/> <p>emmanuelcampu</p></li>
              <li><FiInstagram className='iconsocail'/> <p>emmanuelcampu</p></li>
            </ul>
          </div>
        </div>
    </div>
  )
}
