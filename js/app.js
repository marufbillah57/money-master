
// event handler calculataion
document.getElementById('calculate-button').addEventListener('click', function(){

	balanceUpdate();
	
});

// item id get
function clickItem(itemId){
	const itemInput = document.getElementById(itemId);
	const itemAmount = parseFloat(itemInput.value);
	itemInput.value = '';
	
	
	if(isNaN(itemAmount) || itemAmount < 0){
		alert('Please enter a valid number');
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
		alert('Please enter a valid number');
	}

}


// saveing amount get and show
document.getElementById('save-button').addEventListener('click', function(){
    const saveAmountText = document.getElementById('saving-amount');
    const remainAmountText = document.getElementById('remaining-balance');
    const incomeAmount = clickItem('income-input');
    const saveAmount = (incomeAmount * 10) / 100;
    saveAmountText.innerText = saveAmount;
});