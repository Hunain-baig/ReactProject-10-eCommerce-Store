import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem,increment,decrement } from '../../Store/cartSlice';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart } = useSelector((state) => state.allCart);
  console.log(cart);

  const dispatch = useDispatch();

  // Calculate total quantity and total amount
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,0
  );

  const navigate = useNavigate()
  const navToDashboard = ()=>{
    navigate("/")
  }

  return (
    <div className="overflow-x-auto bg-white">
      <Navbar />
      <button
        className="btn btn-info text-white ml-3 mt-3"
        onClick={navToDashboard}
      >
        Back To Dashboard
      </button>
      <table className="table mt-4 mb-8">
        {/* Table Head */}
        <thead>
          <tr className="text-2xl text-blue-600">
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        {/* Table Body */}
        {cart.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.image} alt="Product Name" />
                    </div>
                  </div>
                  <div className="text-black">
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm opacity-90 text-blue-600">
                      {item.category}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center ">
                  <button
                    className="btn btn-sm btn-primary text-white"
                    onClick={() => dispatch(decrement(item))}
                  >
                    -
                  </button>
                  <span className="mx-4 text-black text-lg">
                    {item.quantity}
                  </span>
                  <button
                    className="btn btn-sm btn-primary text-white"
                    onClick={() => dispatch(increment(item))}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-black text-lg font-mono">${item.price}</td>
              <td className="text-lg text-black font-mono">
                ${item.price * item.quantity}
              </td>
              <td>
                <button
                  className="btn btn-primary  btn-xl rounded-lg text-white"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div>
        {/* Table Foot */}
        <tfoot className="flex justify-end my-10 ml-5">
          <tr className="text-black text-lg mr-20">
            <div className="my-2">
              <th className="text-blue-600">Total Quantity: </th>
              <th className="font-mono"> {totalQuantity}</th>
            </div>
            <div>
              <th className="text-blue-600">Total Amount: </th>
              <th className="font-mono"> ${totalAmount}</th>
            </div>
          </tr>
        </tfoot>
      </div>
      <Footer />
    </div>
  );
}

export default Cart
