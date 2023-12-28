document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calculation-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    calculate()
  })
})

function calculate () {
  // Get the user inputs
  const totalCost = parseFloat(document.getElementById('total-cost').value)
  const advancePayment = parseFloat(document.getElementById('advance-payment').value)
  const numberOfInstallments = parseInt(document.getElementById('installments-number').value, 10)

  // Calculate the amounts
  const amountPerInstallment = (totalCost - advancePayment) / numberOfInstallments

  // Update the results on the page
  document.getElementById('installment-amount').textContent = amountPerInstallment.toFixed(2)
}
