

import React from 'react'
import useCustomCounter from './useCustomCounter'

export default function TestCustomHook() {

        const data =    useCustomCounter();
        const data1=    useCustomCounter();



  return (
    <div>
        <h1>Count : {data.count}</h1>

        <button onClick={data.handleIncrement }>Count+</button>

        <h1>Count : {data1.count}</h1>

<button onClick={data1.handleIncrement }>Count+</button>

    </div>
  )
}
