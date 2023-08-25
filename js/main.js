
const menuEmail = document.querySelector(".email img");//donde se hace click
const desktopMenu= document.querySelector(".desktop-menu"); // la clase que se modifica


const menuMobile = document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");

const menuCarrito = document.querySelector(".carrito");
const flechaCarrito = document.querySelector(".menu-container figure img");
const asideMyorders= document.querySelector(".my-orders");
const cardsContainer= document.querySelector(".cards-container-carrito");
const cardsContainerInicio= document.querySelector(".cards-container");
const productDetail =document.querySelector(".product-detail");
const closeProductDetail = document.querySelector(".product-detail-close img")
//array con las secciones de menu
const sectionSelect =[
    desktopMenu,
    mobileMenu,
    asideMyorders,
    productDetail,
]
menuEmail.addEventListener('click',() =>selecionarSection(0))// funcion cuando se hace click
menuMobile.addEventListener('click',() =>selecionarSection(1))
menuCarrito.addEventListener('click',() =>selecionarSection(2))
flechaCarrito.addEventListener('click',() =>selecionarSection(2))
closeProductDetail.addEventListener('click',() =>selecionarSection(3))
//() =>selecionarSection(3) funcion de flecha , para poder pasar valores a la funcion

function selecionarSection(section){
    for (let index = 0; index < sectionSelect.length; index++) {
        const element = sectionSelect[index];
        if (index==section) {
            element.classList.toggle('inactive');
        }else{
            element.classList.add('inactive');
        }
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
            img.addEventListener('click',() =>selecionarSection(3))//se pone la funcion sin parentesis
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
