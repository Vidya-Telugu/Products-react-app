import React from 'react'
import { useState } from 'react'

function Products() {
  const[products,setProducts]=useState([]);
  const[form,setForm]=useState({Name:"",Description:"",Price:"",Large:"",Medium:"",Small:""});
  const[cartOpen,setCartOpen]=useState(false)
  
  function handleIsOpen(){
    setCartOpen(true);
  }
  function handleForm(e){
    setForm((prev)=>({...prev,[e.target.name]:e.target.value}));
  }

  function handleAddProduct(e){
    e.preventDefault();
    setProducts((prev)=>([...prev,form]));
    setForm({Name:"",Description:"",Price:"",Large:"",Medium:"",Small:""});
  }
  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <label htmlFor='Name'>Name</label>
        <input type="text" name="Name" value={form.Name} onChange={handleForm}></input>
        <label htmlFor='Description'>Description</label>
        <input type="text"  name="Description" value={form.Description} onChange={handleForm}></input>
        <label htmlFor='Price'>Price</label>
        <input type="text" name='Price' value={form.Price} onChange={handleForm}></input>
        <label htmlFor='Large'>L</label>
        <input type="number" name="Large" value={form.Large} onChange={handleForm}></input>
        <label htmlFor='Medium'>M</label>
        <input type="number" name="Medium" value={form.Medium} onChange={handleForm}></input>
        <label htmlFor='Small'>S</label>
        <input type="number" name="small" value={form.Small} onChange={handleForm}></input>
        <button type="submit">Add Product</button>
        <button onClick={handleIsOpen}>Cart</button>
      </form>
       
    </div>
  )
}

export default Products
