document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;
   

//update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotoal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotoal;


    //update account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;


    //clear deposit input field
    depositInput.value = ''; 
});

//handle withdraw  event handler
document.getElementById('witdraw-button').addEventListener('click', function(){
    const witdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = witdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText)
    console.log(newWithdrawAmount)

    //set withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawText = withdrawTotal.innerText; 
    const previousWithdrawTotal = parseFloat(previouswithdrawText);

    const neeWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = neeWithdrawTotal;

    //update balance
    const balaceTotal = document.getElementById('balance-total');
    const previousBalanceText = balaceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balaceTotal.innerText = newBalanceTotal

    // clear withdraw
    witdrawInput.value = '';
})