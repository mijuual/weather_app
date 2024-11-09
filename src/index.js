function searchEngine(response){
    let weather = document.querySelector("#weather");
    let temp =Math.round( response.data.temperature.current);
    weather.innerHTML= temp;
}

function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let cityElement = document.querySelector("#current-city");
    let apiKey = "3092ffacb83aec9202te0fb5o5549fbd";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    console.log(url);

    axios.get(url).then(searchEngine);
    cityElement.innerHTML = searchInputElement.value;
  }

  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);
  