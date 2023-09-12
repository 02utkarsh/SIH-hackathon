var hours= document.querySelector("#hoursPerDay").value
var power= document.querySelector("#powerWatts").value
var price=document.querySelector("#Price").value
var month=document.querySelector("#month").value
var getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
    
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };
  //calculation of the energy consumption and other factors
function energyCost(){
    var b=(power*hours)/1000;
 
    const date= new Date()
    document.getElementById("costPerHour").value=b/24;
    document.getElementById("costPerMonth").value=b*getDaysInMonth(month,date.getFullYear());
    document.getElementById("costPerDay").value=b*price;
    document.getElementById("costPerYear").value=b*365;
    document.getElementById("kwhPerDay").value=b;
    // prevent.default();

}
//validating the data type
function validateEntry(){
    if((typeof(power)==="string") && (typeof(hours)==="string")&&(typeof(price)==="string") ){
     energyCost()
    }
    else{
        alert("enter valid number");
    }
}

