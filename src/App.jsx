import React, { useState } from 'react'
import Topbar from './taskbar/topbar'
import Product from './container/product'

function App() {
    let data = [
      {
        productname:"Samsung Mobile",
        rate:"15,000 $ - 20,000 $ ",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHQYwJ8dZhyBvqZ-xOJVS0cAIDu0HTdp81A&s" 
      },
      {
        productname:"Perfume",
        rate:"400 $ - 200 $ " ,
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WSMkPcePF8F-lWHsN3Rf86T8wKYfH8qxCA&s"
      },
      {
        productname:"Glass Decorations",
        rate:"50 $ - 100 $ " ,
        pic:"https://m.media-amazon.com/images/I/61mJ0ZJYXjL._AC_UF894,1000_QL80_.jpg"
      },
      {
        productname:"Bingo Potato Chips",
        rate:"250 $ - 500 $ ",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgYhQ-4I-MyKSRHCXFDR9uL1z9Xb71JXPwQ&s"
      },
      {
        productname:"Diary Milk Silk",
        rate:"10 $ - 200 $ ",
        pic: "https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/81619_two-dairy-milk-chocolate-with-soft-toy.jpeg"
      },
      {
        productname:"Kitchen Appliances",
        rate:"40 $ - 100 $ ",
        pic:"https://leveltalk.wordpress.com/wp-content/uploads/2014/08/group-stainless-steel-kitchen-items-13989128.jpg",
      },
      {
        productname:"Golden retriever",
        rate:"1500 $ - 200 $ ",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecL89qMNIB7_-kmyfGMVmJgNj3xu2_ReP0w&s"
      },
      {
        productname:"Water Bottle",
        rate:"15 $ - 20 $ ",
        pic:"https://m.media-amazon.com/images/I/71mDwwqFHLL._AC_UF1000,1000_QL80_.jpg"
      },
    ]
    let [cart,setcart]=useState(0)
  return <>
  <Topbar cart={cart}/>
  <header class="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Amazon Big Billion Days</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Have a Happy Shopping</p>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                    data.map((e,i) =>{
                         return<Product cart={cart} setcart={setcart} data={e} key={i}/>
                    })
                   }
                   
                            </div>
                        </div>
                        </section>

  </>
}

export default App
