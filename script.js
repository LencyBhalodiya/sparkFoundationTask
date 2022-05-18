const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const overlay = document.querySelector('.overlay');
const menu = document.querySelector(".burger-menu");
const menuLink = menu.childNodes;

const burgerClick = () => {
  header.classList.toggle("menu-clicked");
    if (!overlay.classList.contains('fade-in')) {
      overlay.classList.add('fade-in')
      overlay.classList.remove('fade-out')
      menu.classList.add('fade-in')
      menu.classList.remove('fade-out')
    } else {
      overlay.classList.add('fade-out')
      overlay.classList.remove('fade-in')
      menu.classList.add('fade-out')
      menu.classList.remove('fade-in')
    }
}

const menuClick = () => {
  if (header.classList.contains('menu-clicked')) {
    burgerClick()
  }
}

burger.addEventListener("click",() => burgerClick(), false);

menuLink.forEach(link => {
  link.addEventListener('click', ()=> menuClick())
})

 // lency bhalodiya gripmay22 project

 function sendMoney(){
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
 var enterSName = document.getElementById("enterSName").value;
  var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
       alert("Insufficient Balance.")
    }
 else {
       var findUserBankAccount = enterName + "BankBalance";
      
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Successful Transaction !!  
       $${enterAmount} is sent to ${enterName}@email.com.`)
 
       // transaction history 
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSName}@email.com
  to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
    }
 }