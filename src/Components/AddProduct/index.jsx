import React from 'react'
import { useState } from 'react';
import { addProduct } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';

function AddProduct() {

    const [title,setTitle] = useState()
    const [image,setImage] = useState()
    const [description,setDescription] = useState()
    const [price,setPrice] = useState()
    const [category,setCategory] = useState()
    const navigate = useNavigate()


    const submitAddDetails = async()=>{
        try {
            await addProduct({ title, image, description, price, category });
            alert("Product added succesfully");
            navigate("/")
        } catch (error) {
            alert(error.message)
        }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Add New Product
        </h2>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="title"
          >
            Product Title
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product title"
            onChange={e=>setTitle(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="image"
          >
            Product Image
          </label>
          <input
            type="file"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={e=>setImage(e.target.files[0])}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="description"
          >
            Product Description
          </label>
          <input
            className="w-full px-2 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
            placeholder="Enter product description"
            onChange={e=>setDescription(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
            placeholder="Enter product price"
            onChange={e=>setPrice(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-medium mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product category"
            onChange={e=>setCategory(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-5"
            onClick={submitAddDetails}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct
