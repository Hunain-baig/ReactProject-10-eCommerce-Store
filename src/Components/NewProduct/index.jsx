import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getProducts } from '../../Config/firebase';

function NewProduct() {
    const navigate = useNavigate()
    const [products,setProducts] = useState([])


    const singleProduct = async()=>{
      const products = await getProducts()
      setProducts(products)
    }

    useEffect(() => {
     singleProduct()
    }, []);

    const navToDetail = (product) => {
      navigate(`/detail/${product.id}`);
    };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="card bg-slate-200 w-80 shadow-xl mt-5 mb-5 flex flex-col"
        >
          <figure className="px-4 pt-4">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body flex-grow items-center text-center text-black">
            <h2 className="card-title">{item.title}</h2>
            <h1>
              <span className="font-bold">Price: </span>
              {item.price}
            </h1>
          </div>
          <div className="card-actions justify-center pb-4">
            <button
              className="btn btn-info  text-white"
              onClick={() => navToDetail(item)}
            >
              Detail Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewProduct
