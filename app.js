'use strict'

let Seattle = {
theCity :'Seattle', 
minC: 23,
max: 65 ,
avg: 6.3,
numberCustperhour : 0,
cookeiPerhour : 0,
total:0,

 hoursWork :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

randomNum : function (max,min){
    min = Math.ceil(min);
    max = Math.floor(max);
    this.numberCustperhour=Math.floor(Math.random() * (max - min + 1) + min); 
    this.cookeiPerhour=this.numberCustperhour*this.avg;
    return this.cookeiPerhour;
},

     
render :function(){
   let elDiv=document.getElementById('city');
   let elH1 =document.createElement('h1');
   elH1.textContent =this.theCity;
   elDiv.appendChild(elH1);

   let elUl=document.createElement('ul')
   elDiv.appendChild(elUl);
   
   for (let j=0;j<this.hoursWork.lenght;j++){
let elLi=document.createElement('li');
elLi.textContent=`${this.hoursWork[j]} ${this.randomNum(this.min,this.max)} cookeis`
this.total+=this.randomNum(this.min,this.max);
elUl.appendChild(elli);

   }
let elLi=document.createElement('li');
elLi.textContent=`total${this.total} cookei`;
elUl.appendChild(elLi);

}
}

Seattle.randomNum(Seattle.min,Seattle.max);
Seattle.render();





let Tokyo = {
    theCity :'Tokyo', 
    minCustumer: 3,
    maxCustumer: 24 ,
    avgCookeisale : 1.2,
    numberCustperhour : 0,
    cookeiPerhour : 0,
    total:0,
    
     hoursWork :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    
    randomNum : function (max,min){
        min = Math.ceil(min);
        max = Math.floor(max);
        this.numberCustperhour=Math.floor(Math.random() * (max - min + 1) + min); 
        this.cookeiPerhour=this.numberCustperhour*this.avg;
        return this.cookeiPerhour;
    },
    
         
    render :function(){
       let elDiv=document.getElementById('city');
       let elH1 =document.createElement('h1');
       elH1.textContent =this.theCity;
       elDiv.appendChild(elH1);
    
       let elUl=document.createElement('ul')
       elDiv.appendChild(elUl);
       
       for (let j=0;j<this.hoursWork.lenght;j++){
    let elLi=document.createElement('li');
    elLi.textContent=`${this.hoursWork[j]} ${this.randomNum(this.min,this.max)} cookeis`
    this.total+=this.randomNum(this.min,this.max);
    elUl.appendChild(elli);
    
       }
    let elLi=document.createElement('li');
    elLi.textContent=`total${this.total} cookei`;
    elUl.appendChild(elLi);
    
    }
    }
    Tokyo.randomNum(Tokyo.min,Tokyo.max);
    Tokyo.render();

    

    let Dubai = {
        theCity :' Dubai', 
        min: 11,
        max: 38 ,
        avg: 3.7,
        numberCustperhour : 0,
        cookeiPerhour : 0,
        total:0,
        
         hoursWork :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
        
        randomNum : function (max,min){
            min = Math.ceil(min);
            max = Math.floor(max);
            this.numberCustperhour=Math.floor(Math.random() * (max - min + 1) + min); 
            this.cookeiPerhour=this.numberCustperhour*this.avg;
            return this.cookeiPerhour;
        },
        
             
        render :function(){
           let elDiv=document.getElementById('city');
           let elH1 =document.createElement('h1');
           elH1.textContent =this.theCity;
           elDiv.appendChild(elH1);
        
           let elUl=document.createElement('ul')
           elDiv.appendChild(elUl);
           
           for (let j=0;j<this.hoursWork.lenght;j++){
        let elLi=document.createElement('li');
        elLi.textContent=`${this.hoursWork[j]} ${this.randomNum(this.min,this.max)} cookeis`
        this.total+=this.randomNum(this.min,this.max);
        elUl.appendChild(elli);
        
           }
        let elLi=document.createElement('li');
        elLi.textContent=`total${this.total} cookei`;
        elUl.appendChild(elLi);
        
        }
        }
        Dubai.randomNum(Dubai.min,Dubai.max);
        Dubai.render();
        
        

        let Paris = {
            theCity :' Paris', 
            min: 20,
            max: 38 ,
            avg : 2.3,
            numberCustperhour : 0,
            cookeiPerhour : 0,
            total:0,
            
             hoursWork :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
            
            randomNum : function (max,min){
                min = Math.ceil(min);
                max = Math.floor(max);
                this.numberCustperhour=Math.floor(Math.random() * (max - min + 1) + min); 
                this.cookeiPerhour=this.numberCustperhour*this.avg;
                return this.cookeiPerhour;
            },
            
                 
            render :function(){
               let elDiv=document.getElementById('city');
               let elH1 =document.createElement('h1');
               elH1.textContent =this.theCity;
               elDiv.appendChild(elH1);
            
               let elUl=document.createElement('ul')
               elDiv.appendChild(elUl);
               
               for (let j=0;j<this.hoursWork.lenght;j++){
            let elLi=document.createElement('li');
            elLi.textContent=`${this.hoursWork[j]} ${this.randomNum(this.min,this.max)} cookeis`
            this.total+=this.randomNum(this.min,this.max);
            elUl.appendChild(elli);
            
               }
            let elLi=document.createElement('li');
            elLi.textContent=`total${this.total} cookei`;
            elUl.appendChild(elLi);
            
            }
            }
            Paris.randomNum(Paris.min,Paris.max);
            Paris.render();
            
            
                        


            let Lima = {
                theCity :' Lima ', 
                min: 2,
                max: 16 ,
                avg : 4.6,
                numberCustperhour : 0,
                cookeiPerhour : 0,
                total:0,
                
                 hoursWork :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
                
                randomNum : function (max,min){
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    this.numberCustperhour=Math.floor(Math.random() * (max - min + 1) + min); 
                    this.cookeiPerhour=this.numberCustperhour*this.avg;
                      return this.cookeiPerhour;
                },
                
                     
                render :function(){
                   let elDiv=document.getElementById('city');
                   let elH1 =document.createElement('h1');
                   elH1.textContent =this.theCity;
                   elDiv.appendChild(elH1);
                
                   let elUl=document.createElement('ul')
                   elDiv.appendChild(elUl);
                   
                   for (let j=0;j<this.hoursWork.lenght;j++){
                let elLi=document.createElement('li');
                elLi.textContent=`${this.hoursWork[j]} ${this.randomNum(this.min,this.max)} cookeis`
                this.total+=this.randomNum(this.min,this.max);
                elUl.appendChild(elli);
                
                   }
                let elLi=document.createElement('li');
                elLi.textContent=`total${this.total} cookei`;
                elUl.appendChild(elLi);
                
                }
                }
                Lima .randomNum(Lima .min,Lima .max);
                Lima .render();
                
                
                