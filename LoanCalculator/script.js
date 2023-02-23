function calulateLoan() {
  const loanAmountValue = document.getElementById('loan-amount').value;

  const interestRateValue = document.getElementById('interest-rate').value;

  const monthToPayValue = document.getElementById('month-to-pay').value;

  let interest =
    (loanAmountValue * (interestRateValue * 0.01)) / monthToPayValue;

  const monthlyPayment = (loanAmountValue / monthToPayValue + interest).toFixed(
    2
  );

  document.getElementById(
    'payment'
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
