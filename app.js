'use strict'
let hoursWork =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

let container =document.getElementById('city');
let table =document.createElement("table");
container.appendChild(table);

let cityesArray =[];

function Cityes(cityName,minCustumer,maxCustumer,avgCookeisale) {
    this.cityName=cityName;
    this.minCustumer=minCustumer;
    this.maxCustumer=maxCustumer;
    this.avgCookeisale=avgCookeisale;
    this.numbCustperhour=[];
    this.cookeiSales=[];
    this.total=0;
    cityesArray.push(this);
}
Cityes.prototype.randomCustumer=function() {
    
    
   for (let i=0;i<hoursWork.length;i++){ 
     this.numbCustperhour.push( Math.floor(Math.random() * (this.maxCustumer - this.minCustumer + 1) + this.minCustumer));
   }
   
}

Cityes.prototype.cookeiPerhour=function() {
    
    for(let hour=0;hour<hoursWork.length;hour++){

        this.cookeiSales.push(Math.ceil(this.numbCustperhour[hour]*this.avgCookeisale)) ;
        this.total += this.cookeiSales[hour];
    }  
   
}   



Cityes.prototype.render=function() {

 
let tableTr = document.createElement('tr');

table.appendChild(tableTr);

let tableTd2=document.createElement('td');

tableTr.appendChild(tableTd2);

tableTd2.textContent= this.cityName;

for(let i=0;i<hoursWork.length;i++){

let tableTd8 = document.createElement('td');

tableTr.appendChild(tableTd8);
tableTd8.textContent=this.cookeiSales[i]

    
}
let tableTd3 =document.createElement('td');
tableTr.appendChild(tableTd3);
tableTd3.textContent =this.total;
}




let seattle = new Cityes('Seattle',23,65,6.3);
let tokyo = new Cityes('Tokyo',3,24,12);
let dubai = new Cityes('Dubai',11,38,37);
let paris = new Cityes('paris',20,38,2.3);
let lima = new Cityes('lima',2,16,4.6);

function rowHours() {
let tableTr2=document.createElement('tr');
table.appendChild(tableTr2);

let tableTh = document.createElement('th');
tableTr2.appendChild(tableTh);
tableTh.textContent= null ;

for (let i=0;i<hoursWork.length;i++){

let tableTh3=document.createElement('th');

tableTr2.appendChild(tableTh3);

tableTh3.textContent=hoursWork[i]

}
   let tableTh4=document.createElement('th');
   tableTr2.appendChild(tableTh4);
   tableTh4.textContent="Daily location total" ;    
    
}

function footer() {

    
    let tableTr3=document.createElement('tr');
    table.appendChild(tableTr3);
    let tableTd4=document.createElement('td');
    tableTr3.appendChild(tableTd4);
    tableTd4.textContent ="Totals"
let total =0;
    for (let i=0;i<hoursWork.length;i++){
        let total2=0;
        for (let j=0;j<cityesArray.length;j++){

            total2=total2+ cityesArray[j].cookeiSales[i];
total += cityesArray[j].cookeiSales[i];

        }
        let tableTd5 =document.createElement('td');
        tableTr3.appendChild(tableTd5);
        tableTd5.textContent=total2;
    }
   
    let tableTd6 =document.createElement('td');
    tableTr3.appendChild(tableTd6);
tableTd6.textContent=total;

}

rowHours();

seattle.randomCustumer();
seattle.cookeiPerhour();
seattle.render();

tokyo.randomCustumer();
tokyo.cookeiPerhour();
tokyo.render();

dubai.randomCustumer();
dubai.cookeiPerhour();
dubai.render();

paris.randomCustumer();
paris.cookeiPerhour();
paris.render();

lima.randomCustumer();
lima.cookeiPerhour();
lima.render();

footer();

let element=document.getElementById('Salmon');
element.addEventListener('submit', addStore);
function addStore(event) {
  event.preventDefault();

  
  let StoreName=event.target.StoreName.value;

  let minimumSales=event.target.MinimumCookeisSales .value;
  
  let maximumSales=event.target.MaximumCookeisSales.value;
  
  let avgSales=event.target.AvaregeCookeisSales.value;



  let newStore= new Cityes(StoreName,minimumSales,maximumSales,avgSales);
  
  newStore.randomCustumer();
  newStore.cookeiPerhour();
  newStore.render();
}

