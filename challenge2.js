// Challenge 2: Write your answers here

//append in list
let node = document.createElement("LI");                     // Create a <li> node
let textnode = document.createTextNode("Code while asleep"); // Create a text node
node.appendChild(textnode);                                  // Append the text to <li>
document.getElementById("skills-list").appendChild(node);    // Append <li> to <ul> with id="myList"

let node2 = document.createElement("LI");                 
let textnode2 = document.createTextNode("Coding Fullstack bootcamp, Next Academy");         
node2.appendChild(textnode2);                              
document.getElementById("education-list").appendChild(node2); 

//add table to employment
let rowsForEmployment = document.createElement("TR")