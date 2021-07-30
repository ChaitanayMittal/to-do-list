function inputLength() {
  return document.querySelector("input").value.length;
}

function createListElement() {
  var taskItem = document.createElement("li");
  taskItem.className = "";
  taskItem.appendChild(document.createTextNode($(".task-name").val()));
  $("ul").append(taskItem);
  $(".task-name").val = "";
  $(".instructions").hide();
  if ($("body").hasClass("body-light")) {
    taskItem.className = "li-light";
  }
}

function addAfterEnterPress(evt) {
  if (inputLength() > 0 && evt.keyCode === 13) { //13 means the enter key
    createListElement();
    document.getElementsByClassName("task-name")[0].value = "";
  }
}
document.querySelector(".task-name").addEventListener("keydown", addAfterEnterPress);

$("body").on("click", "li", function() {
  $(this).toggleClass("completed");
  if ($(this).hasClass("completed")) {
    var completedSound = new Audio('images/mixkit-happy-bell-alert-601.wav');
    completedSound.play();
  }
});

$("body").on("dblclick", "li", function() {
  $(this).remove();
  const num = $("li").length;
  if (num === 0) {
    $(".instructions").show();
  }
});

$(".fas").on("click", function() {
  $(this).toggleClass("fa-moon");
  $(this).toggleClass("fa-sun");
  $("body").toggleClass("body-light");
  $("input").toggleClass("input-light");
  $("footer").toggleClass("footer-light");
  $(".instructions").toggleClass("instructions-light");
  $("input").toggleClass("li-light");
  $("li").toggleClass("li-light");
  $("button").toggleClass("li-light");
  $("footer").toggleClass("li-light");
  $("a").toggleClass("a-light");

})
