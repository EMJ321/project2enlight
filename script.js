document.body.onkeyup = function(e){
  if (e.keyCode == 13){
    console.log("clicked enter")
    newItem();
  }
}

function newItem(){
  console.log("Inside new item")
  var item = document.getElementById("input").value;
  console.log(item);
  // function gets the value in the input box which we created in HTML and prints it in the console

  var ul = document.getElementById("list");
  var li = document.createElement("li");
  // store the unordered list as a variable 
  
  li.appendChild(document.createTextNode("~ " + item));   
  // puts text in list item
  ul.appendChild(li);  
  // puts list item in our unordered list
    
  document.getElementById("input").value = "";   
  // erases what is currently in list
    
  li.onclick = removeItem;  
  // run removeItem when the li is clicked

}


function removeItem(e) {
  e.target.remove()
}


