'use strict'

let hoursWork =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

let seattle = {
   theCity: 'Seattle',
   minCustumer: 23,
   maxCustumer: 65,
   avgCookeisale: 6.3,
   custumerPerhour: [],
   
   cookeiPerhour: [],
   total: 0,
   
   randomCustNumber: function () {
       for (let hour = 0; hour < hoursWork.length; hour++) {
           this.custumerPerhour.push(Math.floor(Math.random() * (this.maxCustumer - this.minCustumer + 1) + this.minCustumer));
       }
   },


   salesCookies: function () {
       for (let i = 0; i < hoursWork.length; i++) {
           this.cookeiPerhour.push(Math.ceil(this.custumerPerhour[i] * this.avgCookeisale));
           this.total += this.cookeiPerhour[i];
       }
   },

   render: function () {
       let divEl = document.getElementById('city');
       let h2El = document.createElement('h2');
       divEl.appendChild(h2El);
       h2El.textContent = this.theCity;
       let ulEl = document.createElement('ul');
       divEl.appendChild(ulEl);
       for (let hour = 0; hour < hoursWork.length; hour++) {
           let liEl = document.createElement('li');
           ulEl.appendChild(liEl);
           liEl.textContent = `${hoursWork[hour]}:${this.cookeiPerhour[hour]} cookies`
       }
       let totalLi = document.createElement('li');
       ulEl.appendChild(totalLi);
       totalLi.textContent = `Total: ${this.total} cookies`

   }

}
seattle.randomCustNumber();
seattle.salesCookies();
seattle.render();


let tokyo = {
   theCity: 'tokyo',
   minCustumer: 3,
   maxCustumer: 24,
   avgCookeisale: 1.2,
   custumerPerhour: [],
   
   cookeiPerhour: [],
   total: 0,
   
   randomCustNumber: function () {
       for (let hour = 0; hour < hoursWork.length; hour++) {
           this.custumerPerhour.push(Math.floor(Math.random() * (this.maxCustumer - this.minCustumer + 1) + this.minCustumer));
       }
   },


   salesCookies: function () {
       for (let i = 0; i < hoursWork.length; i++) {
           this.cookeiPerhour.push(Math.ceil(this.custumerPerhour[i] * this.avgCookeisale));
           this.total += this.cookeiPerhour[i];
       }
   },

   render: function () {
       let divEl = document.getElementById('city');
       let h2El = document.createElement('h2');
       divEl.appendChild(h2El);
       h2El.textContent = this.theCity;
       let ulEl = document.createElement('ul');
       divEl.appendChild(ulEl);
       for (let hour = 0; hour < hoursWork.length; hour++) {
           let liEl = document.createElement('li');
           ulEl.appendChild(liEl);
           liEl.textContent = `${hoursWork[hour]}:${this.cookeiPerhour[hour]} cookies`
       }
       let totalLi = document.createElement('li');
       ulEl.appendChild(totalLi);
       totalLi.textContent = `Total: ${this.total} cookies`

   }

}
tokyo.randomCustNumber();
tokyo.salesCookies();
tokyo.render();



let dubai = {
   theCity: 'dubai',
   minCustumer: 11,
   maxCustumer: 38,
   avgCookeisale: 3.7,
   custumerPerhour: [],
   
   cookeiPerhour: [],
   total: 0,
   
   randomCustNumber: function () {
       for (let hour = 0; hour < hoursWork.length; hour++) {
           this.custumerPerhour.push(Math.floor(Math.random() * (this.maxCustumer - this.minCustumer + 1) + this.minCustumer));
       }
   },


   salesCookies: function () {
       for (let i = 0; i < hoursWork.length; i++) {
           this.cookeiPerhour.push(Math.ceil(this.custumerPerhour[i] * this.avgCookeisale));
           this.total += this.cookeiPerhour[i];
       }
   },

   render: function () {
       let divEl = document.getElementById('city');
       let h2El = document.createElement('h2');
       divEl.appendChild(h2El);
       h2El.textContent = this.theCity;
       let ulEl = document.createElement('ul');
       divEl.appendChild(ulEl);
       for (let hour = 0; hour < hoursWork.length; hour++) {
           let liEl = document.createElement('li');
           ulEl.appendChild(liEl);
           liEl.textContent = `${hoursWork[hour]}:${this.cookeiPerhour[hour]} cookies`
       }
       let totalLi = document.createElement('li');
       ulEl.appendChild(totalLi);
       totalLi.textContent = `Total: ${this.total} cookies`

   }

}
dubai.randomCustNumber();
dubai.salesCookies();
dubai.render();



let paris = {
   theCity: 'paris',
   minCustumer: 20,
   maxCustumer: 38,
   avgCookeisale: 2.3,
   custumerPerhour: [],
   
   cookeiPerhour: [],
   total: 0,
   
   randomCustNumber: function () {
       for (let hour = 0; hour < hoursWork.length; hour++) {
           this.custumerPerhour.push(Math.floor(Math.random() * (this.maxCustumer - this.minCustumer + 1) + this.minCustumer));
       }
   },


   salesCookies: function () {
       for (let i = 0; i < hoursWork.length; i++) {
           this.cookeiPerhour.push(Math.ceil(this.custumerPerhour[i] * this.avgCookeisale));
           this.total += this.cookeiPerhour[i];
       }
   },

   render: function () {
       let divEl = document.getElementById('city');
       let h2El = document.createElement('h2');
       divEl.appendChild(h2El);
       h2El.textContent = this.theCity;
       let ulEl = document.createElement('ul');
       divEl.appendChild(ulEl);
       for (let hour = 0; hour < hoursWork.length; hour++) {
           let liEl = document.createElement('li');
           ulEl.appendChild(liEl);
           liEl.textContent = `${hoursWork[hour]}:${this.cookeiPerhour[hour]} cookies`
       }
       let totalLi = document.createElement('li');
       ulEl.appendChild(totalLi);
       totalLi.textContent = `Total: ${this.total} cookies`

   }

}
paris.randomCustNumber();
paris.salesCookies();
paris.render();


let lima = {
   theCity: 'lima',
   minCustumer: 2,
   maxCustumer: 16,
   avgCookeisale: 4.6,
   custumerPerhour: [],
   
   cookeiPerhour: [],
   total: 0,
   
   randomCustNumber: function () {
       for (let hour = 0; hour < hoursWork.length; hour++) {
           this.custumerPerhour.push(Math.floor(Math.random() * (this.maxCustumer - this.minCustumer + 1) + this.minCustumer));
       }
   },


   salesCookies: function () {
       for (let i = 0; i < hoursWork.length; i++) {
           this.cookeiPerhour.push(Math.ceil(this.custumerPerhour[i] * this.avgCookeisale));
           this.total += this.cookeiPerhour[i];
       }
   },

   render: function () {
       let divEl = document.getElementById('city');
       let h2El = document.createElement('h2');
       divEl.appendChild(h2El);
       h2El.textContent = this.theCity;
       let ulEl = document.createElement('ul');
       divEl.appendChild(ulEl);
       for (let hour = 0; hour < hoursWork.length; hour++) {
           let liEl = document.createElement('li');
           ulEl.appendChild(liEl);
           liEl.textContent = `${hoursWork[hour]}:${this.cookeiPerhour[hour]} cookies`
       }
       let totalLi = document.createElement('li');
       ulEl.appendChild(totalLi);
       totalLi.textContent = `Total: ${this.total} cookies`

   }

}
lima.randomCustNumber();
lima.salesCookies();
lima.render();

   