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
               getRegion(data.Countries);
               getWorld(data.Global);
               getRanking(data.Countries);
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
         console.log("Region: ", data[i]);
         let varRegion = document.querySelector('.Region');
         var p1 = document.createElement("p");
         var p2 = document.createElement("p");
         var p3 = document.createElement("p");
         var p4 = document.createElement("p");
         var label1 = document.createElement("label");
         var span1 = document.createElement("span");
         var label2 = document.createElement("label");
         var span2 = document.createElement("span");
         var label3 = document.createElement("label");
         var span3 = document.createElement("span");
         var label4 = document.createElement("label");
         var span4 = document.createElement("span");
         label1.innerText = " País: ";
         span1.innerText = data[i].Country;
         label2.innerText = " Mortes confirmadas: ";
         span2.innerText = data[i].TotalDeaths;
         label3.innerText = " Recuperados: ";
         span3.innerText = data[i].TotalRecovered;
         label4.innerText = " Total Confirmados: ";
         span4.innerText = data[i].TotalConfirmed;
         p1.appendChild(label1)
         p1.appendChild(span1)
         p2.appendChild(label2)
         p2.appendChild(span2)
         p3.appendChild(label3)
         p3.appendChild(span3)
         p4.appendChild(label4)
         p4.appendChild(span4)
         varRegion.appendChild(p1);
         varRegion.appendChild(p2);
         varRegion.appendChild(p3);
         varRegion.appendChild(p4);
      } else {
         console.log("not found")
      }
   }
}

const getWorld = (data) => {
   console.log(data)
   let varRegion = document.querySelector('.World');
   var p1 = document.createElement("p");
   var p2 = document.createElement("p");
   var p3 = document.createElement("p");
   var p4 = document.createElement("p");
   var p5 = document.createElement("p");
   var p6 = document.createElement("p");
   var label1 = document.createElement("label");
   var span1 = document.createElement("span");
   var label2 = document.createElement("label");
   var span2 = document.createElement("span");
   var label3 = document.createElement("label");
   var span3 = document.createElement("span");
   var label4 = document.createElement("label");
   var span4 = document.createElement("span");
   var label5 = document.createElement("label");
   var span5 = document.createElement("span");
   var label6 = document.createElement("label");
   var span6 = document.createElement("span");
   label1.innerText = " Novos Confirmados: ";
   span1.innerText = data.NewConfirmed;
   label2.innerText = " Novas Mortes: ";
   span2.innerText = data.NewDeaths;
   label3.innerText = " Novos Recuperados: ";
   span3.innerText = data.NewRecovered;
   label4.innerText = " Total Confirmados: ";
   span4.innerText = data.TotalConfirmed;
   label5.innerText = " Total Mortes: ";
   span5.innerText = data.TotalDeaths;
   label6.innerText = " Total Recuperados: ";
   span6.innerText = data.TotalRecovered;
   p1.appendChild(label1)
   p1.appendChild(span1)
   p2.appendChild(label2)
   p2.appendChild(span2)
   p3.appendChild(label3)
   p3.appendChild(span3)
   p4.appendChild(label4)
   p4.appendChild(span4)
   p5.appendChild(label5)
   p5.appendChild(span5)
   p6.appendChild(label6)
   p6.appendChild(span6)
   varRegion.appendChild(p1);
   varRegion.appendChild(p2);
   varRegion.appendChild(p3);
   varRegion.appendChild(p4);
   varRegion.appendChild(p5);
   varRegion.appendChild(p6);

}
const getRanking = (data) => {
   let ArrayOrdem = ordenation(data);
   console.log(ArrayOrdem);
   for (let i = 0; i < 9; i++) {
      let varRegion = document.querySelector('.Ranking');
      var p1 = document.createElement("p");
      var p2 = document.createElement("p");
      var label1 = document.createElement("label");
      var span1 = document.createElement("span");
      var label2 = document.createElement("label");
      var span2 = document.createElement("span");
      label1.innerText = " País: ";
      span1.innerText = ArrayOrdem[i].Country;
      label2.innerText = " Casos Confirmados: ";
      span2.innerText = ArrayOrdem[i].TotalConfirmed;
      p1.appendChild(label1)
      p1.appendChild(span1)
      p2.appendChild(label2)
      p2.appendChild(span2)
      varRegion.appendChild(p1);
      varRegion.appendChild(p2);
   }

}

function ordenation(ordem) {
   return ordem.sort(function (a, b) {
      return b.TotalConfirmed - a.TotalConfirmed;
   })
}

const about = () => {
   let modal = document.querySelector('.modal');
   modal.classList.toggle('none')
}