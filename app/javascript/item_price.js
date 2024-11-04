const price = () => {

  const priceInput = document.getElementById("item-price");
  priceInput.addEventListener("input", () => {
    const inputValue = priceInput.value;
    const addTaxDom = document.getElementById("add-tax-price");
    const tax = Math.floor(inputValue * 0.1); 
    addTaxDom.innerHTML = tax;    
    const profitDom = document.getElementById("profit");
    profitDom.innerHTML = inputValue - tax; 

  });
  
};

window.addEventListener("turbo:load", price);
window.addEventListener("turbo:render", price);

