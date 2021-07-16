

const onSubmit = (e) => {
  console.log('hola');
  e.preventDefault();
};
const form = document.getElementById('form');
form.addEventListener('submit', onSubmit);

const getDataUser = () => {
  let breed = document.getElementById('breed').value;
  return breed;
};

const searchBreed = () => {
  getBreeApi(getDataUser());
};

const getBreeApi = async (breed) => {
  const baseUrl = `https://cors-anywhere.herokuapp.com/http://dog.ceo/api/breed/${breed}/images/random/3`;

  await fetch(baseUrl)
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      console.log(post.message);
      showImage(post.message)
    }).catch((e) => {
      console.log(e)
    })
    
};

const showImage = (imagesDogs) => {
  let oldDiv = document.getElementById('img');
  for (let i = 0; i < imagesDogs.length; i++) {
    let imagen = new Image();
    imagen.src = imagesDogs[i];
    let pokeImage = document.createElement('div').appendChild(imagen);
    pokeImage.classList.add('breed');
    if (oldDiv.children.length > 2) {
      oldDiv.removeChild(oldDiv.children[0]);
    }
    oldDiv.appendChild(pokeImage);
  }
};
