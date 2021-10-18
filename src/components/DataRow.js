import React from 'react'

const DataRow = ({ title, data }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{data}</p>
    </>
  )
}

export default DataRow
