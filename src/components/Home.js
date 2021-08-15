import React, { useEffect,useState } from 'react';

import axios from 'axios'


const authAxios = axios.create({
 baseURL: process.env.REACT_APP_API_URL,
 headers: {
  Authorization:`Bearer ${localStorage.getItem('authToken')}`
 }
})

const Home = () => {

 const [certificates, setCertificates] = useState([])

useEffect(() => {
  const result =  authAxios.get(`/certificates`).then(data=>setCertificates(data.data));
}, [])
  
  if (localStorage.getItem("authToken") != null) {
   
    if (certificates.length > 0) {
      return (  
          <div className="d-flex justify-content-center gap-5 flex-wrap mt-5">   
          {certificates.map((value) => (
              <div class="card w-25 ">
              <div class="card-body">
                <h5 class="card-title text-primary fw-bold text-start">{value.name}</h5>
                <p class="card-text text-start">{value.description}</p>
                <div class=" text-start" >
                <a href={value.link} target="_blank" class="btn btn-outline-dark ms-start">View Certificate</a>
                </div>
              </div>
            </div>
          ))}   
        </div>
      )
    } else {
      return (
        <div> 
        <p>You did not add any certificates yet</p>
        </div>
      )
    }
  } else {
    window.location.replace("http://localhost:3000/");
  }



}
export default Home;
