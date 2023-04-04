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
updateTime();
setInterval(updateTime, 1000);
