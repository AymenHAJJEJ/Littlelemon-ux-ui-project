var cookie = document.querySelector("#popup");

function purchase(){
    alert("Your cart is empty");
}

function change(element){
    element.src = "images/assets/succulents-2.jpg";
}

function reset(element){
    element.src = "images/assets/succulents-1.jpg";
}

function hide_popup(){
cookie.remove();
}