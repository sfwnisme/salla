/* Whatsapp Icon */

// still not using it till I find time
const dominName = `https://${window.location.hostname}/whatsapp/send`;

let link = document.createElement("div");
link.className = "wapp-icon";
link.innerHTML = `<a href='https://api.whatsapp.com/send/?phone=966504706185&text&type=phone_number&app_absent=0'>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
</svg>
</a>`;

document.body.append(link);

//------------All Products Button

const all = document.createElement("a");
all.className = "all";
all.id = "all";
all.href =
  "https://davin.store/%D9%83%D9%84-%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA/c1447309527";
all.innerText = "جميع المنتجات";

document.body.append(all);

// change the sold product number
// this is the #id of the product that we want to change its sold number
let x = document.querySelector("#product_832760221 .purchase-hot span");
//x.innerText = 1000;
let val = +x.innerText + 764;
x.innerText = val;
