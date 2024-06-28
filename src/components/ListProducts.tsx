import { productStore, Product } from "../store/productsStore";

export default function ListProducts() {
  const products = productStore((state) => state.products);
  //const deleteProduct = productStore(state => state.deleteProduct)
  return (
    <div className="flex flex-col w-2/5 mx-2">
      <h1 className="text-slate-300 text-center text-xl my-1">
        Lista de productos
      </h1>
      <ul className=" text-white bg-slate-500 rounded-md p-2">
        {products.map((n: Product) => (
          <li className="border-b border-slate-400">
            <span>Nombre: {n.name} Cantidad: {n.quantity} Precio: {n.mount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
