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

const userFeedback = [
  {
    nama: "Jill Valentine",
    komentar:
      "Indonesia does have many advantages, especially in the field oftourism, we have all the beauty to be proud of and must epreserved. I LOVE INDONESIA",
    pekerjaan: "gfgfg",
    gambar: "profil.png",
  },
  {
    nama: "Ammadzal",
    komentar:
      "Sebagai penduduk asli Indonesia, saya berbangga hati tinggal di negeri yang dikelilingi beribu-ribu pulau dengan keindahan yang tiada duanya.",
    pekerjaan: "gfgfg",
    gambar: "foto.jpeg",
  },
  {
    nama: "Abraham F Kennedy",
    komentar:
      "Destinations in Indonesia in my opinion, are indeed beautiful,especially with the addition of its citizens who are quite friendly with foreign tourists.",
    pekerjaan: "gfgfg",
    gambar: "bule.jpeg",
  },
];

loopElement("#cardMain", (e) => {
  return userFeedback.map((user, i) => {
    e.innerHTML += `
    <div class="col-md-4" data-aos="flip-left" data-aos-delay="${
      i * 200
    }" data-aos-duration="1500">
    <div class="user-review">
      <p>
        ${user.komentar}
      </p>
      <h5>${user.nama}</h5>
      <small>${user.pekerjaan}</small>
    </div>
    <img src="./image/${user.gambar}" />
  </div>
    `;
  });
});
