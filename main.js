
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
        let plusButton = `<button class=" btn-outline-primary" onclick="addOne('${key}')">+</button>`;
        //create row
        list += "<tr><td>" + key + "</td>\n<td>" +
            dataObj.price + "</td>\n<td>" + minusButton + dataObj.quantity + plusButton + "</td></tr>\n";
    }
    //If no item exists in the cart.
    if (list == "<tr><th>Item</th><th>Price</th><th>Quantity</th></tr>\n") {
        document.getElementById('order').innerHTML = "";
    }else{
    //Bind the row to HTML table.
    document.getElementById('order').innerHTML = list;
    }
}

window.load = doShowAll();

function addItem(itemNum){
    let itemName = document.getElementById("item"+itemNum).innerText;
    let itemPrice = document.getElementById("price"+itemNum).innerText;
    let dataObj = {price: itemPrice, quantity: 1};
    let itemData = JSON.stringify(dataObj);
    localStorage.setItem(itemName, itemData);
    doShowAll();
}

function clearAll(){
    localStorage.clear();
    doShowAll();
}

function subtractOne(itemName){
    let dataObj = JSON.parse(localStorage.getItem(itemName));
    if (dataObj.quantity  > 1){
        dataObj.quantity -= 1;
        let itemData = JSON.stringify(dataObj);
        localStorage.setItem(itemName, itemData);
        doShowAll();
        console.log(itemName, itemData);
    }
}

function addOne(itemName){
    let dataObj = JSON.parse(localStorage.getItem(itemName));
    dataObj.quantity += 1;
    let itemData = JSON.stringify(dataObj);
    localStorage.setItem(itemName, itemData);
    doShowAll();
}

//gallery page

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("zoom");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (i = 0, len = img.length; i < len; i++){
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

