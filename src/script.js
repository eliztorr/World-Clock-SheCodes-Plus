function updateTime() {
  // Auckland
  let AucklandElement = document.querySelector("#auckland");
  if (AucklandElement) {
    let AucklandDateElement = AucklandElement.querySelector(".date");
    let AucklandTimeElement = AucklandElement.querySelector(".time");
    let AucklandTime = moment().tz("Pacific/Auckland");

    AucklandDateElement.innerHTML = AucklandTime.format("dddd, MMMM	Do YYYY");
    AucklandTimeElement.innerHTML = AucklandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Amsterdam
  let AmsterdamElement = document.querySelector("#amsterdam");
  if (AmsterdamElement) {
    let AmsterdamDateElement = AmsterdamElement.querySelector(".date");
    let AmsterdamTimeElement = AmsterdamElement.querySelector(".time");
    let AmsterdamTime = moment().tz("Europe/Amsterdam");

    AmsterdamDateElement.innerHTML = AmsterdamTime.format("dddd, MMMM	Do YYYY");
    AmsterdamTimeElement.innerHTML = AmsterdamTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tokyo
  let TokyoElement = document.querySelector("#tokyo");
  if (TokyoElement) {
    let TokyoDateElement = TokyoElement.querySelector(".date");
    let TokyoTimeElement = TokyoElement.querySelector(".time");
    let TokyoTime = moment().tz("Asia/Tokyo");

    TokyoDateElement.innerHTML = TokyoTime.format("dddd, MMMM	Do YYYY");
    TokyoTimeElement.innerHTML = TokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Dubai
  let DubaiElement = document.querySelector("#dubai");
  if (DubaiElement) {
    let DubaiDateElement = DubaiElement.querySelector(".date");
    let DubaiTimeElement = DubaiElement.querySelector(".time");
    let DubaiTime = moment().tz("Asia/Dubai");

    DubaiDateElement.innerHTML = DubaiTime.format("dddd,MMMM Do YYYY");
    DubaiTimeElement.innerHTML = DubaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Los Angeles
  let LosAngelesElement = document.querySelector("#los_angeles");
  if (LosAngelesElement) {
    let LosAngelesDateElement = LosAngelesElement.querySelector(".date");
    let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");
    let LosAngelesTime = moment().tz("America/Los_Angeles");

    LosAngelesDateElement.innerHTML = LosAngelesTime.format("dddd,MMMM	Do YYYY");
    LosAngelesTimeElement.innerHTML = LosAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  function updateCityTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("dddd, MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
  </div>
 </div>
    <br />
    <a class="all-cities-link" href="/">All cities</a>
  `;
  }
  setInterval(updateCityTime, 1000);
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
