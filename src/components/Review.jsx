import React from 'react'

function Review() {
  return (
    <div>
        <section className="testimonials-section">
        <div className="container">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <p className="quote">"TapToTouch has completely changed my takeaway experience! The food is consistently amazing, and the delivery is always so quick. Highly recommended!"</p>
                    <div className="testimonial-author">- Sarah L.</div>
                    <div className="testimonial-info">Student at City University</div>
                </div>
                <div className="testimonial-card">
                    <p className="quote">"I'm a huge fan of their healthy bowls. It's so hard to find delicious and nutritious food delivery, but FlavorFlow nails it every time. My go-to app!"</p>
                    <div className="testimonial-author">- David M.</div>
                    <div className="testimonial-info">Software Engineer</div>
                </div>
                <div className="testimonial-card">
                    <p className="quote">"The variety on their menu is incredible! We've tried so many different dishes, and each one has been a hit. Ordering is super easy, too."</p>
                    <div className="testimonial-author">- Emily R.</div>
                    <div className="testimonial-info">Local Business Owner</div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}


  export default Review;