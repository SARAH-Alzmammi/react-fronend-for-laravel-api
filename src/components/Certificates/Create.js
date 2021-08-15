import { useState } from 'react';
import axios from 'axios'
const authAxios = axios.create({
 baseURL: process.env.REACT_APP_API_URL,
 headers: {
  Authorization:`Bearer ${localStorage.getItem('authToken')}`
 }
})

const Create = () => {

  async function handelRegister(e) {
    e.preventDefault()
    let data = {
      name: name,
      link: link,
      description:description 
   }
   
    e.preventDefault()
    await authAxios.post(`${process.env.REACT_APP_API_URL}/certificates`, data)
    .then(
      response =>
       console.log(response)
        )
    .catch(error => {
        console.log("ERROR:: ",error.response.data);       
    });
    
window.location.replace("http://localhost:3000/home");
 }
 
 const [name, setName]=useState('')
 const [description, setDescription]=useState('')
 const [link, setLink]=useState('')

 
  return (
    <div>
 
      <form className="w-50 m-auto">
        
      <div className="mb-3">
      <label for="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" aria-describedby="nameHelp"  onChange={e => { setName(e.target.value) }}/>
        </div>

        <div className="mb-3">
      <label for="description" className="form-label">Description</label>
      <input type="text" className="form-control" id="description" aria-describedby="descriptionHelp"  onChange={e => { setDescription(e.target.value); }}/>
        </div>

    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Link</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={e => { setLink(e.target.value) }}/>
        </div>
        
    <button type="submit" className="btn btn-primary"  onClick={handelRegister}>Add</button>
  </form>
</div>       
)
}
 
export default Create;
