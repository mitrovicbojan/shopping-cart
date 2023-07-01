function testing() {
  let link2 = document.querySelector(".second-link");
  let link1 = link2.previousElementSibling;
  let link3 = link2.nextElementSibling;

  console.log(link1.innerText);
}
