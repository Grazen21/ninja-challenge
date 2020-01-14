// Challenge 1: Write your answers here

//set background to green
document.querySelector('body').style.backgroundColor="green";

//set backgroundimage to header
document.querySelector('header').style.backgroundImage= "url('Water.jpg')";

// set all h2 to red
for (i=0; i < document.getElementsByTagName("h2").length; i++ ) {
    document.getElementsByTagName("h2")[i].setAttribute("class", "redH2"); 
}

//insert profile into personal info
for (i=0; i < document.getElementsByTagName("h2").length; i++ ) {
    let x = document.getElementsByTagName("h2")[i].innerHTML; 
    document.getElementById("demo").innerHTML += '<li>' + x + '</li>';

}

