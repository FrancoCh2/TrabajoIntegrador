import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import "./style.css";
/*APLICACION */

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn)=>{
  categoriaActiva = categoriaIn;
}

export let productoActivo = null;
export const setproductoActivo = (productoIn)=>{
  productoActivo = productoIn;
}
handleGetProductLocalToStore();
renderCategories();






 