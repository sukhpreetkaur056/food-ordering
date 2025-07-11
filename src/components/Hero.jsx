import video from '../assets/background.mp4'
import Banner from './Banner'
import OfferCard from './OfferCard'
import Review from './Review'

function Hero() {
    return (
      <>
        <section className="hero-section">
            <video
                autoPlay
                muted
                loop
                playsInline
                src={video}
                aria-hidden="true"
            />
            <div className="hero-content">
                <h1>Experience the Taste of Tradition</h1>
                <p>
                    Discover authentic flavors delivered fresh to your doorstep.
                    From classic favorites to modern delights, every bite tells a story.
                </p>
                <a href="index.html" className="order-btn">
                    TapToEat
                </a>
            </div>
            
        </section>

        <Banner/>
        <Review/>
      </>
    )
}

export default Hero
