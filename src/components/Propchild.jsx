import React from 'react'

const Propchild = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.username}</h1>
        <h2>{props.comapny}</h2>
        {
            props.children
        }
    </div>
  )
}

export default Propchild