import { useState, useEffect } from "react"
import DisplayData from "./DisplayData";

import TitleRow from "./TitleRow"

const API = () => {
  const [ data, setData ] = useState({})

  const refreshData = async () => {
    console.log("Reloading data")

    const res = await fetch('https://randomuser.me/api');
    const apiData = await res.json()

    setData(apiData.results[0]);

    console.log(apiData.results[0])
  }

  useEffect(() => {
    refreshData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TitleRow titleText="API Call" buttonText="Reload API" buttonAction={refreshData} />

      { ( Object.keys(data).length > 0 ) ? (
          <DisplayData data={data} />
        ) : (
          <div className="row">
            <div className="col">
              Loading data. If loading takes a long time, please reload API.
            </div>
          </div>
        )
      }
    </>
  )
}

export default API