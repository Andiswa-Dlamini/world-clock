const defaultCity = () => {
    let localCity = moment.tz.guess();
    const container = document.querySelector(".city-content");
    let date = moment.tz(localCity).format("DD MMMM YYYY");
    let time = moment.tz(localCity).format("HH:mm:ss [<small>]A[</small>]");
    container.innerHTML = ""; // Clear existing content
    container.innerHTML += `
        <div class="single-city-content">
            <div class="single-city-element">
                <div class="city-name">${localCity}</div>
                <div class="city-time">${time}</div>
            </div>
            <div class="city-date">${date}</div>
        </div>
        `;

}

const getLocalCity = (event) => { 
    if (event.target.value === "local-city"){
    defaultCity();
    }
    document.querySelector(".cities").classList.add("hidden");

}

const getCurrentCity = (event) => {
    let currentCity = event.target.value;
    clearInterval(defaultCityInterval); // stop the DefaultCity updates
    const container = document.querySelector(".city-content");
    let date = moment.tz(`${currentCity}`).add(`${currentCity}`).format("DD MMMM YYYY");
    let time = moment.tz(`${currentCity}`).format("HH:mm:ss  [<small>]A[</small>]");
    container.innerHTML = ""; // Clear existing content
    container.innerHTML += `
        <div class="single-city-content">
            <div class="single-city-element">
                <div class="city-name">${currentCity}</div>
                <div class="city-time">${time}</div>
            </div>
            <div class="city-date">${date}</div>
        </div>
        `;
    document.querySelector(".cities").classList.add("hidden");
    
}


const displayCities = () => {
      document.querySelector(".cities").classList.toggle("hidden");
      const container = document.querySelector(".city-content");
      container.innerHTML = ""; // clear before re-rendering

        const cityTimezones = moment.tz.names()
        .filter(tz => tz.includes('/') && !tz.startsWith('Etc/'))
        .slice(0, 10);


        cityTimezones.forEach(city => {
        const time = moment.tz(city).format("HH:mm:ss [<small>]A[</small>]");
        const date = moment.tz(city).format("DD MMMM YYYY");

        container.innerHTML += `
        <div class="city-content">
            <div class="city-element">
                <div class="city-name">${city}</div>
                <div class="time">${time}</div>
            </div>
            <div class="current-date">${date}</div>
        </div>
        `;
  });
};




window.addEventListener("DOMContentLoaded", () => {
  defaultCity(); // run once immediately
  defaultCityInterval = setInterval(defaultCity, 1000); // update every second
});
document.getElementById("city").addEventListener("change", () => {setInterval(getLocalCity, 1000)});
document.getElementById("city").addEventListener("change", getCurrentCity);
document.getElementById("all-cities").addEventListener("click", () => {setInterval(displayCities, 1000)});

