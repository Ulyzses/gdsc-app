import { useState } from "react"

import TitleRow from "./TitleRow"
import Count from "./Count"

const Increment = () => {
  const [ count, setCount ] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
    console.log(`Count set to ${count + 1}`);
  }

  return (
    <>  
      <TitleRow titleText="Stage 1" buttonText="Add 1" buttonAction={incrementCount} />

      <div className="row">
        <div className="col d-flex align-items-center flex-column">
          <div className="row">
            <div className="col">
              <Count count={count} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>COUNT</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Increment