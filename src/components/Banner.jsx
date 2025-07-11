import OfferCard from "./OfferCard"

function Banner() {
    return (
        <div>
            <section class="specials-section">
                <h2>Today's Specials</h2>
                <div class="specials-grid">
                    <OfferCard title="Channa Puri" description="Warm, Fluffy, Flavorful. Your Channa Puri Craving, Satisfied." price={50} imageUrl="https://i.pinimg.com/736x/19/2d/72/192d722849ed087bf9442e978544f954.jpg" btnText="View Details" />
                    <OfferCard title="Chhole Bhature" description="Tasty, delicious and what not" imageUrl="https://th.bing.com/th/id/OIP.m_c2Un-TR2tCfJ6mcWmM8wHaE8?w=290&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" price={70} btnText="Order Now" />
                    <OfferCard title="Rajma Chawal" description="Tasty, delicious and what not" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZZYV9Eu13fxu8qXT98ovX6SrG3hGOtpqPw&s" price={80} />
                    {/* <OfferCard title="Chhole Bhature" description="Tasty, delicious and what not" imageUrl="https://th.bing.com/th/id/OIP.m_c2Un-TR2tCfJ6mcWmM8wHaE8?w=290&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" price={150} />
                    <OfferCard title="Channa Puri" description="Warm, Fluffy, Flavorful. Your Channa Puri Craving, Satisfied." price={21} imageUrl="https://i.pinimg.com/736x/19/2d/72/192d722849ed087bf9442e978544f954.jpg" />
                    <OfferCard title="Chhole Bhature" description="Tasty, delicious and what not" imageUrl="https://th.bing.com/th/id/OIP.m_c2Un-TR2tCfJ6mcWmM8wHaE8?w=290&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" price={150} />
                    <OfferCard title="Chhole Bhature" description="Tasty, delicious and what not" imageUrl="https://th.bing.com/th/id/OIP.m_c2Un-TR2tCfJ6mcWmM8wHaE8?w=290&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" price={150} />
                    <OfferCard title="Chhole Bhature" description="Tasty, delicious and what not" imageUrl="https://th.bing.com/th/id/OIP.m_c2Un-TR2tCfJ6mcWmM8wHaE8?w=290&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" price={150} /> */}
                </div>
            </section>
        </div>
    )
}

export default Banner

