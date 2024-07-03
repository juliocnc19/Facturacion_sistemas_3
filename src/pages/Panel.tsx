import Formulario from "../components/Formulario"
import ListProducts from "../components/ListProducts";

function Panel(){
    return (
        <div className="p-8 flex w-full h-screen justify-around items-center">
            <Formulario/>
            <ListProducts/>
        </div>
    )
}

export default Panel;