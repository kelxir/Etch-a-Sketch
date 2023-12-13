const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("style", "width: 50px; height: 50px; border: 1px solid black; box-sizing: border-box;");
  grid.appendChild(square);
}