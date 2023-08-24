
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
const productDetail =document.querySelector(".product-detail");
const closeProductDetail = document.querySelector(".product-detail-close img")
menuCarrito.addEventListener('click',toggleAsideMyorders)
flechaCarrito.addEventListener('click',toggleAsideMyorders)
//closeProductDetail.addEventListener('click',toggleProdutDetail)

closeProductDetail.addEventListener('click', function(event) {
    // Obtener el elemento en el que se hizo clic
    const elemento = event.target;
    
    // Aplicar toggle a la clase 'inactive' en el elemento
    elemento.classList.toggle('inactive');
  });

  
// falta arreglar 



function toggledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    //pregunta si No tiene la clase
    preguntaMobileMenu()
    preguntaAsideMyorders()
    preguntaProductDetail()
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
     //pregunta si No tiene la clase
     preguntaDesktopMenu()
     preguntaAsideMyorders()
     preguntaProductDetail()
}
function toggleAsideMyorders(){
    asideMyorders.classList.toggle('inactive');
     //pregunta si No tiene la clase
     preguntaMobileMenu()
     preguntaDesktopMenu()
     preguntaProductDetail()
}
function toggleProdutDetail(){
    productDetail.classList.toggle('inactive')
    preguntaMobileMenu()
     preguntaDesktopMenu()
     preguntaAsideMyorders()
}

function preguntaMobileMenu(){
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
}
function preguntaDesktopMenu(){
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
}
function preguntaAsideMyorders(){
    if (!asideMyorders.classList.contains('inactive')) {
        asideMyorders.classList.add('inactive');
    }
}
function preguntaProductDetail(){
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
}
// no esta funcionando openproduct 
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Monitor',
    price: 150,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Teclado',
    price: 12,
    image: 'https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
// array cards de inicio
const productListCardsInicio = [];
productListCardsInicio.push({
    name: 'Bike',
    price: 180,
    image: 'https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productListCardsInicio.push({
    name: 'Patines',
    price: 50,
    image: 'https://images.pexels.com/photos/914996/pexels-photo-914996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productListCardsInicio.push({
    name: 'Parlante',
    price: 30,
    image: 'https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

renderProductsCarrito(productList);//creacion de cards carrito
function renderProductsCarrito(arr){
    for (product of arr){
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
}
renderProductsInicio(productListCardsInicio)

function renderProductsInicio(arr){//creacion de cards de inicio

    for (product of productListCardsInicio){
        // estructura para crear los elementos de Html
        //--------------------------
            const productCard =document.createElement('div');//crear el div
            productCard.classList.add('product-card')//darle la clase
        
            const img =document.createElement('img');
            img.setAttribute('src',product.image)
            productCard.appendChild(img);// meter los elementos en su padre
            img.addEventListener('click',toggleProdutDetail)//se pone la funcion sin parentesis
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

}
