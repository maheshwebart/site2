let ele = document.getElementsByClassName("hamb")[0];

ele.addEventListener('click', showMenu);

function showMenu() {
    // alert("hi");
    // console.log("hi");
//   document.getElementsByClassName("menu")[0].classList.toggle('dis');
  document.querySelector("div.navbar .container nav ul.menu").classList.toggle('dis');


}