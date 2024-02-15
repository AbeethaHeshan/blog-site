import React from 'react'

export default function ContactCard({title,image,textOne,textTwo}) {
  return (
    <div className="col-sm-7 col-md-4 d-flex justify-content-center">
    <div className="card m-3 border-0 bg-transparent" style={{ width: '300px' }}>
        <div className="d-flex align-items-center">
        <div className="d-flex justify-content-center">
            <img src={image} width={55} height={55} />
        </div>
            <div className="card-body bg-transparent p-0 mx-3">
                <h5 className="card-title text-white">{title}</h5>
                <p className="card-text m-0 text-white">{textOne}</p>
                <p className="card-text m-0 text-white">{textTwo}</p>
            </div>
        </div>
    </div>
   </div>
  )
}
