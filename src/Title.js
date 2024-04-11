import React from 'react'

// This do not use  props', direct input { two Title var } in the function
export default function Title( {mainTitle, discountTitle} ) {
  return (
    <div>
      <h1 style={{backgroundColor:'orange', borderBottom:'5px solid red' , textAlign:"center"}}>
      { mainTitle }
      { discountTitle}
      </h1>
    </div>
  )
}


/*
export default function Title(props) {
    return (
      <div>
        <h1 style={{backgroundColor:'orange', borderBottom:'5px solid red'}}>
        { props.mainTitle }
        { props.discountTitle}
        </h1>
      </div>
    )
  }
  */