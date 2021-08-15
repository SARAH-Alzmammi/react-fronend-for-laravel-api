import { useState,useEffect } from 'react';
import axios from 'axios'
const authAxios = axios.create({
 baseURL: process.env.REACT_APP_API_URL,
 headers: {
  Authorization:`Bearer ${localStorage.getItem('authToken')}`
 }
})

const Edit = () => {
 const [id, setID]=useState()
 const [name, setName]=useState('')
 const [description, setDescription]=useState('')
 const [link, setLink] = useState('')

useEffect((e) => {
  let id = window.location.pathname.split('=')[1];
  console.log(id)

 authAxios.get(`${process.env.REACT_APP_API_URL}/certificates/${id}`)
    .then(
     response =>
     {
      setID(response.data.id)
      setName(response.data.name)
     setDescription(response.data.description)
     setLink(response.data.link)}
        )
    .catch(error => {
        console.log("ERROR:: ",error.response.data);       
    });
    
},[])
 async function handelUpdate(e) {
  let data = {
   name: name,
   link: link,
   description:description 
}

    e.preventDefault()

    await authAxios.put(`${process.env.REACT_APP_API_URL}/certificates/${id}`, data)
    .then(
      response =>
       console.log(response)
        )
    .catch(error => {
        console.log("ERROR:: ",error.response.data);       
    });
    
    window.location.replace("http://localhost:3000/certificates");
 }
 


 
  return (
   <div>
 
      <form className="w-50 m-auto">
        
      <div className="mb-3">
      <label for="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" aria-describedby="nameHelp" value={name} onChange={e => { setName(e.target.value) }}/>
        </div>

        <div className="mb-3">
      <label for="description" className="form-label">Description</label>
      <input type="text" className="form-control" id="description" value={description}aria-describedby="descriptionHelp"  onChange={e => { setDescription(e.target.value); }}/>
        </div>

    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Link</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={link} onChange={e => { setLink(e.target.value) }}/>
        </div>
        
    <button type="submit" className="btn btn-primary"  onClick={handelUpdate}>Update</button>
  </form>
</div>       
)
}
 
export default Edit;
