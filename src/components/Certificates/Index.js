import React, { useEffect,useState } from 'react';

import axios from 'axios'


const authAxios = axios.create({
 baseURL: process.env.REACT_APP_API_URL,
 headers: {
  Authorization:`Bearer ${localStorage.getItem('authToken')}`
 }
})

async function handelDelta(id){
 await authAxios.delete(`${process.env.REACT_APP_API_URL}/certificates/${id}`)
  .then((res) => console.log(res));
  await window.location.replace("http://localhost:3000/certificates");
}
const Index = () => {

 const [certificates, setCertificates] = useState([])

 useEffect(() => {
  const result = authAxios.get(`/certificates`).then(data => setCertificates(data.data));
 }, [])
  
 if (localStorage.getItem("authToken") != null) {
   

  return (

   <div class="w-75 m-auto">
    <div class=" text-start mb-5 my-3" ><a className="btn btn-outline-success" href="/certificates/create">Add</a></div>
       
   <table class="table ">
    <thead>
     <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Link</th>
      <th scope="col">Action</th>
     </tr>
    </thead>
    <tbody>
  
      {certificates.map((value ,key) => (
             <tr>
                <td>{key+1}</td>
                <td>{value.name}</td>
                <td>{value.description}</td>
        <td><a href={value.link} target="_blank" class="link">Link</a></td>
     
          <td>
            <a href={`/certificates/edit/id=${value.id}`} className='btn btn-outline-warning me-2'>Edit</a>
            <a type="button" onClick={() => { handelDelta(value.id) }} className='btn btn-outline-danger'>Delete</a>
          </td>
               <td></td>
              </tr>
         ))}

 
    </tbody>
     </table>
     </div>)
 }
}
export default Index;
