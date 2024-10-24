//localstorage

export const handleGetProductLocalStorage = () =>{
const products = JSON.parse(localStorage.getItem("products"));
if(products){
    return products
}else{
    return [];
}

}
//guardar en localStorage

export const setInLocalStorage = (productIn)=>{

    //traer los elementos
    let producsInLocal = handleGetProductLocalStorage();

    const existingIndex = producsInLocal.findIndex((productsLocal)=>
    productsLocal.id === productIn.id
    )

    if(existingIndex ===! -1) {
        
        producsInLocal[existingIndex] = productIn;

    }else{
        producsInLocal.push(productIn);
    }

        producsInLocal[existingIndex] = productIn;
    localStorage.setItem("products",JSON.stringify(producsInLocal))
}