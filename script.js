const h1 = document.getElementById("judul");

const resep = [
  "1 piring nasi dingin",
  "5 bh cabe rawit, iris",
  "3 bh bawang merah, iris",
  "2 siung bawang putih, iris",
  "1 btr telur",
  "1 sdm kecap manis",
  "1 sdm kecap asin",
  "1/2 sdt gula pasir",
  "1/2 sdt merica",
];
const ulList = document.createElement("ul");

resep.forEach((items) => {
  let listItem = document.createTextNode(items);
  const list = document.createElement("li");
  list.appendChild(listItem);
  ulList.appendChild(list);
});
const gambarNasgor = document.getElementById("image-body");
const gambar =
  "https://img-global.cpcdn.com/recipes/8979ffdea7759481/751x532cq70/nasi-goreng-kampung-foto-resep-utama.jpg";
document.getElementById("resep-body").appendChild(ulList);
document.getElementById(
  "image-body"
).innerHTML = `<img src="${gambar}" alt="nasgor-kampung">`;


gambarNasgor.style.textAlign = "center";
gambarNasgor.style.margin = "40px auto";
ulList.style.margin = "30px 0 0 0";
h1.style.textAlign = "center";
h1.style.fontFamily = "'Balsamiq Sans', cursive";
