import Formulario from "./Formulario"

function Panel(){
    return (
        <div className="p-8 flex flex-col bg-slate-800 rounded-md ">
            <h1 className="text-white font-semibold text-3xl text-center my-3">Facturacion - Ferreteria</h1>
            <Formulario/>
        </div>
    )
}

export default Panel