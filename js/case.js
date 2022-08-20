function updateCaseTotalQuantity(isIncrease){
    const numberPlus = document.getElementById('case-number-field');
    const numberPlusString = numberPlus.value;
    const numberPlusValue = parseInt(numberPlusString);
    
    let numberIncreas;
    if(isIncrease === true){
        numberIncreas = numberPlusValue + 1;
    }
    else{
        numberIncreas = numberPlusValue - 1;
    }
    numberPlus.value = numberIncreas;
    return numberIncreas;
}

function updateCaseTotalPrice(newCasenumber){
    const totalCasePrice = newCasenumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = totalCasePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCasenumber = updateCaseTotalQuantity(true);

    updateCaseTotalPrice(newCasenumber);
    getSubtotal();
   
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCasenumber = updateCaseTotalQuantity(false);

    updateCaseTotalPrice(newCasenumber);
    getSubtotal();

})

