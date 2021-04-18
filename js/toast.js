//set specifications for the toast
var option = {
    Animation: true,
    delay: 5000
};

function Toasty() {
    //clear form
    document.getElementById("contact-form").reset();
    //toast
    var toastHTMLElement = document.getElementById("liveToast");
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
}