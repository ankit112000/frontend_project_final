var modal = document.getElementById('myModal');
var key = document.getElementById("key2");
var span = document.getElementsByClassName("close")[0];
key.onclick = function() {
    modal.style.display = "flex";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  var modal1 = document.getElementById('myModal1');
var key1 = document.getElementById("key1");
var span1 = document.getElementsByClassName("close1")[0];
key1.onclick = function() {
    modal1.style.display = "flex";
  }
  
  // When the user clicks on <span> (x), close the modal
  span1.onclick = function() {
    modal1.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
  var modal2 = document.getElementById('myModal2');
  var key2 = document.getElementById("key4");
  var span2 = document.getElementsByClassName("close2")[0];
  key2.onclick = function() {
      modal2.style.display = "flex";
    }
    
    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
      modal2.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }
    var sp=document.getElementById("key8");
sp.onclick=function()
{
  modal.style.display = "flex";
  modal1.style.display = "none";
}
