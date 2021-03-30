var modal5 = document.getElementById('modal5');

var key5 = document.getElementsByClassName('a1');

var span5 = document.getElementById('Nobutton');

key5[0].onclick = function(){
    modal5.style.display = 'block';
}
key5[1].onclick = function(){
    modal5.style.display = 'block';
}
key5[2].onclick = function(){
    modal5.style.display = 'block';
}
key5[3].onclick = function(){
    modal5.style.display = 'block';
}
key5[4].onclick = function(){
    modal5.style.display = 'block';
}

span5.onclick = function(){
    modal5.style.display='none';
}

var key6 = document.getElementsByClassName('fa');
key6[0].onclick = function(){
    window.location.href='post.html';
}
key6[1].onclick = function(){
    window.location.href='post.html';
}
key6[2].onclick = function(){
    window.location.href='post.html';
}
key6[3].onclick = function(){
    window.location.href='post.html';
}
key6[4].onclick = function(){
    window.location.href='post.html';
}
var modal = document.getElementById('myModal');
var key = document.getElementById("s2");
var span = document.getElementsByClassName("close")[0];
key.onclick = function() {
    modal.style.display = "flex";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  var modal1 = document.getElementById('myModal1');
var key1 = document.getElementById("s1");
var span1 = document.getElementsByClassName("close1")[0];
key1.onclick = function() {
    modal1.style.display = "flex";
  }
  
  span1.onclick = function() {
    modal1.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
  var sp=document.getElementById("key8");
  sp.onclick=function(){
      modal.style.display = "flex";
      modal1.style.display="none";
  }