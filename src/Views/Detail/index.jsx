import React, { useState,useEffect } from 'react'
import Footer from '../../Components/Footer';
import { useNavigate, useParams } from "react-router-dom";
import { singleProduct } from '../../Config/firebase';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/cartSlice';
import Navbar from '../../Components/Navbar';


function Detail() {

    const [product,setProduct] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const BackToDashboard = ()=>{
        navigate(-1)
    }

     const singleProductData = async () => {
       try {
         const products = await singleProduct(params.id);
         const productWithId = { ...products, id: params.id }; // Include the ID
         setProduct(productWithId);
       } catch (error) {
         console.error("Error fetching product:", error);
       }
     };

     useEffect(() => {
       singleProductData();
     }, []);

     
     
     

  return (
    <div>
      <Navbar />
      <h2 className="font-bold m-1 text-center text-3xl text-blue-600">
        Detail About Product
      </h2>
      <div className="flex justify-center items-center">
        <div className="card w-80 h-auto shadow-lg m-5 bg-slate-200 text-black">
          <figure>
            <img
              src={product.image}
              alt="Shoes"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg">
              {product.title}!....
              <div className="badge badge-secondary ml-2">NEW</div>
            </h2>
            <p className="my-2">
              <span className="font-bold">Price: </span>
              {product.price}
            </p>
            <p className="my-2">
              <span className="font-bold">Description: </span>
              {product.description}
            </p>
            <div className="flex gap-2 mt-4">
              <button
                className="btn btn-info text-white"
                onClick={() => dispatch(addToCart(product))}
              >
                Add To Cart
              </button>
              <button
                className="btn btn-info text-white"
                onClick={BackToDashboard}
              >
                Back To Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail
