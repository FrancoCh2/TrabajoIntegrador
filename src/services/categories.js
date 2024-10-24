import { categoriaActiva } from "../../main";
import { handleGetProductLocalToStore, handleRenderList } from "../views/store";

//categoria
const handleFilterProcutsByCategoria = (categoriaIn) =>{
    const products = handleGetProductLocalToStore()

    switch(categoriaIn){
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "Todo":
            handleRenderList(products)
        case "Hamburguesas":
        case "Hamburguesas":
        case "Gaseosas":
            const result = products.filter((el)=> el.categorias === categoriaIn)
            handleRenderList(result)
        default:
        break;  
        case "mayorPrecio":
        const resultPrecio = products.sort((a,b)=> b.precio - a.precio)
        handleRenderList(resultPrecio)
        break;
        case "MenorPrecio":
            const resultPreciomenor = products.sort((a,b)=> a.precio - b.precio)
            handleRenderList(resultPreciomenor)
            break;
    }
    
}

//render de la vista categorias

export const renderCategories = () =>{
const ulList = document.getElementById("listFilter")

ulList.innerHTML = `
<li id="Todo">Todos los productos</li>
<li id="Hamburguesas">Hamburguesas</li>
<li id="Papas">Papas</li>
<li id="Gaseosas">Gaseosas</li>
<li id="mayorPrecio">Mayor precio</li>
<li id="menorPrecio">Menor precio</li>
`;
    const liElementes = ulList.querySelectorAll("li");
    liElementes.forEach((liElement)=> {
        liElement.addEventListener("click",() =>{
            handleClink(liElement);

        })

    });
    const handleClink = (elemento) =>{
        handleFilterProcutsByCategoria (elemento.id)
        liElementes.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove("liActive")
            }else{
                if(elemento === el ){
                    el.classList.add("liActive");
                }
            }
        })

        

    }
};