const galleyItem = document.getElementById("galleyItem");

console.log(galleyItem);

function loopElement(selector, callback) {
  const Element = document.querySelector(selector);
  if (selector) {
    return callback(Element);
  }

  return Element;
}

const galleryData = [
  {
    nama: "Pantai_Pandawa",
    image: "image/Pantai_Pandawa.jpg",
  },
  {
    nama: "Candi_Borobudur",
    image: "image/Candi_Borobudur.jpg",
  },
  {
    nama: "Raja_Ampat",
    image: "image/Raja_Ampat.jpg",
  },
  {
    nama: "Wakatobi",
    image: "image/Wakatobi.jpg",
  },
  {
    nama: "Kota_Lama",
    image: "image/Kota_Lama.jpg",
  },
  {
    nama: "Hutan_Pinus",
    image: "image/Hutan_Pinus.jpg",
  },
  {
    nama: "Gunung_Bromo",
    image: "image/Gunung_Bromo.jpg",
  },
  {
    nama: "Danau_Toba",
    image: "image/Danau_Toba.jpg",
  },
];

loopElement("#galleyItem", (e) => {
  return galleryData.map((gallery) => {
    e.innerHTML += `<div class="col-md-3">
    <div class="gallery-box">
        <img src="./${gallery.image}" />
        <h4>${gallery.nama}</h4>
    </div>
</div>    
`;
  });
});
