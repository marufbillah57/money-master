// function getProductId(idName){
//     const product = document.getElementById(idName);
//     const productNumber = parseFloat(product.value);
//     // clear input field 
//     product.value = '';
//     if(productNumber > 0){
//         return productNumber;
//     }
   
// }

// document.getElementById('calculate-button').addEventListener('click', function(){
//    const incomeAmount = getProductId('income-input');
//    const foodAmount = getProductId('food-input');
//    const rentAmount = getProductId('rent-input');
//    const clothesAmount = getProductId('clothes-input');
//    // Expenses total  
//    const totalCost = foodAmount + rentAmount + clothesAmount;
//    if(incomeAmount > totalCost){
//         document.getElementById('total-expense').innerText = totalCost;
//    } else {
//        alert('Please enter a valid number for totalcost');
//    }

//    // Balance update
//    if(incomeAmount > totalCost){
//     document.getElementById('balance').innerText = incomeAmount - totalCost;
//    } else {
//     //    alert('Please input valid number!');
//    }
  
    
// });

// document.getElementById('save-button').addEventListener('click', function(){
//     const saveAmountText = document.getElementById('saving-amount');
//     const remainAmountText = document.getElementById('remaining-balance').innerText;
//     const incomeAmount = getProductId('income-input');
//     const saveAmount = (incomeAmount * 10) / 100;
//     saveAmountText.innerText = saveAmount;
// });
   



document.getElementById('calculate-button').addEventListener('click', function(){
	// const incomeInput = document.getElementById('income-input');
	// const incomeAmount = parseFloat(incomeInput.value);
	// const foodInput = document.getElementById('food-input');
	// const foodAmount = parseFloat(foodInput.value);
	// const rentInput = document.getElementById('rent-input');
	// const rentAmount = parseFloat(rentInput.value);
	// const clothesInput = document.getElementById('clothes-input');
	// const clothesAmount = parseFloat(clothesInput.value);

	balanceUpdate();
	
});

// item id get
function clickItem(itemId){
	const itemInput = document.getElementById(itemId);
	const itemAmount = parseFloat(itemInput.value);
	itemInput.value = '';
	
	
	if(isNaN(itemAmount) || itemAmount < 0){
		alert('Please')
	} else {
		return itemAmount;
	}
	
}

// Total cost 
function totalCost(){
	const foodAmount = clickItem('food-input');
	const rentAmount = clickItem('rent-input');
	const clothesAmount = clickItem('clothes-input');
	const costTotal = foodAmount + rentAmount + clothesAmount;
	return costTotal;
}

// show expense
function totalExpenseShow(){
	const totalExpenses = totalCost();
	document.getElementById('total-expense').innerText = totalCost();
}

// Balance 
function balanceUpdate(){
	const incomeAmount = clickItem('income-input');
	const totalExpenses = totalCost();
	if(incomeAmount > totalExpenses){
		document.getElementById('total-expense').innerText = totalExpenses;
		document.getElementById('balance').innerText = incomeAmount - totalExpenses;
	} else {
		alert('Please enter');
	}

}


// saveing amount get and show
document.getElementById('save-button').addEventListener('click', function(){
    const saveAmountText = document.getElementById('saving-amount');
    const remainAmountText = document.getElementById('remaining-balance').innerText;
    const incomeAmount = clickItem('income-input');
    const saveAmount = (incomeAmount * 10) / 100;
    saveAmountText.innerText = saveAmount;
});