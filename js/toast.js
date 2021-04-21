//set specifications for the toast
var option = {
    Animation: true,
    autohide: false
};

//reset form
function reset(){
    document.getElementById("contact-form").reset();
}

function Toasty() {
    //clear form after delay (so it clears after form is submitted)
    setTimeout(() => { reset(); }, 50);
    //toast
    var toastHTMLElement = document.getElementById("liveToast");
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
}