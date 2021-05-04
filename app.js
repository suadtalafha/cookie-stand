'use strict'
let hoursWork =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let seattle = {
cityName : 'Saettle',
minCustumer :23 ,
maxCustumer : 65 ,
avgCustumer : 6.3,
numbCustperhour :[],
cookeiSales :[],
total:0,

randomCustumer : function (minCustumer,maxCustumer){
    minCustumer = Math.ceil(this.minCustumer);
   maxCustumer = Math.floor(this.maxCustumer);
  for (let i=0;i<hoursWork.length;i++){ 
    this.numbCustperhour.push( Math.floor(Math.random() * (maxCustumer - minCustumer + 1) + minCustumer));

  }
},

cookeiPerhour : function (){

 for(let hour=0;hour<hoursWork.length;hour++){

    this.cookeiSales.push(Math.ceil(this.numbCustperhour[hour]*this.avgCustumer)) ;
    this.total += this.cookeiSales[hour]

 }
},

render : function(){

let container =document.getElementById('city');
let h2El = document.createElement('h2');
container.appendChild(h2El);
h2El.textContent=this.cityName;
let ulEl = document.createElement('ul');
container.appendChild(ulEl);
      
for(let i=0;i<hoursWork.length;i++){

let liEl = document.createElement('li');
ulEl.appendChild(liEl);
liEl.textContent=`${hoursWork[i]}:${this.cookeiSales[i]} Cookeis`

    }


let liEl2 =document.createElement('li');
ulEl.appendChild(liEl2);
liEl2.textContent =`Total ${this.total} Cookeis `



}

}
seattle.randomCustumer();
seattle.cookeiPerhour();
seattle.render();



let tokyo = {
    cityName : 'Tokyo',
    minCustumer :3,
    maxCustumer : 24 ,
    avgCustumer : 1.2,
    numbCustperhour :[],
    cookeiSales :[],
    total:0,
    
    randomCustumer : function (minCustumer,maxCustumer){
        minCustumer = Math.ceil(this.minCustumer);
       maxCustumer = Math.floor(this.maxCustumer);
      for (let i=0;i<hoursWork.length;i++){ 
        this.numbCustperhour.push( Math.floor(Math.random() * (maxCustumer - minCustumer + 1) + minCustumer));
    
      }
    },
    
    cookeiPerhour : function (){
    
     for(let hour=0;hour<hoursWork.length;hour++){
    
        this.cookeiSales.push(Math.ceil(this.numbCustperhour[hour]*this.avgCustumer)) ;
        this.total += this.cookeiSales[hour]
    
     }
    },
    
    render : function(){
    
    let container =document.getElementById('city');
    let h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.cityName;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
          
    for(let i=0;i<hoursWork.length;i++){
    
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`${hoursWork[i]}:${this.cookeiSales[i]} Cookeis`
    
        }
    
    
    let liEl2 =document.createElement('li');
    ulEl.appendChild(liEl2);
    liEl2.textContent =`Total ${this.total} Cookeis `
    
    
    
    }
    
    }
    tokyo.randomCustumer();
    tokyo.cookeiPerhour();
    tokyo.render();

    let dubai = {
        cityName : 'Dubai',
        minCustumer :11 ,
        maxCustumer : 38 ,
        avgCustumer : 3.7,
        numbCustperhour :[],
        cookeiSales :[],
        total:0,
        
        randomCustumer : function (minCustumer,maxCustumer){
            minCustumer = Math.ceil(this.minCustumer);
           maxCustumer = Math.floor(this.maxCustumer);
          for (let i=0;i<hoursWork.length;i++){ 
            this.numbCustperhour.push( Math.floor(Math.random() * (maxCustumer - minCustumer + 1) + minCustumer));
        
          }
        },
        
        cookeiPerhour : function (){
        
         for(let hour=0;hour<hoursWork.length;hour++){
        
            this.cookeiSales.push(Math.ceil(this.numbCustperhour[hour]*this.avgCustumer)) ;
            this.total += this.cookeiSales[hour]
        
         }
        },
        
        render : function(){
        
        let container =document.getElementById('city');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent=this.cityName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
              
        for(let i=0;i<hoursWork.length;i++){
        
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent=`${hoursWork[i]}:${this.cookeiSales[i]} Cookeis`
        
            }
        
        
        let liEl2 =document.createElement('li');
        ulEl.appendChild(liEl2);
        liEl2.textContent =`Total ${this.total} Cookeis `
        
        
        
        }
        
        }
        dubai.randomCustumer();
        dubai.cookeiPerhour();
        dubai.render();

        let paris = {
            cityName : 'paris',
            minCustumer :20 ,
            maxCustumer : 38 ,
            avgCustumer : 2.3,
            numbCustperhour :[],
            cookeiSales :[],
            total:0,
            
            randomCustumer : function (minCustumer,maxCustumer){
                minCustumer = Math.ceil(this.minCustumer);
               maxCustumer = Math.floor(this.maxCustumer);
              for (let i=0;i<hoursWork.length;i++){ 
                this.numbCustperhour.push( Math.floor(Math.random() * (maxCustumer - minCustumer + 1) + minCustumer));
            
              }
            },
            
            cookeiPerhour : function (){
            
             for(let hour=0;hour<hoursWork.length;hour++){
            
                this.cookeiSales.push(Math.ceil(this.numbCustperhour[hour]*this.avgCustumer)) ;
                this.total += this.cookeiSales[hour]
            
             }
            },
            
            render : function(){
            
            let container =document.getElementById('city');
            let h2El = document.createElement('h2');
            container.appendChild(h2El);
            h2El.textContent=this.cityName;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
                  
            for(let i=0;i<hoursWork.length;i++){
            
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=`${hoursWork[i]}:${this.cookeiSales[i]} Cookeis`
            
                }
            
            
            let liEl2 =document.createElement('li');
            ulEl.appendChild(liEl2);
            liEl2.textContent =`Total ${this.total} Cookeis `
            
            
            
            }
            
            }
            paris.randomCustumer();
            paris.cookeiPerhour();
            paris.render();

            let lima = {
                cityName : 'Lima',
                minCustumer :2 ,
                maxCustumer : 16 ,
                avgCustumer : 4.6,
                numbCustperhour :[],
                cookeiSales :[],
                total:0,
                
                randomCustumer : function (minCustumer,maxCustumer){
                    minCustumer = Math.ceil(this.minCustumer);
                   maxCustumer = Math.floor(this.maxCustumer);
                  for (let i=0;i<hoursWork.length;i++){ 
                    this.numbCustperhour.push( Math.floor(Math.random() * (maxCustumer - minCustumer + 1) + minCustumer));
                
                  }
                },
                
                cookeiPerhour : function (){
                
                 for(let hour=0;hour<hoursWork.length;hour++){
                
                    this.cookeiSales.push(Math.ceil(this.numbCustperhour[hour]*this.avgCustumer)) ;
                    this.total += this.cookeiSales[hour]
                
                 }
                },
                
                render : function(){
                
                let container =document.getElementById('city');
                let h2El = document.createElement('h2');
                container.appendChild(h2El);
                h2El.textContent=this.cityName;
                let ulEl = document.createElement('ul');
                container.appendChild(ulEl);
                      
                for(let i=0;i<hoursWork.length;i++){
                
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent=`${hoursWork[i]}:${this.cookeiSales[i]} Cookeis`
                
                    }
                
                
                let liEl2 =document.createElement('li');
                ulEl.appendChild(liEl2);
                liEl2.textContent =`Total ${this.total} Cookeis `
                
                
                
                }
                
                }
                lima.randomCustumer();
                lima.cookeiPerhour();
                lima.render();