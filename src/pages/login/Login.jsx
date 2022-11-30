import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.scss"

const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Pirate
            Book</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum voluptatum optio repellendus! Saepe maiores nulla delectus magni ab illum soluta repudiandae numquam vitae ducimus accusantium doloribus, quas blanditiis eaque.</p>
          <span>Don't have an account?</span>
           <Link to='/register'>
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            {/* <button onClick={handleLogin}>Login</button> */}
            <Link to='/home'>
          <button>Login</button>
          </Link>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Login