import Formulario from "./Formulario"
import ListProducts from "./ListProducts";

function Panel(){
    return (
        <div className="p-8 flex w-full h-full justify-around items-center">
            <Formulario/>
            <ListProducts/>
        </div>
    )
}

export default Panel;