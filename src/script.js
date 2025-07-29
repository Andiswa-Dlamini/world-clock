const DefaultCity = () => {
    let localCity = moment.tz.guess();
    let date = moment.tz(localCity).format("DD MMMM YYYY");
    let time = moment.tz(localCity).format("HH:mm:ss [<small>]A[</small>]");
    document.querySelector(".city-name").textContent = moment.tz.guess();
    document.querySelector(".city-date").textContent = date;
    document.querySelector(".city-time").textContent = time;


}

const getLocalCity = (event) => { //unnecessary function
    if (event.target.value === "local-city"){
    let localCity = moment.tz.guess();
    let date = moment.tz(localCity).format("DD MMMM YYYY");
    let time = moment.tz(localCity).format("HH:mm:ss [<small>]A[</small>]");
    document.querySelector(".city-name").textContent = moment.tz.guess();
    document.querySelector(".city-date").textContent = date;
    document.querySelector(".city-time").innerHTML = time;

    }

}

const getCurrentCity = (event) => {
    let currentCity = event.target.value;
    let date = moment.tz(`${currentCity}`).add(`${currentCity}`).format("DD MMMM YYYY");
    let time = moment.tz(`${currentCity}`).format("HH:mm:ss  [<small>]A[</small>]");
    document.querySelector(".city-name").textContent = currentCity;
    document.querySelector(".city-date").textContent = date;
    document.querySelector(".city-time").innerHTML = time;
    document.querySelector(".cities").classList.add("hidden");
    
}

const displayCities = () => {
    document.querySelector(".cities").classList.toggle("hidden");
}


DefaultCity();
document.getElementById("city").addEventListener("change", getLocalCity);
document.getElementById("city").addEventListener("change", getCurrentCity);
setInterval(() => {
     
    setTimeout(getCurrentCity);
}, 1000);
document.getElementById("all-cities").addEventListener("click", displayCities)