import React from 'react'
import logo from './react-log.png'
import boxStyle from './ListProduct.module.css'
import { useState } from 'react'
//import {Link, NavLink} from "react-router-dom"
import {Link} from "react-router-dom"
import Title from './Title'

// http://www.fookwing.com/download/songs/8Sine5min.mp3
//react-basic-product.json
// http://www.fookwing.com/download/songs/react-basic-product.json
 
export default function ListProduct() {
  let productItemList = [
    {"id":1,"name":"Apple","price":5,"image":"apple.jpg","description":"50g per day1 good health"},
    {"id":2,"name":"Orange","price":3,"image":"Orange.jpg","description":"50g per day2 good health"},
    {"id":3,"name":"Mango","price":4,"image":"mango.jpg","description":"500g per day3 good health"},
    {"id":4,"name":"Watermelon","price":20,"image":"watermelon.jpg","description":"2kg per day4 good health"},
    {"id":5,"name":"Blueberry","price":10,"image":"blueberry.jpg","description":"50g per day5 good health"},
    {"id":6,"name":"White-carrot","price":5,"image":"white-carrot.jpg","description":"1kg per day6 good health"}
    ]
  
   // fetch('http://www.fookwing.com/download/songs/react-basic-product.json')
   //fetch('./testafile.txt')
   
    fetch('eact-basic-product.json')
    .then(response => response.json() )
    .then(data1 => {
      prompt('Text File Data', data1);  });

    
  const [showProduct, setShowProduct] = useState(false)


  return (
    <div>
      {showProduct && <button onClick={()=>setShowProduct(false)}>Hide Fruit</button>}
      {!showProduct && <button onClick={()=>setShowProduct(true)}>Show Fruit</button>}
      <Title mainTitle="To Choose Product" discountTitle=" == Today 90% OFF =="  />

      <img src={logo} />     
        <img src={process.env.PUBLIC_URL+'/img/apple.jpg'} width={"121"}/>
     
       <p>apple1a3 and Orange 113</p>
       <div>
        {
         showProduct && productItemList.map( productMap=>(
          /* <div className='productBorder' key={product.id}> */
          <div className={boxStyle.productBorder} key={productMap.id}> 
            {productMap.name}<br/>
            {productMap.price}<br/>
            <Link to={'/product/' + productMap.id}>
              <img src={ process.env.PUBLIC_URL+'/img/'+productMap.image} width="101"/><br/>
            </Link>
            {productMap.description}<br/>
          </div>
          ) )
        }
       </div>
    </div>
  )
}
