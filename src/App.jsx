import React, { useState } from 'react'
import Topbar from './taskbar/topbar'
import Product from './container/product'

function App() {
    let data = [
      {
        productname:"Diary Milk Silk",
        rate:"100 $ - 400 $ ",
        pic: "https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/81619_two-dairy-milk-chocolate-with-soft-toy.jpeg",
        strike:"$500",
      },
      {
        productname:"Induction Stove",
        rate:"400 $ - 900 $ ",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGM-1CtdcLVyU3OMqrdmCsI8Aacs6YrV1Ww&s",
         strike:"$1000",
      },
      {
        productname:"Golden retriever",
        rate:"1500 $ - 2200 $ ",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecL89qMNIB7_-kmyfGMVmJgNj3xu2_ReP0w&s",
        strike:"$10,000",
      },
      {
        productname:"Water Bottle",
        rate:"800 $ - 900 $ ",
        pic:"https://m.media-amazon.com/images/I/71mDwwqFHLL._AC_UF1000,1000_QL80_.jpg",
        strike:"$5000",
      },
      {
        productname:"Toys For The Kids",
        rate:"500 $ - 750 $ ",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cMIWE15IzMXjb_Q28GV2JqciSPpCHSeKcg&s",
        strike:"$3000",
      },
      {
        productname:"Technical Mouse",
        rate:"140 $ - 600 $ ",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRBz49IHFH5JPUKICi4sdkk4KO5Tayjde2w&s",
        strike:"$800",
      },
      {
        productname:"Wireless Mouse",
        rate:"150 $ - 200 $",
        pic:"https://m.media-amazon.com/images/I/61Mk3YqYHpL._AC_UF894,1000_QL80_.jpg",
        strike:"$1500",
      },
      {
        productname:" Advanced Mouse",
        rate:"1500 $ - 2000 $ ",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgzaeUCYnMyGa-lis6tecjVAW6X2DWJPrVg&s",
        strike:"$6000"
      }
    ]
    let [cart,setcart]=useState(0)
  return <>
  <Topbar cart={cart}/>
  <header class="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
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
                        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
  </>
}

export default App
