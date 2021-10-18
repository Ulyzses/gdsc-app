import { useState, useEffect } from "react"

import TitleRow from "./TitleRow"

const APIRaw = () => {
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
      <TitleRow titleText="Stage 2" buttonText="Reload API" buttonAction={refreshData} />

      { ( Object.keys(data).length > 0 ) ? (
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <pre className="border" id="json">{JSON.stringify(data, null, 2)}</pre>
            </div>
          </div>
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

export default APIRaw