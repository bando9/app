// class Product{
//   // (name, price, stock)
//   construction(name){
//     if(this.name === Product ){
//       console.log('ini tidak bisa di instantiate')
//     }
//     this.name = name;
//   }

//   constructor(price){
//     if(this.price === Product ){
//       console.log('ini tidak bisa di instantiate')
//     }
//     this.price = price;
//   }

//   constructor(stock){
//     if(this.stock === Product ){
//       console.log('ini tidak bisa di instantiate')
//     }
//     this.stock = stock;
//   }
// }

class PaymentMethod {
  pay() {
    console.log("membayar");
  }
}

class CreditCard extends PaymentMethod {
  pay() {
    console.log("membayar dengan kartu kredit");
  }
}

class PayPal extends PaymentMethod {
  pay() {
    console.log("membayar dengan paypal");
  }
}

class BankTransfer extends PaymentMethod {
  pay() {
    console.log("membayar dengan transfer bank");
  }
}

const credit = new CreditCard();

credit.pay();
