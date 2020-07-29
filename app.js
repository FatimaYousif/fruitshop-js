let total=0;   // total money (made)
let balance=0;   //user total
let countA=0;
let budget=0;

function input()
{
    balance=parseInt(document.querySelector("#balance").value);
    alert(balance+ " added.");
    document.querySelector("#balance2").innerHTML=balance;
}


// MANGO
function add()
{

if(total<=budget)
{   
    budget=balance;
    document.querySelector("#items").innerHTML=++countA;
    total=countA*10;
    document.querySelector("#total").innerHTML=total; 
    budget-= 10;
    document.getElementById("left").innerHTML = balance - total;       
}

else{
    alert("you cant have more fruits boy!");
}

}

function minus()
{
if (countA<=0)
{
alert("you don't have anything to delete boy!");
}
else
{ 
    budget=balance;
    document.querySelector("#items").innerHTML=--countA;
    total=countA*10;
    document.querySelector("#total").innerHTML=total; 
    budget+= 10;
    document.getElementById("left").innerHTML = balance -total;   

}

}
