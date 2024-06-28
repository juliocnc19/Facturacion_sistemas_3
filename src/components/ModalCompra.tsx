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
  Autocomplete, 
  AutocompleteItem
} from "@nextui-org/react";
import { productStore } from "../store/productsStore";
import { fecthMethod } from "../db/data";

export default function ModalCompra() {
  const isOpen = productStore((state) => state.isOpen);
  const changeIsOpen = productStore((state) => state.changeIsOpen);
  const listProducts = productStore((state) => state.products);
  const wipe = productStore((state) => state.wipeProduct);
  const total = productStore(state=>state.total)
  const changeTotal = productStore(state=> state.changeTotal)

  const cancelBuy = () => {
    changeIsOpen();
    wipe();
    changeTotal(-total);
  };

  return (
    <>
      <Modal isOpen={isOpen}>
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
              <span className="font-medium m-2 text-xl">Total a pagar: ${total}</span>
              <div className="bg-slate-100 flex flex-col m-2 p-2 rounded-sm">
                
                <Autocomplete label="Metodo de pago">
                  {fecthMethod.map((m) => (
                    <AutocompleteItem value={m.id} key={m.id}>{m.method}</AutocompleteItem>
                  ))}
                </Autocomplete>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={cancelBuy}>
              Cancelar compra
            </Button>
            <Button color="success" variant="light" onPress={cancelBuy}>
              Realizar compra
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
