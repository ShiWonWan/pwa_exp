import { Link } from "react-router-dom"

export const AboutMe = () => {
  return (
    <>
      <section className="aboutme">
        <h2>About.</h2>
        <p className="general">Since 2020, I have been dedicated to creating solutions
        and making better software for large organizations. Formally, I started studying
        software in 2016, but since I was a child I am in love with the whole IT world.</p>

        <p className="comunication">I'm a team worker, my thought about is that it's the key to success,
        I can relate that to my facility to talk with anybody, so be comfortable to <Link to='/contact' id="contact">contact me</Link> for a job!</p>

        <p className="lang">I speak 3 languages fluently: Spanish, English and French,<br /> I'm a good leader and my life philosophy is <b>respect</b>.</p>


      </section>
    </>
  )
}
