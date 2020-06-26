// Carregamento de function no loading do browse
window.onload = function () {
   console.log("Starting...")
   getAPI(Countries)
}

const urlGlobal = 'https://api.covid19api.com/'
const Countries = urlGlobal + 'summary'

// function Get da API do COVID-19
const getAPI = (url) => {
   fetch(url)
      .then(
         function (response) {
            response.json().then(function (data) {
               console.log(data);
               getRegion(data.Countries)
            });
         }
      )
      .catch(function (err) {
         console.log('Error', err);
      });
}

const getRegion = (data) => {
   for (let i = 0; i < data.length; i++) {
      if (data[i].Country == "Brazil") {
         console.log(data[i]);
      } else {
         console.log("not found")
      }
   }
}

const getWorld = (data) => {}
const getRanking = (data) => {}