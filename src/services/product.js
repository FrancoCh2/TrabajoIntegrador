// PRODUCTOS

import { closeModal } from "../../main";
import { setInLocalStorage } from "../persistence/localstorage";
import { openModal } from "../views/modal";
import { handleGetProductLocalToStore } from "../views/store";

  /* product */
  const buttonAdd = document.getElementById("buttonAddElement");

  buttonAdd.addEventListener("click",()=>{
    openModal();
  
  })
  
  
  
  const acceptButton = document.getElementById("acceptButton");
  acceptButton.addEventListener("click",()=>{
    handleSaveOrModifyElements();
  
  })
  const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categorias = document.getElementById("categoria").value;
    if(productoActivo){
      object = {
        ...productoActivo,
        nombre,
        imagen,
        precio,
        categorias,
    
  
      }
    }else{
  
      let object ={
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categorias,
    
      }
    }
  
    setInLocalStorage(object) 
    handleGetProductLocalToStore();
    closeModal();
  
  }