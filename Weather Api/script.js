const ApiKey = "2876ae4440d536700dedd3db960a198b";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchInput = document.getElementById("city");
const icon = document.querySelector(".wheather-icon");

async function checkWeather(city) {
  const Response = await fetch(
    ApiUrl + city + `&appid=${ApiKey}` + "&units=metric"
  );

  if (Response.status == "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector('.wheather').style.display = "none";
  } else {
    let data = await Response.json();

    console.log(data);

    if (data.weather[0].main == "Clouds") {
      icon.src = "./images/clouds.png";
      console.log(data.weather[0].main);
    } else if (data.weather[0].main == "Smoke") {
      icon.src = "./images/mist.png";
      console.log("hlo");
    } else if (data.weather[0].main == "haze") {
      icon.src = "./images/drizzle.png";
      console.log(data.weather[0].main);
    } else if (data.weather[0].main == "Clear") {
      icon.src = "./images/clear.png";
    } else {
      console.log("err");
    }
    console.log(data.weather[0].main);

    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    document.querySelector('.error').style.display = "none"
    document.querySelector('.wheather').style.display = "block";
  }
}

const searchBtn = document
  .querySelector(".search button")
  .addEventListener("click", () => {
    checkWeather(searchInput.value);
  });

// {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":287.05,"feels_like":286.53,"temp_min":285.85,"temp_max":287.97,"pressure":1004,"humidity":78},"visibility":10000,"wind":{"speed":7.72,"deg":240,"gust":12.86},"clouds":{"all":100},"dt":1700404205,"sys":{"type":2,"id":2075535,"country":"GB","sunrise":1700378684,"sunset":1700410030},"timezone":0,"id":2643743,"name":"London","cod":200}
// https://api.openweathermap.org/data/2.5/weather?q=gujarat&appid=2876ae4440d536700dedd3db960a198b
