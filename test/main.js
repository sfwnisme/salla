//------------All Products Button

const all = document.createElement("a");
all.className = "all";
all.id = "all";
all.href = "";
all.innerText = "All Products";

document.body.append(all);

const cont = document.getElementById("3036020");
console.log(cont);
cont.addEventListener("load", (e) => {
  if (e.target.classList.contains('href')) {
    console.log(e.id);
  }
});
