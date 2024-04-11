import React from 'react'
import logo from './react-log.png'
import boxStyle from './ListProduct.module.css'
import { useState } from 'react'


//let product='fruit'
//const [product, setProduct] = useState('FRUIT')
//const handleClick= ()=> {
 // product='react text'
 // setProduct('Fruit new click')
 // console.log(product)
//}

export default function ListProduct() {
  let productItemList = [
    {"id":1,"name":"Apple","price":5,"image":"apple.jpg","description":"50g per day1 good health"},
    {"id":2,"name":"Orange","price":3,"image":"Orange.jpg","description":"50g per day2 good health"},
    {"id":3,"name":"Mango","price":4,"image":"mango.jpg","description":"500g per day3 good health"},
    {"id":4,"name":"Watermelon","price":20,"image":"watermelon.jpg","description":"2kg per day4 good health"},
    {"id":5,"name":"Blueberry","price":10,"image":"blueberry.jpg","description":"50g per day5 good health"},
    {"id":6,"name":"White-carrot","price":5,"image":"white-carrot.jpg","description":"1kg per day6 good health"}
    ]
    
  const [product, setProduct] = useState('FRUIT')
  return (
    <div>
      {/*{product}  <button onClick={handleClick}>Change State</button>*/}
      {product}  <button onClick={()=>setProduct('Fruit new click')}>Change State</button>
      <h1 style={{backgroundColor:'orange', borderBottom:'5px solid red'}}>Please Select Product below</h1>
      <img src={logo} />
      <img src={process.env.PUBLIC_URL+'/img/apple.jpg'} width={
        "121" 
      }/>
       <p>apple1a3 and Orange 113</p>
       <div>
        {
         productItemList.map( product=>(
          /* <div className='productBorder' key={product.id}> */
          <div className={boxStyle.productBorder} key={product.id}> 
            {product.name}<br/>
            {product.price}<br/>
            <img src={ process.env.PUBLIC_URL+'/img/'+product.image} width="101"/><br/>
            {product.description}<br/>
          </div>
          ) )
        }
       </div>
    </div>
  )
}
