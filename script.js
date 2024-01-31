const resultCharacter = document.getElementById('result-character');
const playlistContainer = document.getElementById('result-playlists');
const searchInput = document.getElementById('search-input');

resultCharacter.style.display = 'none';

function requestApi(searchTerm) {
    fetch(`http://localhost:3000/character?name_like=${searchTerm}`)
      .then((response) => response.json())
      .then((results) => displayResults(results));
  };

  function displayResults(results) {
    hidePlaylists();
    const characterImage = document.getElementById("character-img");
    const characterName = document.getElementById("character-name");
    const descriptionHero = document.getElementById("descriptionHeroSpan");

    results.forEach((element) => {
      characterImage.src = element.urlImg;
      characterName.innerText = element.name;
      descriptionHero.innerText = element.description;
      });
    resultCharacter.classList.remove("hidden");
    resultCharacter.style.display = 'flex';
    };
  
  function hidePlaylists() {
    playlistContainer.classList.add("hidden");
  };
  
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
      if (searchTerm === "") {
      resultCharacter.classList.add("hidden");
      playlistContainer.classList.remove("hidden");
      return;
    }
    requestApi(searchTerm);
  });

  resultCharacter.addEventListener('mouseover', function () {
    const descriptionHero = document.getElementById("descriptionHero");
    descriptionHero.classList.remove("hidden");
    descriptionHero.style.display = "flex";
  });

  resultCharacter.addEventListener('mouseout', function () {
    descriptionHero.style.display = "none";
  });