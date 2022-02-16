function getProductId(idName){
    const product = document.getElementById(idName);
    const productNumber = parseFloat(product.value); 
    if(productNumber > 0){
        return productNumber;
    }
    product.value = '';
}

document.getElementById('calculate').addEventListener('click', function(){
   const incomeAmount = getProductId('income-input');
   const foodAmount = getProductId('food-input');
   const rentAmount = getProductId('rent-input');
   const clothesAmount = getProductId('clothes-input');
   // Expenses total  
   const totalCost = foodAmount + rentAmount + clothesAmount;
   if(incomeAmount > totalCost){
        document.getElementById('total-expense').innerText = totalCost;
   } else {
       alert('Please enter a valid number for totalcost');
   }

   // Balance update
   if(incomeAmount > totalCost){
    document.getElementById('balance').innerText = incomeAmount - totalCost;
   } else {
    //    alert('Please input valid number!');
   }
  
    
});



// document.getElementById('calculate').addEventListener('click', function(){
//     const incomeInput = document.getElementById('income-input');
//     const incomeAmount = parseFloat(incomeInput.value);
//     // expenses 
//     const food = document.getElementById('food-input');
//     const foodAmount = parseFloat(food.value);
//     const rent = document.getElementById('rent-input');
//     const rentAmount = parseFloat(rent.value);
//     const clothes = document.getElementById('clothes-input');
//     const clothesAmount = parseFloat(clothes.value);
//     console.log(clothesAmount);
//     costCalculate();
//     balance();
    
// });

/* 
function costCalculate(){
    const food = document.getElementById('food-input');
    const foodAmount = parseFloat(food.value);
    const rent = document.getElementById('rent-input');
    const rentAmount = parseFloat(rent.value);
    const clothes = document.getElementById('clothes-input');
    const clothesAmount = parseFloat(clothes.value);
    const totalCost = foodAmount + rentAmount + clothesAmount;
   return document.getElementById('total-expense').innerText = totalCost;
}



function balance(){
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);
    const totalCost = costCalculate();
    document.getElementById('balance').innerText = incomeAmount - totalCost;

} */