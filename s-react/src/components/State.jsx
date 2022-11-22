import React, { useState } from 'react'

export default function State() {
  const [add, setAdd] = useState(0)
  const addHendler = () => {
    setAdd((prev) => prev + 1)
    setAdd((prev) => prev + 1)
    setAdd((prev) => prev + 1)
    setAdd((prev) => prev + 1)
    setAdd((prev) => prev + 1)
    console.log('ㅁ', add)
    // setAdd(add + 1)
  }
  return (
    <div>
      <button onClick={addHendler}>어떻게 될까요?</button>
    </div>
  )
}
