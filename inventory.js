class shop {
    constructor() {
        this.items = []
    }

    addItem(name, price, quantity){
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        })
    }

    totalValue(){
        let total = 0;
        
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].price * this.items[i].quantity
            
        }
        return total
    }


    filteredPrice(price){
     
    //     let holder = []
    //     for (let i = 0; i < this.items.length; i++) {
            
    //         if (this.items[i].price >= price) {
    //            holder.push( this.items[i].name)
    //         }
            
    //     }
    //     return holder
    // }

  let holder =  this.items.filter(item => item.price >= price).map(item => item.name)
  return holder

}

     applyDiscount(){
        // let discount = {
        //     name: this.items.name,
        //     price: this.items.price,
        //     quantity: this.items.quantity
        // }

        this.items.map(item => {
    return { name: item.name, quantity: item.quantity, price: item.price * (100 - 120) / 100 };
})
     }
}

let cart = new shop()
cart.addItem('manga', 5000, 30)
cart.addItem('nothing', 3000, 10)
cart.addItem('yuji hoodie', 2000, 10)
console.log(cart);

console.log(cart.totalValue());

console.log(cart.filteredPrice(1000));

console.log(cart.applyDiscount());

