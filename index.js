function inputLength() {
  return document.querySelector("input").value.length;
}

function createListElement() {
  var taskItem = document.createElement("li");
  taskItem.className="";
  taskItem.appendChild(document.createTextNode($("#task-name").val()));
  $("ul").append(taskItem);
  $("#task-name").val = "";
  $(".instructions").hide();
}

function addAfterEnterPress(evt) {
  if (inputLength() > 0 && evt.keyCode === 13) {
    createListElement();
    document.getElementById("task-name").value = "";
  }
}
document.querySelector("#task-name").addEventListener("keydown", addAfterEnterPress);

$("body").on("click","li", function() {
  $(this).toggleClass("completed");
});

$("body").on("dblclick", "li", function() {
  $(this).remove();
  const num = $("li").length;
  if(num===0){
    $(".instructions").show();
  }
});

$(".fas").on("click", function(){
  // $(this).removeClass("fa-sun");
  $(this).toggleClass("fa-moon");

})
