import man from '../images/me.png'
import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <>
            <div className="banner">
                <div>
                    <p id="name">Hello, my name is</p>
                    <h1>Emmanuel Campuzano.</h1>
                    <p id="whoami">I'm a <strong>Fullstack Developer</strong>
                        / <strong>Software Engineer</strong>.</p>
                </div>
                <img src={man} alt="Emmanuel Campuzano's portrait." id="me" />
                
            </div>
            <div className="contactButton">
                <Link to='/contact' id="contact">Contact me</Link>
            </div>
        </>
    )
}
