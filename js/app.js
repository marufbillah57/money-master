

document.getElementById('calculate').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = parseFloat(incomeInput.value);
    // expenses 
    const food = document.getElementById('food-input');
    const foodAmount = parseFloat(food.value);
    const rent = document.getElementById('rent-input');
    const rentAmount = parseFloat(rent.value);
    const clothes = document.getElementById('clothes-input');
    const clothesAmount = parseFloat(clothes.value);
    console.log(clothesAmount);
    balanceCalculate();
    
});


function balanceCalculate(){
    const food = document.getElementById('food-input');
    const foodAmount = parseFloat(food.value);
    const rent = document.getElementById('rent-input');
    const rentAmount = parseFloat(rent.value);
    const clothes = document.getElementById('clothes-input');
    const clothesAmount = parseFloat(clothes.value);
    const totalCost = foodAmount + rentAmount + clothesAmount;
    document.getElementById('total-expense').innerText = totalCost;
}