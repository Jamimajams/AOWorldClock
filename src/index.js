function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#losAngeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = document.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "H:mm:ss[<small>]A[</small>]"
  );

  // Toronto
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = document.querySelector(".toronto.time");
  let torontoTime = moment().tz("America/Toronto");
  torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoTime.format(
    "H:mm:ss[<small>]A[</small>]"
  );

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = document.querySelector(".paris.time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("H:mm:ss[<small>]A[</small>]");

  // Cancun
  let cancunElement = document.querySelector("#cancun");
  let cancunDateElement = cancunElement.querySelector(".date");
  let cancunTimeElement = document.querySelector(".cancun.time");
  let cancunTime = moment().tz("America/Cancun");
  cancunDateElement.innerHTML = cancunTime.format("MMMM Do YYYY");
  cancunTimeElement.innerHTML = cancunTime.format(
    "H:mm:ss[<small>]A[</small>]"
  );
}

function changeTimezone(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTimezoneTime = moment().tz(cityTimezone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="row">
          <div class="col-6 city">
            ${cityName}
            <div class="date">${cityTimezoneTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="col-6 los-angeles time">${cityTimezoneTime.format(
            "H:mm:ss"
          )}<small>${cityTimezoneTime.format("A")}</small>
          </div>
        </div>
        <div class="row">
          <div class="col-6 city">
            ${cityName}
            <div class="date">${cityTimezoneTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="col-6 toronto time">${cityTimezoneTime.format(
            "H:mm:ss"
          )}<small>${cityTimezoneTime.format("A")}</small>
          </div>
        </div>
        <div class="row">
          <div class="col-6 city">
            ${cityName}
            <div class="date">${cityTimezoneTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="col-6 paris time">${cityTimezoneTime.format(
            "H:mm:ss"
          )}<small>${cityTimezoneTime.format("A")}</small>
          </div>
        </div>
        <div class="row">
          <div class="col-6 city">
           ${cityName}
            <div class="date">${cityTimezoneTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="col-6 cancun time">${cityTimezoneTime.format(
            "H:mm:ss"
          )}<small>${cityTimezoneTime.format("A")}</small>
          </div>
        </div>`;
}

let chooseCitySelect = document.querySelector("#choose-city");
chooseCitySelect.addEventListener("change", changeTimezone);
