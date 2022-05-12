var modal = document.getElementById("myModal");
var btn = document.querySelectorAll(".work-card-button button");
var span = document.getElementsByClassName("close")[0];
btn.forEach((button) => {
  button.onclick = function () {
    modal.style.display = "block";
    btnID = this.id;
    setHeading(btnID);
  };
});
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
