import { useState } from 'react';
import axios from 'axios'

const Register = () => {

  async function handelRegister(e) {
    e.preventDefault()
    let data = {
      name: name,
      username: username,
      email:email,
      password: password,
     
    }
    await axios.post(`${process.env.REACT_APP_API_URL}/register`, data)
    .then(
      response =>
        localStorage.setItem("authToken", response.data.token)
        )
    .catch(error => {
        console.log("ERROR:: ",error.response.data);       
    });
    
    window.location.replace("http://localhost:3000/home");
 }
 
 const [name, setName]=useState('')
 const [email, setEmail]=useState('')
 const [username, setUsername]=useState('')
 const [password, setPassword] = useState('')
 
  return (
    <div>
 
      <form className="w-50 m-auto">
        
      <div className="mb-3">
      <label for="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" aria-describedby="nameHelp"  onChange={e => { setName(e.target.value) }}/>
        </div>

        <div className="mb-3">
      <label for="username" className="form-label">Username</label>
      <input type="text" className="form-control" id="username" aria-describedby="usernameHelp"  onChange={e => { setUsername(e.target.value) }}/>
        </div>

    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={e => { setEmail(e.target.value) }}/>
        </div>
        
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => {setPassword(e.target.value);}}/>
        </div>
        
    <button type="submit" className="btn btn-primary"  onClick={handelRegister}>Register</button>
  </form>
</div>       
)
}
 
export default Register;
