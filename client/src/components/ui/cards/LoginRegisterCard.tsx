import React from "react";
import "./LoginRegisterCard.css";

const LoginForm: React.FC = () => {
  const toggleForm = () => {
    const container = document.querySelector(".container");
    if (container) {
      container.classList.toggle("active");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="formBx">
            <form onSubmit={(e) => e.preventDefault()}>
              <h2>Sign In</h2>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login" />
              <p className="signup">
                Don't have an account ?
                <button onClick={toggleForm}>Sign Up.</button>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form onSubmit={(e) => e.preventDefault()}>
              <h2>Create an account</h2>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Create Password" />
              <input type="password" placeholder="Confirm Password" />
              <input type="submit" value="Sign Up" />
              <p className="signup">
                Already have an account ?
                <button onClick={toggleForm}>Sign in.</button>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1568667256531-7d5ac92eaa7a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGJvb2tzfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
