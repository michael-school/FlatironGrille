//cart
function doShowAll() {
    var key = "";
    var list = "<tr><th>Item</th><th>Price</th><th>Quantity</th></tr>\n";
    var i = 0;
    for (i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        let dataObj = JSON.parse(localStorage.getItem(key));
        //create buttons for quantity
        let minusButton = `<button class=" btn-outline-primary" onclick="subtractOne('${key}')">-</button>`;
        let plusButton = `<button class=" btn-outline-primary" onclick="addOne('` + key + `')">+</button>`;
        //create row
        list += '<tr class="foodRow"><td class="cartItemName">' + key + "</td>\n<td>" +
            dataObj.price + "</td>\n<td>" + minusButton + dataObj.quantity + plusButton + "</td></tr>\n";
    }
    //If no item exists in the cart.
    if (list == "<tr><th>Item</th><th>Price</th><th>Quantity</th></tr>\n") {
        document.getElementById('order').innerHTML = "";
    } else {
        //Bind the row to HTML table.
        document.getElementById('order').innerHTML = list;
    }
    updateTotal();
    updateCounter();
}

//cart total
let toUSD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: 'USD'
});
function updateTotal(){
    let total = 0.00;
    for (var i = 0; i < localStorage.length; i++) {
        let dataObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        priceNum = parseFloat(dataObj.price.replace(/\$/g,''));
        total = total + priceNum * dataObj.quantity;
    }
    document.getElementById('cart-total').innerHTML = toUSD.format(total);
}

//cart counter
function updateCounter(){
    if (localStorage.length == 0) {
        document.getElementById('cart-counter').innerHTML = "";
    }else{
        document.getElementById('cart-counter').innerHTML = localStorage.length;
    }
}

window.load = doShowAll();

//add item when clicked
function addItem(itemNum) {
    let itemName = document.getElementById("item" + itemNum).innerText;
    //If item doesn't already exist
    if(!localStorage.getItem(itemName)){
        let itemPrice = document.getElementById("price" + itemNum).innerText;
        let dataObj = { price: itemPrice, quantity: 1 };
        let itemData = JSON.stringify(dataObj);
        localStorage.setItem(itemName, itemData);
        doShowAll();
    }
}

function clearAll() {
    localStorage.clear();
    doShowAll();
}
//minus
function subtractOne(itemName) {
    let dataObj = JSON.parse(localStorage.getItem(itemName));
    if (dataObj.quantity > 1) {
        dataObj.quantity -= 1;
        let itemData = JSON.stringify(dataObj);
        localStorage.setItem(itemName, itemData);
        doShowAll();
    }
}
//plus
function addOne(itemName) {
    let dataObj = JSON.parse(localStorage.getItem(itemName));
    dataObj.quantity += 1;
    let itemData = JSON.stringify(dataObj);
    localStorage.setItem(itemName, itemData);
    doShowAll();
}

//trash button

//delete item when clicked
function deleteItem(key){
    localStorage.removeItem(key);
    addDeleteFunctionality();
}

function addDeleteFunctionality(){
    doShowAll();
    //create array of food rows
    let foodRows = document.getElementsByClassName("foodRow");
    let popover = bootstrap.Popover.getInstance(document.getElementById('deletePopover'))
    if (deleteOn){
        //add delete class
        for (var i = 0; i < foodRows.length; i++) {
            foodRows[i].classList.add("delete");
            let cartItemName = foodRows[i].getElementsByTagName("td")[0].innerHTML;
            foodRows[i].addEventListener('click', function(){ deleteItem(cartItemName); });
            //disable popover
            popover.disable();
        }
    } else {
        //remove delete class
        for (var i = 0; i < foodRows.length; i++) {
            foodRows[i].classList.remove("delete");
            let cartItemName = foodRows[i].getElementsByTagName("td")[0].innerHTML;
            foodRows[i].removeEventListener('click', function(){ deleteItem(cartItemName); });
            // enable popover
            popover.enable();
        }
    }
}

//toggle delete button
let deleteOn = false;
function toggleDelete(){
    deleteOn = deleteOn ? false : true;
    addDeleteFunctionality();
}

//popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
    //dismiss
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
  })