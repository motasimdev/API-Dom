import Container from "../Container";
import Flex from "../Flex";
import Product from "../layouts/Product";

const Home = () => {
  return (
    <Product />

    // step-1. div diye ekta shape banate hbe 300 something width r halka padding diye. jkhane badge, img, title, price thkbe.


    // step-2. terminal: npm i axios


    // step-3. import React, { useEffect, useState } from "react";
    //         import axios from "axios";


    // step-4. return er age,

    // const [myProduct, setMyproduct] = useState([]);

    // useEffect(() => {
    //   async function all() {
    //     let data = await axios.get("https://dummyjson.com/products");
    //     setMyproduct(data.data.products);
    //   }
    //   all();
    // }, []);


    // step-5. myProduct k map krte hbe r ekta div er vitore key={item.id} diye wrap kre then vitore ager banano shape diye shekhane item.title etc er nam boshate hbe, 

    // <div className="flex items-center flex-wrap gap-4 justify-center">
        //   {myProduct.map((item) => (
        //     <div key={item.id}>
        //       <div className="bg-amber-100 p-5 w-[400px]">
        //         <Image src={item.thumbnail} />
        //         <h3>{item.title}</h3>
        //         <p>{item.price}</p>
        //       </div>
        //     </div>
        //   ))}






     //===================TYPE TWO=====================
    // step-1. terminal: npm i react-router
    

    //step-2. main jsx: 
    //import { createBrowserRouter } from "react-router";
    //import { RouterProvider } from "react-router/dom";
    

    //step-3. main jsx: 
    // <RouterProvider router={router} />,
    

    //step-4. create Root.jsx =>
    //import React from 'react'
      //import Header from './Header'
     // import { Outlet } from 'react-router'
     // import Footer from './Footer'

      //const Root = () => {
       // return (
           // <>
           // <Header/>
           // <Outlet/>
            //<Footer/>
           // </>)}

        //export default Root


      //step-5. main.jsx e import er niche=>
      const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "shop", Component: Shop },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
    ],
  },
]);
    
        // </div>
  );
};

export default Home;
