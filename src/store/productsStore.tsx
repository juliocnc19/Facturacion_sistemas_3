import { create } from "zustand";

export type Product = {
    id:number
    name:string
    quantity:number
    mount:number
}

type Bill = {
    id:number
    date:string
    total:number
    method:string
    listProducts:Product[]
}

type State = {
    products: Product[]
    bill:Bill | {}
    isOpen:boolean
    total:number
}

type Action = {
    addProduct:(product:Product) => void
    deleteProduct:(id:number) => void
    editProduct:(Product:Product) => void
    wipeProduct:()=>void
    changeIsOpen:()=>void
    changeTotal:(newTotal:number)=>void
}

export const productStore = create<State & Action>((set)=>({
    products:[],
    bill:{},
    isOpen:false,
    total:0,
    addProduct:(product:Product) => set(state => ({ products: [...state.products, product] })),
    deleteProduct:(id:number) => set(state => ({
        products: state.products.filter(product => product.id !== id)
    })),
    editProduct:(updatedProduct:Product) => set(state => ({
        products: state.products.map(product => product.id === updatedProduct.id ? updatedProduct : product)
    })),
    wipeProduct:() => set(()=>({
        products: []
    })),
    changeIsOpen:() => set(state=>({
        isOpen:state.isOpen ? false : true
    })),
    changeTotal:(newTotal) => set(state=>({
        total:state.total + newTotal
    }))
}))