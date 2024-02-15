import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TextField(props) {
  return (
   <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">{props?.label}</label>
    <input 
        type={props?.type} 
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp" 
        value={props?.value}   
        onChange={(event) => { 
          props?.onChange(event); 
        }}
      />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
   </div>
  )
}
