import React, { useEffect, useState } from 'react'

const Test = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {

    console.log('Effect count:', count);

  }, [count]);

  function handleClick() {

    setCount(count + 1);

  }

  console.log('Render count:', count);
  return (
    <div>
        <button onClick={handleClick}>Increment</button>

<p>Count: {count}</p>
    </div>
  )
}

export default Test