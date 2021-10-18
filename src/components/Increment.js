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
      <TitleRow titleText="Increment" buttonText="Add 1" buttonAction={incrementCount} />

      <div className="row">
        <div className="col d-flex justify-content-center">
          <Count count={count} />
        </div>
      </div>
    </>
  )
}

export default Increment