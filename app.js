'use strict'
let hoursWork =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm']
;

let divEl = document.getElementById('city');
let tabEl =document.createElement("table");
divEl.appendChild(tabEl)

let cookeieArray=[];
function Cookei( theCity,minCustumer, maxCustumer,avgCookeisale,){
   this.theCity=theCity
   this.minCustumer=minCustumer;
   this.maxCustumer=maxCustumer;
   this.avgCookeisale=avgCookeisale;
  this.custumerPerhour=[];
  cookeiPerhour= [];
   this.total= 0;
cookeieArray.push(this);


}
Cookei.prototype. randomCustNumber=function(){
   for (let hour = 0; hour < hoursWork.length; hour++) {
      this.custumerPerhour.push(Math.floor(Math.random() * (this.maxCustumer - this.minCustumer + 1) + this.minCustumer));

}
Cookei.prototype.salesCookies =function(){

   for (let i = 0; i < hoursWork.length; i++) {
      this.cookeiPerhour.push(Math.ceil(this.custumerPerhour[i] * this.avgCookeisale));
      this.total += this.cookeiPerhour[i];
this.total += this.avgCookeisale[i];


}
Cookei.prototype.render = function () {

  
   let rowTable = document.createElement('tr');
  
   tabEl.appendChild(rowTable)
   let tableTd = document.createElement('td');
   tabEl.appendChild(tableTd);
   tableTd.textContent=this.theCity
   for (let hour = 0; hour < hoursWork.length; hour++) {
       let tableTd = document.createElement('td');
       rowTable.appendChild(tableTd);
       tableTd.textContent = this.avgCookeisale[hour]
   }
   let td2 = document.createElement('td');
   rowTable.appendChild(td2);
   td2.textContent = this.total

}




}

let seattle = new Cookei('seattle',23,65,6.3)
seattle.render(min,max);
seattle.randomCustNumber();




let tokyo = new Cookei('Tokyo',3,24,12);
let dubai = new Cookei('Dubai',11,38,37);
let paris = new Cookei('paris',20,38,2.3);
let lima = new Cookei('lima',2,16,4.6);

function row(){
let row3=document.createElement('tr');
tabEl.appendChild(row3);

let th2 =document.createElement('th')
tabEl.appendChild(th2);
th2.textContent=null;

for( let index=0;index<hoursWork.length;index++){
   let th4=document.createElement('th');
   tabEl.appendChild(th4);
   th4.textContent=hoursWork[index];
}
let th5=document.createElement('th');
tabEl.appendChild(th5);
th5.textContent="Daily location total";
}
/*let hoursWork =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
,
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
lima.render();*/


