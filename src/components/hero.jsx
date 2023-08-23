import heroImg from '../assets/girl-and-pet 1.png'
import './hero.css'

function Hero() {

    return(
        <>
            <div className="hero-container">
                <img src={heroImg} alt="hero" />
            </div>

        </>
    )

}

export default Hero