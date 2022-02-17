function getProductId(idName){
    const product = document.getElementById(idName);
    const productNumber = parseFloat(product.value);
    // clear input field 
    product.value = '';
    if(productNumber > 0){
        return productNumber;
    } else {
       
    }
   
}

document.getElementById('calculate-button').addEventListener('click', function(){
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

document.getElementById('save-button').addEventListener('click', function(){
    const saveAmountText = document.getElementById('saving-amount').innerText;
    const remainAmountText = document.getElementById('remaining-balance').innerText;
    const incomeAmount = getProductId('income-input');
    
});


