import React from 'react'
import DataRow from './DataRow'

const DisplayData = ({ data }) => {
  const birthDate = `${new Date(data.dob.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} (${data.dob.age} years old)`;

  const loc = data.location
  const address = `${loc.street.number} ${loc.street.name}, ${loc.city}, ${loc.state}, ${loc.country} ${loc.postcode}`;

  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-7 d-flex flex-column align-items-start">
        <h1 className="display-4 pt-3 mb-0">{data.name.first} {data.name.last}</h1>
        <p className="mb-0">{data.email}</p>
        <p className="pb-3">{data.cell} | {data.phone}</p>
        <DataRow title="Date of Birth" data={birthDate} />
        <DataRow title="Address" data={address} />

      </div>
      <div className="col-lg-2 col-md-3 order-first order-md-2 d-flex align-items-top justify-content-center px-0">
        <div className="d-inline-flex flex-column align-items-center justify-content-start w-100 h-100 pb-3 pr-3">
          <img id="icon" className="align-self-center border w-100 rounded-circle" src={data.picture.large} alt="" />
        </div>
      </div>
    </div>
  )
}

export default DisplayData
