const imageContainer = document.querySelector(".image-container");
const imageFolder = "images/"; // Cambia esto al nombre de tu carpeta de imágenes

// Obtener las imágenes de la carpeta
const imageFiles = [
    "platypus.jpg",
    "dodo.jpg",
    "otter.jpg",
    "llama.jpg",
    "echidna.jpg",
    "capybara.jpg"
];

// Crear elementos de imagen para cada imagen
imageFile.forEach(file => {
    const imageItem = document.createElement("div");
    imageItem.classList.add("image-item");
    imageItem.innerHTML = `<img src="${imageFolder}${file}" alt="${file}">`;
    imageContainer.appendChild(imageItem);
});
