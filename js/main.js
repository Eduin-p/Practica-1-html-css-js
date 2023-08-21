
const menuEmail = document.querySelector(".email img");//donde se hace click
const desktopMenu= document.querySelector(".desktop-menu"); // la clase que se modifica
menuEmail.addEventListener('click',toggledesktopMenu)// funcion cuando se hace click

const menuMobile = document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");
menuMobile.addEventListener('click',toggleMobileMenu)

const menuCarrito = document.querySelector(".carrito");
const flechaCarrito = document.querySelector(".menu-container figure img");
const asideMyorders= document.querySelector(".my-orders");
const cardsContainer= document.querySelector(".cards-container-carrito");
const cardsContainerInicio= document.querySelector(".cards-container");
menuCarrito.addEventListener('click',toggleAsideMyorders)
flechaCarrito.addEventListener('click',toggleAsideMyorders)

function toggledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    //pregunta si No tiene la clase
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!asideMyorders.classList.contains('inactive')) {
        asideMyorders.classList.add('inactive');
    }
    
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
     //pregunta si No tiene la clase
     if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if (!asideMyorders.classList.contains('inactive')) {
        asideMyorders.classList.add('inactive');
    }
}
function toggleAsideMyorders(){
    asideMyorders.classList.toggle('inactive');
     //pregunta si No tiene la clase
     if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
}
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Monitor',
    price: 150,
    image: 'https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Teclado',
    price: 12,
    image: 'https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

/* <div class="product-card-carrito">
    <img src="https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product">
    <div class="product-info">
        <p>Bici</p>
        <p>$120</p>
    </div> 
    <figure class="delete">
        <img src="./icons/icon_close.png" alt="Delete">
     </figure>  
</div> */

for (product of productList){
// estructura para crear los elementos de Html
//--------------------------
    const productCard =document.createElement('div');//crear el div
    productCard.classList.add('product-card-carrito')//darle la clase

    const img =document.createElement('img');
    img.setAttribute('src',product.image)
    productCard.appendChild(img);// meter los elementos en su padre

// -----------------------------------------
    const productInfo =document.createElement('div');
    productInfo.classList.add('product-info')

    const productPrice = document.createElement('p');
    productPrice.classList.add('price')//darle la clase
    productPrice.innerText='$' + product.price;

    const productName = document.createElement('p');
    productName.classList.add('name')//darle la clase
    productName.innerText= product.name;

    productInfo.append(productName,productPrice);// meter los elementos en su padre
//--------------------
    const productFigure = document.createElement('figure');
    productFigure.classList.add('delete')

    const imgFigure =document.createElement('img');
    imgFigure.setAttribute('src','./icons/icon_close.png');

    productFigure.appendChild(imgFigure);// meter los elementos en su padre
//----------------------    
productCard.append(productInfo,productFigure);// meter los elementos en su padre
cardsContainer.appendChild(productCard)
/* llame al div padre(cardsContainer) para poder meter
el div de productCard
*/
//--------- fin de la creacion de los elementos Html

}
//-------------
//creacion de cards de inicio
const productListCardsInicio = [];
productListCardsInicio.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productListCardsInicio.push({
    name: 'Monitor',
    price: 150,
    image: 'https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productListCardsInicio.push({
    name: 'Teclado',
    price: 12,
    image: 'https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product">
    <div class="product-info">
        <div >
            <p>$120</p>
            p>Bici</p>
        </div>
        <figure >
             <img src="./icons/bt_add_to_cart.svg" alt="carrito">
         </figure>
    </div>   
</div>
 */
for (product of productListCardsInicio){
    // estructura para crear los elementos de Html
    //--------------------------
        const productCard =document.createElement('div');//crear el div
        productCard.classList.add('product-card')//darle la clase
    
        const img =document.createElement('img');
        img.setAttribute('src',product.image)
        productCard.appendChild(img);// meter los elementos en su padre
    
    // -----------------------------------------
        const productInfo =document.createElement('div');
        productInfo.classList.add('product-info')

        const productInfoDiv =document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.classList.add('price')//darle la clase
        productPrice.innerText='$' + product.price;
    
        const productName = document.createElement('p');
        productName.classList.add('name')//darle la clase
        productName.innerText= product.name;
    
        productInfoDiv.append(productPrice,productName);// meter los elementos en su padre
    //--------------------
        const productFigure = document.createElement('figure');
    
        const imgFigure =document.createElement('img');
        imgFigure.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(imgFigure);// meter los elementos en su padre
    //----------------------    
    productInfo.append(productInfoDiv,productFigure);// meter los elementos en su padre
    productCard.appendChild(productInfo)
    cardsContainerInicio.appendChild(productCard)
    /* llame al div padre(cardsContainer) para poder meter
    el div de productCard
    */
    //--------- fin de la creacion de los elementos Html
    
    }
