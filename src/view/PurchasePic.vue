<template>
    <HeadLine/>
    <div id = "left">
    <h2 id = "select1"><strong>Select Payment Method </strong></h2>
    <h3 id = "select2">Select your payment method</h3>
    <button id = 'payment1' onclick="selectFunction1()"> Paypal</button>
    <button id = 'payment2' onclick="selectFunction2()"> Debit Or Credit Card </button>
    <br><br><br>
    <h3 id = "enter">Enter your card details</h3>

    <label for="holderName" id = "hn">Cardholder name</label><br>
    <input type="text" id="holderName"><br><br>
      
    <div id = "card1">
      <label for="cardNumber" id="cn">Card number</label><br>
      <input type="text" id="cardNumber"><br>
    </div>
      
    <div id = "card2">
      <label for="expirationDate" id="ed">Expiration date</label><br>
      <input type="text" id="expirationDate"><br>
    </div><br><br><br><br>

    <div id = "card3">
      <label for = "securityCode" id="sc">Security code</label><br>
      <input type = "text" id = 'securityCode'><br><br>
    </div><br><br><br><br>

    <div id = "card4">
      <label for = "billingAddress" id="ba">Billing address</label><br>
      <input type = "text" id = 'billingAddress'><br><br>
    </div>
    </div>

    <div id = "right">
      <h2 id = "summary"><strong>Summary </strong></h2>
      <button id="checkout">Checkout</button>
    </div>

</template>

<script>
import HeadLine from '@/components/HeadLine.vue'

export default{
    name: "PurchasePic",
    components:{
        HeadLine,
    },
}

// document.getElementById("payment1").addEventListener('click', selectFunction1)

// document.getElementById("payment2").addEventListener('click', selectFunction2)

// function selectFunction1() {
  // document.getElementById("payment1").innerHTML = "selected";
// }

// function selectFunction2() {
  // document.getElementById("payment2").innerHTML = "selected";
// }
</script>

<style>
#PurchasePic {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 10px;
  margin-left: 50px;
}
#select1{
  font-family: elvetica;
  text-align: left;
  margin-bottom: 5px;
}

#select2{
  font-family: elvetica;
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
}

#payment1{
  background-color: white;
  border: 1px black solid;
  color:black;
  font-size: 20px;
  text-align: center;
  width: 200px;
  margin-right: 20px;
  float: left;
}
#payment1:hover{
  background-color: black;
  border: 1px black solid;
  color: white;
  font-size: 20px;
  text-align: center;
  width: 200px;
  margin-right: 20px;
  float: left;
}
#payment2{
  background-color: white;
  border: 1px black solid;
  font-size: 20px;
  text-align: center;
  width: 200px;
  float: left
}
#payment2:hover{
  background-color: black;
  border: 1px black solid;
  color: white;
  font-size: 20px;
  text-align: center;
  width: 200px;
  float: left;
}
#enter{
  font-family: elvetica;
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
}

#hn{
  font-family: elvetica;
  font-size: 20px;
}

#holderName{
  width: 200px;
  font-size: 20px;
}
#card1{
  float:left;
  margin-right: 20px;
}
#cn{
  font-size: 20px;
}
#cardNumber{
  width: 200px;
  font-size: 20px;
}

#card2{
  float: left;
}
#ed{
  font-size: 20px;
}
#expirationDate{
  width: 200px;
  font-size: 20px;
}

#card3{
  float: left;
}
#sc{
  font-size: 20px;
}
#securityCode{
  width: 200px;
  font-size: 20px;
}

#card4{
  float: left;
}
#ba{
  font-size: 20px;
}
#billingAddress{
  width: 430px;
  font-size: 20px;

}

#left{
  float: left;
  margin-right: 300px;
}
#right{
  float: left;
  text-align: left;
}

#checkout{
  background-color: black;
  color:white;
  font-size: 20px;
  text-align: center;
  width: 200px;
  height: 60px;
  float: left
}
#checkout:hover{
  background-color: rgb(34, 33, 33);
  color:white;
  font-size: 20px;
  text-align: center;
  width: 200px;
  height: 60px;
  float: left
}
</style>
