import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function product({cart,setcart,data}) {
    let [toggle,settoggle] = useState(true)
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
      }
  return<>
  <div className="col mb-5">
                        <div className="card h-100">
                          
                            <img className="card-img-top" src={data.pic} alt="..."/>
                        
                            <div className="card-body p-4">
                                <div className="text-center">
                               
                                    <h5 className="fw-bolder">{data.productname}</h5>
                                    <strike style={{color:'grey'}}> {data.strike}</strike>
                                    <br/>{data.rate} 
                                </div>
                                <Rating onClick={handleRating} initialValue={rating} />
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {
                                toggle?<div className="text-center"><button className="btn btn-outline-dark mt-auto"
                                onClick={() =>{
                                    setcart(cart+1)
                                    settoggle(prev=>!prev)
                                } }
                                >Add To Cart</button></div> :
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto"
                            onClick={() => {
                                setcart(cart-1)
                                settoggle(prev=>!prev)
                            }}
                            >Remove From Cart</button></div>
                        }
                            </div>
                            </div>
                            </div>
                        
  </>
}

