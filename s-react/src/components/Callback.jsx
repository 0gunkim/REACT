import React, { useState, useCallback } from 'react'

export const Callback = () => {
  const [call, setCall] = useState(0)
  const [after, setAfter] = useState(0)

  const useCallbackFunctionReturn = useCallback(() => {
    console.log(after)
  }, [call])
  useCallbackFunctionReturn()
  return (
    <>
      <div>
        <h1>useCallback</h1>
        <button onClick={() => setAfter((prevOne) => prevOne + 1)}> +1 </button>
        <button onClick={() => setCall((prev) => prev + 1)}> = </button>
      </div>
    </>
  )
}
