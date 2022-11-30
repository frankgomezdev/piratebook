import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Pirate
            Book</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum voluptatum optio repellendus! Saepe maiores nulla delectus magni ab illum soluta repudiandae numquam vitae ducimus accusantium doloribus, quas blanditiis eaque.</p>
          <span>Already have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="text" placeholder="Name"/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Register;