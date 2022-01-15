const DATA = [
  {
    model: `Chevrolet Bel Air`,
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/57_Chevy_BelAir_2_Door_Hardtop.jpg/1280px-57_Chevy_BelAir_2_Door_Hardtop.jpg`,
    model_year: `1957`,
    movie: `Dr. No`,
    actor: `Sean Connery`,
  },
  {
    model: `Aston Martin DB5`,
    img: `https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/06/04/15/4702550/fdfb46398d09ba9284479d5f096c428c458a952d.jpg`,
    model_year: `1963`,
    movie: `Goldfinger`,
    actor: `Sean Connery`,
  },
  {
    model: `Ford Galaxy 500`,
    img: `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harold-s-ford-1588363162.jpg?resize=980:*`,
    model_year: `1971`,
    movie: `Diamonds are forever`,
    actor: `Sean Connery`,
  },
  {
    model: `Lotus Esprit`,
    img: `https://auto.vercity.ru/gallery/img/automobiles/Lotus/1976%20Lotus%20Esprit%20(ItalDesign)%20(UK)/900x/1575188995.jpg`,
    model_year: `1976`,
    movie: "The Spy Who Loved Me",
    actor: `Roger Moore`,
  },
  {
    model: `Aston Martin V8 Vantage Volante`,
    img: `https://img5.goodfon.com/wallpaper/nbig/e/24/aston-martin-v8-vantage-volante-black-british-car.jpg`,
    model_year: `1985`,
    movie: `The Living Daylights`,
    actor: `Timothy Dalton`,
  },
  {
    model: `Ford Fairlane`,
    img: `https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/212850/212850_Front_3-4_Web.jpg`,
    model_year: `1957`,
    movie: `Casino Riyale`,
    actor: `Daniel Craig`,
  },
];

const nav = document.querySelector(`#nav-list`);
const contentWrapper = document.querySelector("#content");

const createNavElement = (model) => {
  const navElement = `
    <li class="nav_element">
        <a href="#${model.toLowerCase().replace(" ", " ", "-")}">${model}</a>
    </li>
    `;

  return navElement;
};

const generateNavElements = (data) => {
  let navContent = "";

  data.forEach((car) => {
    navContent += createNavElement(car.model);
  });

  nav.innerHTML = navContent;
};

const filterData = (data, searchName) => {
  return data.filter((car) => {
    if (car.model == searchName) return car;
  });
};

const createContent = (car) => {
  const content = `
    <div class="car">
        <h2 class="car_title">${car.model}</h2>
        <img class="car_image" src="${car.img}" alt=${car.model} avatar">
        <p class="car_model_year">${car.model_year}</p>
        <p class="car_movie">${car.movie}</p>
        <p class="car_actor">${car.actor}</p>
    </div>
    `;
  return content;
};
//initiate
generateNavElements(DATA);

nav.addEventListener("click", (e) => {
  const linkName = e.target.textContent;

  const result = filterData(DATA, linkName);

  contentWrapper.innerHTML = createContent(result[0]);
});
