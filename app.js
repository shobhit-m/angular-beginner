var toggleView = 0;
var domView1 = document.getElementById('view1');
var domView2 = document.getElementById('view2');


domView2.style.display = "none";
domView1.style.display = "none";

$("#btn-view1").click(function(){
    showView1();
})
$("#btn-view2").click(function(){
    showView2();
})

function showView1() {

  // get data from server

  domView2.style.display = "none";
  domView1.style.display = "block";

  // update server data
}
function showView2() {

  // get data from server

  domView1.style.display = "none";
  domView2.style.display = "block";

  // update server data
}
