const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const content = document.querySelector(".content");
const cardImage = document.querySelector(".card-image img");

const updateUI = (data) => {
  const cityDets = data.cityDetails;
  const weather = data.cityWeather;

  //updating details
  content.innerHTML = `
    <h5 class="font-c">${cityDets.EnglishName}</h5>
    <span class="font-c">${weather.WeatherText}</span>
    <h3 class="font-c">${weather.Temperature.Metric.Value} &degC</h3>
  `;

  //updating image
  let imgSrc = null;
  if (weather.IsDayTime) {
    imgSrc = "assets/Day.png";
  } else if (weather.IsDayTime && weather.WeatherText.includes("cloudy")) {
    imgSrc = "assets/Evening.png";
  } else {
    imgSrc = "assets/Night.png";
  }

  cardImage.setAttribute("src", imgSrc);

  //remove hide class
  if (card.classList.contains("hide")) {
    card.classList.remove("hide");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    cityWeather: cityWeather,
  };
};

cityForm.addEventListener("submit", (e) => {
  //preventing default
  e.preventDefault();

  //getting city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //updating UI
  updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));
});
