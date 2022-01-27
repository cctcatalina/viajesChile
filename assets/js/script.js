window.onload = SetTop;

function SetTop() {
  var verticalTop = document.getElementById('<%=hScrollPosition.ClientID %>').value

  document.documentElement.pageYOffset = verticalTop;
}





var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})