document.getElementById("pay").addEventListener("click", function () {
  const totalPrice = document.getElementById("total-price");
  const totalPriceValue = parseFloat(totalPrice.value);
  const totalBill = document.getElementById("total-bill");
  totalBill.innerText = totalPriceValue;
  const discountBill = document.getElementById("discount-bill");
  discountBill.innerText = "I don not want to save ";
  totalPrice.value = "";
});
document.getElementById("discount").addEventListener("click", function () {
  const totalPrice = document.getElementById("total-price");
  const totalPriceValue = parseFloat(totalPrice.value);
  const couponElement = document.getElementById("coupon");
  const couponValue = couponElement.value;
  const totalBill = document.getElementById("total-bill");
  const discountBill = document.getElementById("discount-bill");
  if (couponValue === "R") {
    totalBill.innerText = totalPriceValue;
    const discount = totalPriceValue - (30 / 100) * totalPriceValue;
    discountBill.innerText = discount;
  } else {
    totalBill.innerText = totalPriceValue;
    discountBill.innerText = totalPriceValue;
    alert("Your coupon is not correct");
  }
  totalPrice.value = "";
  couponElement.value = "";
});
