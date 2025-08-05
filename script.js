var food = "Pizza";

function chooseLunch(element) {
    console.log("You picked : " + element.value);
    food = element.value;
}

function change(){
    alert("You Choose : " + food);
}
