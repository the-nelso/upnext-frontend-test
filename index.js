const imageList = document.getElementById('imageList');

if (imageList) {
  let images = [
    {
      "id": 1,
      "name": "Euphorbia eritrea",
      "sun": "high",
      "water": "rarely",
      "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png",
      "price": 25,
      "toxicity": false
    },
    {
      "id": 2,
      "name": "Succulent Bowl",
      "sun": "high",
      "water": "rarely",
      "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/succulent-bowl.png",
      "price": 30,
      "toxicity": false
    },
    {
      "id": 3,
      "name": "Bunny ears cacti",
      "sun": "high",
      "water": "rarely",
      "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/bunny-ears-cacti.png",
      "price": 20,
      "toxicity": false
    },
    {
      "id": 4,
      "name": "Ficus lyrata",
      "sun": "high",
      "water": "regularly",
      "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ficus-lyrata.png",
      "price": 30,
      "toxicity": false
    },
    {
      "id": 5,
      "name": "Bamboo",
      "sun": "low",
      "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/lucky-bamboo.png",
      "water": "regularly",
      "price": 15,
      "toxicity": false
    },
    {
      "id": 6,
      "name": "Ponytail Palm",
      "sun": "low",
      "water": "regularly",
      "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ponytail-palm.png",
      "price": 50,
      "toxicity": false
    },
    {
      "id": 7,
      "name": "Pilea peperomioides",
      "sun": "no",
      "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/pilea-peperomioides.png",
      "water": "regularly",
      "price": 50,
      "toxicity": true
    },
    {
      "id": 8,
      "name": "Calathea triostar",
      "sun": "no",
      "water": "daily",
      "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/calathea-triostar.png",
      "price": 50,
      "toxicity": true
    },
    {
      "id": 9,
      "name": "Monstera deliciosa",
      "sun": "no",
      "url": "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/monstera-deliciosa.png",
      "water": "daily",
      "price": 50,
      "toxicity": true
    }
  ];
  const waterSelect = document.getElementById("water");
  const sunSelect = document.getElementById("sun");
  const toxicitySelect = document.getElementById("toxicity");

  function filterImages() {
    const waterValue = waterSelect.value;
    const sunValue = sunSelect.value;
    const toxicityValue = toxicitySelect.value;

    // Check if all select values are empty strings
    if (waterValue === "" && sunValue === "" && toxicityValue === "") {
      imageList.innerHTML = "";
      document.getElementById("content").style.display = "";
      return;
    }

    const filteredImages = images.filter((image) => {
      if (
        (waterValue && image.water !== waterValue) ||
        (sunValue && image.sun !== sunValue) ||
        (toxicityValue && image.toxicity !== (toxicityValue === "false"))
      ) {
        return false;
      }
      return true;
    });

    if (filteredImages.length === 0) {
      document.getElementById("content").style.display = "";
    }

    else {
      document.getElementById("content").style.display = "none";
    }

    renderImages(filteredImages);
  }



  function renderImages(images) {
    imageList.innerHTML = "";

    images.forEach((image) => {
      const imgDiv = document.createElement("div");
      imgDiv.className = "image";
      const img = document.createElement("img");
      img.src = image.url;
      img.alt = image.name;
      const namePara = document.createElement("p");
      namePara.textContent = image.name;
      const pricePara = document.createElement("p");
      pricePara.textContent = "$" + image.price;
      imgDiv.appendChild(img);
      imgDiv.appendChild(namePara);
      imgDiv.appendChild(pricePara);
      imageList.appendChild(imgDiv);
    });

  }


  waterSelect.addEventListener("change", filterImages);
  sunSelect.addEventListener("change", filterImages);
  toxicitySelect.addEventListener("change", filterImages);

} else {
  console.error('Could not find the imageList element in the DOM.');
}


