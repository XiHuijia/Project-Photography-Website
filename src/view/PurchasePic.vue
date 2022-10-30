<template>
    <HeadLine/>
    <div id = "left">
    <h2 id = "select1"><strong>Select Payment Method </strong></h2>
    <h3 id = "select2">Select your payment method</h3>
    <div id = 'payment1'> Paypal</div>
    <div id = 'payment2'> Debit Or Credit Card </div>
    <br><br><br>
    <h3 id = "enter">Enter your card details</h3>
    
    <h4 id = "cardholder">Cardholder name</h4>
    <div id = 'name'> name </div><br><br>

    <div id = "card1">
      <h4 id = "cardnumber">Card number</h4>
      <div id = 'number'> number </div>
    </div>

    <div id = "card2">
      <h4 id = "expiration">Expiration date</h4>
      <div id = 'date'> date </div>
    </div><br><br><br>

    <h4 id = "security">Security code</h4>
    <div id = 'code'> code </div><br><br>

    <h4 id = "billing">Billing address</h4>
    <div id = 'address'> address </div></div>

    <div id = "right">
      <h2 id = "summary"><strong>Summary </strong></h2>
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
  text-align: left;
  margin-bottom: 5px;
}

#select2{
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
}

#payment1{
  border: 1px black solid;
  font-size: 20px;
  width: 200px;
  margin-right: 20px;
  float: left;
}
#payment2{
  border: 1px black solid;
  font-size: 20px;
  width: 200px;
  float: left
}
#enter{
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
}
#cardholder{
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px
}
#name{
  border: 1px black solid;
  font-size: 20px;
  width: 420px;
  float: left;
  color:white
}
#cardnumber{
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px
}
#number{
  border: 1px black solid;
  font-size: 20px;
  width: 200px;
  float: left;
  color:white
}
#expiration{
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px
}
#date{
  border: 1px black solid;
  font-size: 20px;
  width: 200px;
  float: left;
  color:white
}
#card1{
  float:left;
  margin-right: 20px;
}

#card2{
  float: left;
}

#security{
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px
}

#code{
  border: 1px black solid;
  font-size: 20px;
  width: 200px;
  float: left;
  color:white
}

#billing{
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px
}
#address{
  border: 1px black solid;
  font-size: 20px;
  width: 420px;
  float: left;
  color:white
}
#left{
  float: left;
  margin-right: 300px;
}
#right{
  float: left;
  text-align: left;
}
</style>
