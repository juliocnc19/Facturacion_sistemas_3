import { useState } from "react";
import { productStore } from "../store/productsStore";
import { fetchProducts } from "../db/data";
import ModalCompra from "./ModalCompra";

function Formulario() {
  const [selectedProduct,setSelectedProduct] = useState(0)
  const [quantity,setQuantity] = useState(0)
  const add = productStore(state => state.addProduct)
  
  const changeIsOpen = productStore(state =>state.changeIsOpen)
  const mountTotal = productStore(state =>state.total)
  const changeTotal = productStore(state =>state.changeTotal)

  const handleSubmit = (e:any) => {
    e.preventDefault()
    changeIsOpen()

  }

  const addProduct = () => {
    
    const productSelected = fetchProducts.find(n => n.id == selectedProduct)
    const newProduct = {
      id:selectedProduct,
      name:productSelected!.name,
      quantity,
      mount:productSelected!.mount,
    }
    
    changeTotal((Number(productSelected!.mount) * quantity))
    add(newProduct)
  };

  return (
    <>
    <ModalCompra/>
    <form className="flex flex-col bg-slate-800 rounded-md p-6" onSubmit={handleSubmit}>
      <h1 className="text-white font-semibold text-3xl text-center my-3">Facturacion - Ferreteria</h1>
      <select
      required
        className="outline-none p-3 rounded-md text-white bg-slate-900 my-4 hover:bg-slate-700"
        onChange={(e)=>setSelectedProduct(Number(e.target.value))}
      >
        <option value=""></option>
        {fetchProducts.map((n)=>(
          <option value={n.id} key={n.id}>{n.name} ----- Precio: ${n.mount}</option>
        ))}
      </select>

      <label htmlFor="cantidad" className="text-white font-semibold">
        Cantidad
      </label>
      <input
        id="cantidad"
        type="number"
        min={1}
        required
        onChange={(e)=>setQuantity(Number(e.target.value))}
        className="outline-none p-3 rounded-md text-white bg-slate-900 hover:bg-slate-700 my-1"
      />

      <div className="flex justify-between my-2 text-slate-300">
        <span className="text-xl">Total a pagar:</span>
        <span className="text-xl">{mountTotal}$</span>
      </div>
      <div className="flex my-2 justify-between">
        <button
          type="submit"
          value="Comprar"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
        >
          Comprar
        </button>
        <button
          type="button"
          onClick={addProduct}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        >
          Agregar producto
        </button>
      </div>
    </form>
    </>
  );
}

export default Formulario;
