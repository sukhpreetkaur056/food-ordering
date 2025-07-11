import React from 'react'


export default function About() {
  return (
    <>
  
  <nav>
    <a href="#" className="logo">
      <img src="logo.jpg" alt="TapToEat Logo" />
    </a>
    <ul className="nav-links">
      <li>
        <a href="home.html">HOME</a>
      </li>
      <li>
        <a href="index.html">MENU</a>
      </li>
      <li>
        <a href="about.html">ABOUT</a>
      </li>
      <li>
        <a href="contact.html">CONTACT</a>
      </li>
      <li>
        <a href="login.html">LOGIN</a>
      </li>
    </ul>
  </nav>
  <div className="container">
    <h1>About Us</h1>
    <div className="divider" />
    <div className="about-content">
      <div className="about-text">
        <h2>Welcome to TapToEat!</h2>
        <p>
          TapToEat is your trusted partner in seamless food ordering and
          management. Founded with a passion for culinary excellence and
          technology, our mission is to connect food lovers with their favorite
          restaurants, making every meal a delightful experience.
        </p>
        <p>
          Whether you're a restaurant owner looking to streamline your
          operations or a customer craving delicious food at your fingertips,
          TapToEat brings convenience, speed, and reliability to your table.
        </p>
      </div>
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&h=400&facepad=2"
          alt="About TapToEat"
        />
      </div>
    </div>
    <div className="features">
      <div className="feature">
        <div className="feature-icon">🍽</div>
        <h3>Wide Restaurant Network</h3>
        <p>
          Partnered with top restaurants to offer a diverse menu for every taste
          and occasion.
        </p>
      </div>
      <div className="feature">
        <div className="feature-icon">⚡</div>
        <h3>Fast &amp; Secure Ordering</h3>
        <p>
          Enjoy a smooth, secure, and lightning-fast ordering experience from
          start to finish.
        </p>
      </div>
      <div className="feature">
        <div className="feature-icon">📱</div>
        <h3>Easy Management</h3>
        <p>
          Intuitive dashboard for restaurants to manage orders, menus, and
          customer feedback.
        </p>
      </div>
      <div className="feature">
        <div className="feature-icon">🌱</div>
        <h3>Fresh &amp; Quality Food</h3>
        <p>
          We ensure every order is prepared with the freshest ingredients and
          utmost care.
        </p>
      </div>
    </div>
    {/* Team Section Start */}
    <div className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s16000/blank-profile-picture-hd-images-photo.JPG"
            alt="Team Member 1"
          />
          <h3>Muzaffar Hussain</h3>
          <p>
            Co-Founder &amp; CEO
            <br />
            Email: Muzaffarhussain@taptoeat.com
          </p>
        </div>
        <div className="team-member">
          <img
            src="https://wishes.photos/wp-content/uploads/2020/10/blank-image-for-profile-picture-for-girl-1.jpg"
            alt="Team Member 2"
          />
          <h3>Sukhpreet Kaur</h3>
          <p>
            Head of Operations
            <br />
            Email: Sukhpreetkaur@taptoeat.com
          </p>
        </div>
        <div className="team-member">
          <img
            src="https://wishes.photos/wp-content/uploads/2020/10/blank-image-for-profile-picture-for-girl-1.jpg"
            alt="Team Member 3"
          />
          <h3>Nishtha Chhabra</h3>
          <p>
            Lead Developer
            <br />
            Email: Nishthachhabra@taptoeat.com
          </p>
        </div>
        <div className="team-member">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s16000/blank-profile-picture-hd-images-photo.JPG"
            alt="Team Member 4"
          />
          <h3>Aditya Singh</h3>
          <p>
            Marketing Manager <br />
            Email: Adityasingh@taptoeat.com
          </p>
        </div>
      </div>
    </div>
    {/* Team Section End */}
  </div>
 
</>

  )
}
