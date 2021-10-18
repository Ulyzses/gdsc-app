import React from 'react'

const TitleRow = ({ titleText, buttonText, buttonAction }) => {
  return (
    <div className="row my-5">
      <div className="col">
        <h1>{titleText}</h1>
      </div>
      <div className="col d-flex justify-content-end">
        <button type="button" className="btn btn-primary text-center" onClick={buttonAction}>{buttonText}</button>
      </div>
    </div>
  )
}

export default TitleRow
