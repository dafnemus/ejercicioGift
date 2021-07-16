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

const getPhotos = () => {
  let photos = document.getElementById('photos').value
  return photos
}
const searchBreed = () => {
  getBreeApi(getDataUser(), getPhotos());
};

const getBreeApi = async (breed, photos) => {
  const baseUrl = `https://dog.ceo/api/breed/${breed}/images/random/`;

  await fetch(baseUrl+photos)
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
    if (oldDiv.children.length >= imagesDogs.length) {
      oldDiv.removeChild(oldDiv.children[0]);
    }
    oldDiv.appendChild(pokeImage);
  }
};
