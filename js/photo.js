const spinner = (style) => {
  console.log(style);
  document.getElementById("spinner").style.display = style;
};

const display = async () => {
  spinner("block");
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  displayImage(data);
};

display();

const displayImage = (images) => {
  const imageContainer = document.getElementById("image__container");
  images.forEach((image) => {
    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "card");
    imageDiv.innerHTML = `
        <div onclick="showBannerImage(${image.id})">
            <img src="${image.url}" alt="" />  
            <h2>${image.title}</h2>  
        </div>
    `;
    imageContainer.appendChild(imageDiv);
    spinner("none");
  });
};

const showBannerImage = async (id) => {
  spinner("block");
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await res.json();
  showOutput(data);
};

const showOutput = (data) => {
  const imageDetails = document.getElementById("image__details");
  imageDetails.style.display = "block";
  imageDetails.innerHTML = `
    <img src="${data.thumbnailUrl}" alt="" />
  `;
  spinner("none");
};
