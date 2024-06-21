import { useState } from "react";

function Formulario() {
  const [list, setList] = useState([""]);
  const [product,setProduct] = useState("")
  const [quantity,setQuantity] = useState(0)
  const [total,setTotal] = useState(0)

  const handleSubmit = (e:any) => {
    e.preventDefault()
    setList([])
  }

  const addProduct = () => {
    setTotal(total + (Number(product.split(" ")[2]) * quantity))
    setList((current)=>[...current,product.split(" ")[0].toString() + product.split(" ")[1].toString()])
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <select
      required
        className="outline-none p-3 rounded-md text-white bg-slate-900 my-8 hover:bg-slate-700"
        onChange={(e)=>setProduct(e.target.value)}
      >
        <option value="Producto A 3">A precio 3$</option>
        <option value="Producto B 3">B precio 3$</option>
        <option value="Producto C 3">C precio 3$</option>
        <option value="Producto D 3">D precio 3$</option>
        <option value="Producto E 3">E precio 3$</option>
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
        className="outline-none p-3 rounded-md text-white bg-slate-900 hover:bg-slate-700 my-2"
      />

      <div className="my-4">
        <h1 className="text-slate-300 text-center text-xl my-1">
          Lista de productos
        </h1>
        <ul className=" text-white bg-slate-500 rounded-md p-2">
          {list.map((n) => (
            <li className="border-b border-slate-400">{n}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between my-4 text-slate-300">
        <span className="text-xl">Total a pagar:</span>
        <span className="text-xl">{total}$</span>
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
          onClick={addProduct}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        >
          Agregar producto
        </button>
      </div>
    </form>
  );
}

export default Formulario;
