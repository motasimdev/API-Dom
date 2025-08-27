import React, { useEffect, useState } from "react";
import Image from "../Image";
import Container from "../Container";
import axios from "axios";
import pic from "/src/assets/pexels-omergulen-29421973.jpg";

const Product = () => {
  const [myProduct, setMyproduct] = useState([]);

  useEffect(() => {
    async function all() {
      let data = await axios.get("https://dummyjson.com/products");
      setMyproduct(data.data.products);
    }

    all();
  }, []);

  return (
    <>
      <Container>
        <div className="flex items-center flex-wrap gap-4 justify-center py-6">
          {myProduct.map((item) => (
            <div key={item.id}>
              <div className="bg-amber-100 p-5 w-[400px]">
                <Image src={item.thumbnail} />
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Product;
