
function updateCase(isIncrease){
    const phoneInputField = document.getElementById('phone-number-field');
    const phoneInputFieldString = phoneInputField.value;
    const phoneInputFieldValue = parseInt(phoneInputFieldString);
    let totalPhone;
    if(isIncrease === true){
        totalPhone = phoneInputFieldValue + 1
    }
    else{
        totalPhone = phoneInputFieldValue - 1
    }
    phoneInputField.value = totalPhone;
    return totalPhone;

}
function updatephonePrice(totalPhone){
    const phoneTotalPrice = totalPhone * 1219;
    const phontTotalElement = document.getElementById('phone-total');
    phontTotalElement.innerText = phoneTotalPrice;
}

function getSubtotal(){
    const phoneprice = document.getElementById('phone-total');
    const phonetotalPriceString = phoneprice.innerText;
    const phonepriceValue = parseInt(phonetotalPriceString);
    const caseprice = document.getElementById('case-total');
    const casetotalPriceString = caseprice.innerText;
    const casepriceValue = parseInt(casetotalPriceString);
    
    const subtotalPrice = phonepriceValue + casepriceValue;
    const subTotal = document.getElementById('sub-total');
    const subTotalString = subTotal.innerText;
    const subtotalValue = parseFloat(subTotalString);
    subTotal.innerText = subtotalPrice;

    const taxField = document.getElementById('tax-amount');
    const taxcalculation = (subtotalValue*15)/100;
    taxField.innerText = taxcalculation;

    const grandTotal = document.getElementById('final-total');
    const grandTotalString = grandTotal.innerText;
    const grandTotalValue = parseFloat(grandTotalString);
    const grand = subtotalValue + taxcalculation;
    grandTotal.innerText = grand;
    
    }
    
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const totalPhone = updateCase(true);
    updatephonePrice(totalPhone);
    getSubtotal();

});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const totalPhone = updateCase(false);
    updatephonePrice(totalPhone);
    getSubtotal();
   
})