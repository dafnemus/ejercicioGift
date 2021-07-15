// const API_DOGS = 'https://dog.ceo/api/breed/';

// const API_DOCS_IMG = '/images/';

const onSubmit = (e) => {
  console.log('hola');
  e.preventDefault();
};
const form = document.getElementById('form');
form.addEventListener('submit', onSubmit);

const getDataUser = () => {
  let pokemon = document.getElementById('pokemon').value;
  return pokemon;
};

const searchPokemon = () => {
  getBreeApi(getDataUser());
};

const getBreeApi = (pokemon) => {
  const API_POCS = 'https://pokeapi.co/api/v2/pokemon/';
  fetch(API_POCS + pokemon)
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      console.log(post.sprites.front_default);
      showImage(post.sprites.front_default);
    });
};

const showImage = (image) => {
  let imagen = new Image();
  imagen.src = image;
  let oldDiv = document.getElementById('img');
  let pokeImage = document.createElement('div').appendChild(imagen)
  pokeImage.classList.add('pokemon')
  if (oldDiv.children.length > 0) {
    oldDiv.removeChild(oldDiv.children[0]);
  }
  oldDiv.appendChild(pokeImage);
};
