import React from 'react'

export default function BreadCrumb({clicked,cardTitle}) {
  return (
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="blog">Blogs</a></li>
      {clicked && <li className="breadcrumb-item">{cardTitle}</li>}
    </ol>
  </nav>
  )
}
