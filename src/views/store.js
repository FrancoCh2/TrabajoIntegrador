import { openModal, setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage"

export const handleGetProductLocalToStore = () => {

    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}
export const handleRenderList = (productosIn) => {
    const burgers = productosIn.filter((el) => el.categorias === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categorias === "Papas");
    const gaseosas = productosIn.filter((el) => el.categorias === "Gaseosa");

    const renderProductGroup = (products, title) => {
        if (products.length > 0) {
            const productosHtml = products.map((producto, index) => {
                return `<div class= 'containerTargetItem' id="product-${producto.categorias}-${index}">
            <div>
            <img src='${producto.imagen}'/>
            <div>
            <h2>${producto.nombre}</h2>
            </div>
            <div class='targetProps'>
            <p><b>Precio:</b> $ ${producto.precio}</p>
            
            </div>

            </div>
            
            
            </div>`


            });

            return `
        <section class='sectionStore'>
        <div class = 'containerTitleSection'>
            <h3> ${title}</h3>
        </div>
        <div class='containerProductStore' >
        ${productosHtml.join("")}
        </div>
        </section>
        
        `

        } else {

            return "";
        }



    }
    //renderizar

    const appContainer = document.getElementById("storeConteiner")
    appContainer.innerHTML = `
${renderProductGroup(burgers, "Hamburguesas")}
${renderProductGroup(papas, "Papas")}
${renderProductGroup(gaseosas, "Gaseosas")}
`;

    const addEvents = (productosIn) => {
        productosIn.array.array.forEach((element, index) => {
            const productContainer = document.getElementById(`
        product-${element.categorias}-${index}
        `)
            productContainer.addEventListener("click", () => {
                setproductoActivo(element);
                openModal();
            })

        })


    }
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
}