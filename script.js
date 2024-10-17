const dogBtn = document.getElementById("dog-btn");
const catBtn = document.getElementById("cat-btn");
const surpriseBtn = document.getElementById("surprise-btn");
const petImg = document.getElementById("pet-img");

// Função para pegar imagem aleatória de cachorro
const getRandomDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      petImg.src = data.message;
      petImg.alt = "Random dog";
    })
    .catch((error) =>
      console.error("Erro ao buscar imagem de cachorro:", error)
    );
};

// Função para pegar imagem aleatória de gato
const getRandomCat = () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      petImg.src = data[0].url;
      petImg.alt = "Random cat";
    })
    .catch((error) => console.error("Erro ao buscar imagem de gato:", error));
};

// Função para pegar a primeira imagem entre gato e cachorro
const getSurprisePet = () => {
  const dogPromise = fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => data.message);

  const catPromise = fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => data[0].url);

  Promise.any([dogPromise, catPromise])
    .then((imageUrl) => {
      petImg.src = imageUrl;
      petImg.alt = "Random pet";
    })
    .catch((error) => console.error("Erro ao buscar imagem surpresa:", error));
};

// Event listeners para os botões
dogBtn.addEventListener("click", getRandomDog);
catBtn.addEventListener("click", getRandomCat);
surpriseBtn.addEventListener("click", getSurprisePet);
