
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 🍕</h2>
        <p>Login to order your favorite meals</p>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p className="register-link">
            Don’t have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
