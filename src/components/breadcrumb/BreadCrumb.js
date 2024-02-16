import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';


export default function BreadCrumb({clicked,cardTitle}) {
    let navigate = useNavigate();
  return (
    <nav aria-label="breadcrumb d-flex flex-row">
    <ol className="breadcrumb m-0 p-2">
      <li className="breadcrumb-item text-center d-flex justify-content-center align-items-center" style={{cursor:'pointer'}}>
          <h6 onClick={() => navigate("/blog")} className='m-0 ' style={{color:'blue'}}>Blogs</h6>
      </li>
      {clicked && <li className="breadcrumb-item">{cardTitle}</li>}
    </ol>
  </nav>
  )
}
