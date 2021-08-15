import { useState } from 'react';
import axios from 'axios'

const Login = () => {

  async function handelLogin(e) {
    e.preventDefault()
    let data = {
      email:email,
     password: password
    }

    await axios.post(`${process.env.REACT_APP_API_URL}/login`, data)
    .then(
      response => localStorage.setItem("authToken", response.data.token)
        )
    .catch(error => {
        console.log("ERROR:: ",error.response.data);       
    });
    
    window.location.replace("http://localhost:3000/home");
 }
 
 const [email, setEmail]=useState('')
 const [password, setPassword] = useState('')
 
  return (
<div>
  <form className="w-50 m-auto">
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={e => { setEmail(e.target.value) }}/>
        </div>
        
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => {setPassword(e.target.value);}}/>
        </div>
        
    <button type="submit" className="btn btn-primary"  onClick={handelLogin}>Login</button>
  </form>
</div>       
)
}
 
export default Login;
