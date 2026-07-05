const apiKey = 'ff15213179d8a53abf53025c4b00ec98'; 
const cityEl = document.getElementById('city');
const tempEl = document.getElementById('temp');
const descEl = document.getElementById('desc');

const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchButton');
const searchInput = document.querySelector('.searchInput');

async function getWeather(location) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=imperial&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            cityEl.innerText = data.name;
            tempEl.innerText = `${Math.round(data.main.temp)}°F`;
            descEl.innerText = data.weather[0].description;

const appContainer = document.querySelector('.app'); 
const cloudsContainer = document.querySelector('.clouds-container');
const mainWeatherIcon = document.querySelector('.weather-icon'); 

const weatherDescription = data.weather[0].description.toLowerCase();

if (weatherDescription === 'broken clouds' || weatherDescription === 'overcast clouds' || weatherDescription === 'scattered clouds') {
    cloudsContainer.classList.add('show-clouds');
    mainWeatherIcon.classList.remove('hide-icon'); 
    
    appContainer.classList.add('cloudy-bg'); 
} else {
    cloudsContainer.classList.remove('show-clouds');
    mainWeatherIcon.classList.add('hide-icon'); 
    
    appContainer.classList.remove('cloudy-bg'); 
}
  
        } else {
            alert("City not found!");
        }
    } catch (error) {
        console.error("Network Error:", error);
    }
}

searchBtn.onclick = () => {
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
        searchInput.focus();
    }
};

searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const city = searchInput.value.trim();
        if (city) {
            getWeather(city);
            searchBox.classList.remove('active');
            searchInput.value = ""; 
        }
    }
});

getWeather('Pflugerville');

// ==========================================
// NAVIGATION PAGE ROUTER (Line 65)
// ==========================================

const navButtons = document.querySelectorAll('.main-nav-container .button');
const homePage = document.getElementById('home-page');
const mapPage = document.getElementById('map-page');
const locationPage = document.getElementById('location-page');

navButtons[0].addEventListener('click', () => {
    switchPage(homePage);
});

navButtons[1].addEventListener('click', () => {
    switchPage(mapPage);
});

navButtons[2].addEventListener('click', () => {
    switchPage(locationPage);
});

function switchPage(targetPage) {
    document.querySelectorAll('.page-view').forEach(page => {
        page.classList.remove('active-page');
    });
    targetPage.classList.add('active-page');
}