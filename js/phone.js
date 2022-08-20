
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
    
    // const phonePrice = getPrice('phone-total');
    // const casePrice = getPrice('case-total');
    const subtotalPrice = phonepriceValue + casepriceValue;
    const subTotal = document.getElementById('sub-total');
    const subTotalString = subTotal.innerText;
    const subtotalValue = parseFloat(subTotalString);
    subTotal.innerText = subtotalPrice;
    return subtotalPrice;
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

// subtotal calculation
// function getPrice(priceValue){
//     let price = getElementById(priceValue);
//     let totalPriceString = price.innerText;
//     let priceValue = parseInt(totalPriceString);
//     // console.log(price);
//     // return price;
// }
// document.getElementById(phoneTotal).addEventListener('click', function(){
//     const phoneprice = document.getElementById('phone-total');
// const phonetotalPriceString = phoneprice.innerText;
// const phonepriceValue = parseInt(phonetotalPriceString);
// const caseprice = document.getElementById('case-total');
// const casetotalPriceString = caseprice.innerText;
// const casepriceValue = parseInt(casetotalPriceString);

// // const phonePrice = getPrice('phone-total');
// // const casePrice = getPrice('case-total');
// const subtotalPrice = phonepriceValue + casepriceValue;
// const subTotal = document.getElementById('sub-total');
// const subTotalString = subTotal.innerText;
// const subtotalValue = parseFloat(subTotalString);
// subTotal.innerText = subtotalPrice;
// })

// tax calculation

const tax = getSubtotal();
console.log(tax);
const taxcalculation = (tax/15)*100;
const taxField = document.getElementById('tax-amount');
const taxString = taxField.innerText;
const taxValue = parseFloat(taxString);
taxField.innerText = taxcalculation;