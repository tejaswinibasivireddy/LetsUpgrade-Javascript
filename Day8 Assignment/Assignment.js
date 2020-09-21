let products = [{
  id: 1,
  name: "Shirt",
  size: "L",
  color: "Navy",
  price: "1000",
  image: "img1.jpg",
},
{
  id: 2,
  name: "Checked Shirt",
  size: "M",
  color: "Blue",
  price: "1500",
  image: "img2.jpg",
},
{
  id: 3,
  name: "T-Shirt",
  size: "XL",
  color: "Red",
  price: "960",
  image: "img3.jpg",
},
{
  id: 4,
  name: "Women Shirt",
  size: "XS",
  color: "Red",
  price: "1250",
  image: "img4.jpg",
},
{
  id: 5,
  name: "Women Blazzer",
  size: "L",
  color: "Gray",
  price: "1800",
  image: "img5.jpg",
},
{
  id: 6,
  name: "Kurtha Set",
  size: "S",
  color: "Blue",
  price: "1450",
  image: "img6.jpg",
},
{
  id: 7,
  name: "Women Top",
  size: "L",
  color: "Navy-Blue",
  price: "920",
  image: "img7.jpg",
},
{
  id: 8,
  name: "Women Kurtha Set",
  size: "M",
  color: "TealBlue",
  price: "2000",
  image: "img8.jpg",
},
{
  id: 9,
  name: "Women Ehnic Dress",
  size: "XL",
  color: "Purple",
  price: "4050",
  image: "img9.jpg",
},
{
  id: 10,
  name: "Women Printed Kurtha",
  size: "XS",
  color: "Silver",
  price: "1000",
  image: "img10.jpg",
},
{
  id: 11,
  name: "Kurtha",
  size: "L",
  color: "Blue",
  price: "900",
  image: "img11.jpg",
},
{
  id: 12,
  name: "Men Blazzer",
  size: "S",
  color: "Navy",
  price: "3200",
  image: "img12.jpg",
}]

let cart = [];
let cartProductCount = 0;

function displayProducts(productsData, who="productwrapper") {
  let productsString = "";

  `<h2>No of item in cart ${cartProductCount}</h2>`
  productsData.forEach(function (product,index) {
    let {id,name,image,color,price,size} = product

    // let productString = JSON.stringify(product)

    if(who=="productwrapper"){

      productsString += `<div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>
          <button onclick="addToCart(${id})">Add To Cart</button>
        </p>
      </div>`
    }
    else if(who=="cart")
    {
      productsString += `<div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove From Cart</button>
        </p>
      </div>`
    }
  });
  document.getElementById(who).innerHTML = productsString;
}
displayProducts(products)


function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString = product.name + " " + product.color;
    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });
  displayProducts(searchedProducts);
}

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {

  let pro = getProductByID(products, id);
  cart.push(pro)

  cartCount();
  for(var i=0; i<cart.length; i++) {
    for(var j=i+1;j<cart.length; j++){
      str1 = cart[i].name;
      str2 = cart[j].name;
      ans = str1.localeCompare(str2)
     if( ans == 0){
      alert("Product is already in cart");
      cart.pop(pro);
     }
   }
  }
  displayProducts(cart, "cart");
}

function cartCount() {
  cartProductCount = cart.length;
  document.getElementById('cartCounts1').innerHTML = cartProductCount;
}

function filter() {
  maxValue = document.getElementById('maximum').value ;
  minValue = document.getElementById('minimum').value;
  var price = [];
  for(var i=0;i<products.length;i++) {
     if(products[i].price <= maxValue && products[i].price >=minValue) {
        price.push(products[i]);
        displayProducts(price,"productwrapper");
     }
  }
}

function removeFromCart(id) {
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  cart.splice(index, 1);
  cartCount();
  displayProducts(cart, "cart");
}
