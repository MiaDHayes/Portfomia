import miaImage from '../assets/IMG_5769.jpeg'

export default function AboutMe () {
    return (
        <div className= "about-me">
            <div className= "about-me-img">
                <img src= {miaImage} alt= "Casual Looking Mia" />
            </div>
            <div className= "about-me-des">
                <h1>I be over here I be over there.</h1>
            </div>

        </div>

    )
}