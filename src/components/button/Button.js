import React from 'react'

export default function Button(props) {
  return (
    <button type="submit" class="btn text-white" style={{backgroundColor:'#4932A2',width:'100px',borderRadius:'20px'}}
        onClick={(event)=>{
            event.preventDefault();
            props?.onClick()}}>
        {props?.title}
    </button>
  )
}
