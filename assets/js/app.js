/*Toggle*/

$(document).ready(function () {
  $("#torres-del-paine").click(function () {
    $("#text-torres-del-paine").toggle("slow");
  });
});

$(document).ready(function () {
  $("#lago-chungara").click(function () {
    $("#text-lago-chungara").toggle("slow");
  });
});

$(document).ready(function () {
  $("#desierto-de-atacama").click(function () {
    $("#text-desierto-de-atacama").toggle("slow");
  });
});

$(document).ready(function () {
  $("#selva-valdiviana").click(function () {
    $("#text-selva-valdiviana").toggle("slow");
  });
});

/*Tooltip*/
var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})