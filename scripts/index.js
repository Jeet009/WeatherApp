const key = "0lOiuGFXOPnlXrGVatvupDjjaGVRdvG2";

// getting weather

const getWeather = async (id) => {
  const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const res = await fetch(baseUrl + query);
  const data = await res.json();

  return data[0];
};

// getting city
const getCity = async (city) => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const res = await fetch(baseUrl + query);
  const data = await res.json();

  return data[0];
};
