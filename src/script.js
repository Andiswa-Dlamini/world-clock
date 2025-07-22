// console.log(moment.tz.guess());
// alert(moment.tz.guess());

// const localTime = moment().tz("Africa/Johannesburg").format("YYYY-MM-DD HH:mm");
// console.log(localTime);


const getLocalCity = (event) => {
    if (event.target.value === "my-local-city"){
    let localCity = moment.tz.guess();
    let date = moment.tz(localCity).format("DD MMMM YYYY");
    let time = moment.tz(localCity).format("HH:mm");
    document.getElementById("city-name").textContent = moment.tz.guess();
    document.getElementById("city-date").textContent = date;
    document.getElementById("city-time").textContent = time;

    alert(localCity);
    }

}

document.getElementById("city").addEventListener("change", getLocalCity);



console.log(moment.tz.guess());

const getCurrentCity = (event) => {
    let currentCity = event.target.value;
    let date = moment.tz(`${currentCity}`).add(`${currentCity}`).format("DD MMMM YYYY");
    let time = moment.tz(`${currentCity}`).format("HH:mm");
    document.getElementById("city-name").textContent = currentCity;
    document.getElementById("city-date").textContent = date;
    document.getElementById("city-time").textContent = time;
    }


document.getElementById("city").addEventListener("change", getCurrentCity);
