import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { productStore } from "../store/productsStore";
import { fecthMethod } from "../db/data";
import useSupaBase from "../db/useSupaBase";
import { useState } from "react";

export default function ModalCompra() {
  const isOpen = productStore((state) => state.isOpen);
  const changeIsOpen = productStore((state) => state.changeIsOpen);
  const listProducts = productStore((state) => state.products);
  const wipe = productStore((state) => state.wipeProduct);
  const total = productStore(state=>state.total)
  const changeTotal = productStore(state=> state.changeTotal)
  const [method,setMethod] = useState("")
  const supabase = useSupaBase()

  const cancelBuy = () => {
    changeIsOpen();
    wipe();
    changeTotal(-total);
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault()
    console.log(method)
    console.log(total)
    const productSend = JSON.stringify(listProducts)
    
    const { data, error } = await supabase!
    .from('record_sell')
    .insert([
      { mount: total, method_id: method ,products:productSend },
    ])
    .select()
    if(!error){
      changeIsOpen()
    }
        
  }

  return (
    <>
      <Modal isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Factura</ModalHeader>
          <ModalBody>
            <div>
            <Table className="my-2">
            <TableHeader>
              <TableColumn>Nombre</TableColumn>
              <TableColumn>Precio C/U</TableColumn>
              <TableColumn>Cantidad</TableColumn>
            </TableHeader>
            <TableBody>
              {listProducts.map((p)=>(
                <TableRow>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.mount}</TableCell>
                <TableCell>{p.quantity}</TableCell>
              </TableRow>
              ))}
              </TableBody>
              </Table>
              <p className="font-medium m-2 text-xl">Total neto: ${total}</p>
              <p className="font-medium m-2 text-xl">Tota mas IVA : ${(total * 0.16)+total}</p>
              <div className="bg-slate-100 flex flex-col m-2 p-2 rounded-md">
                
                <select 
                className="outline-none p-2 rounded-md" 
                onChange={(e)=>setMethod((e.target.value))}>
                  {fecthMethod.map((m) => (
                    <option value={m.id} key={m.id}>{m.method}</option>
                  ))}
                </select>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={cancelBuy}>
              Cancelar compra
            </Button>
            <Button type="submit" color="success" variant="light">
              Realizar compra
            </Button>
          </ModalFooter>
        </ModalContent>
        </form>
      </Modal>
    </>
  );
}
