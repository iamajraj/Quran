const div = document.querySelector('.div');
const loading = document.querySelector('.loading');

// FROM THE API
const getQuran = fetch("https://api.alquran.cloud/v1/quran/en.asad").then(res => res.json()).then((data) => {
    loading.style.display = "none";
    console.log(data)
    data.data.surahs.map((surah) => {
        const h1 = document.createElement("h3", null);
        h1.textContent = surah.number + ". Surah Name:  "+ surah.name;
        div.appendChild(h1);
        surah.ayahs.map((ayah) => {
            const p = document.createElement("p", null);
            p.textContent = ayah.number + ". " + ayah.text;
            div.appendChild(p);
        })
        if(surah.number == 114){
            const p = document.createElement("p", null);
            p.textContent = "☪☪☪ Sadaqallahul Azim ☪☪☪"
            div.appendChild(p)
        }
    })

});

// FROM THE OBJECT DATA

// Quran.surahs.map((surah) => {
//     const h1 = document.createElement("h3", null);
//     h1.textContent = surah.number + ". Surah Name:  "+ surah.name;
//     put.appendChild(h1);
//     surah.ayahs.map((ayah) => {
//         const p = document.createElement("p", null);
//         p.textContent = ayah.number + ". " + ayah.text;
//         put.appendChild(p);
//     })
//     if(surah.number == 114){
//         const p = document.createElement("p", null);
//         p.textContent = "☪☪☪ Sadakal-lahul-Azim ☪☪☪"
//         put.appendChild(p)
//     }
// })
