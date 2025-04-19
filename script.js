// 1) Create a Car class with properties make, model, and year, then make instance of electric car which have battery level


class Car {
    constructor(marke, model, year){
        this.marke = marke
        this.model = model
        this.year = year

    }
    getInfo(){
        console.log(`Car: ${this.marke} ${this.model} ${this.year}`);
        
    }


}


const car1 = new Car("porsche", "911", "1965")
car1.getInfo()


class ElectricCar extends Car {
    constructor(marke, model, year, batteryLevel){
        super(marke, model, year)
        this.batteryLevel = batteryLevel
    }
    getBatteryLevel(){
        console.log(`Battery level: ${this.batteryLevel}`);
    }

    getInfoFull(){
        console.log(`Car: ${this.marke} ${this.model} ${this.year} Battery level: ${this.batteryLevel}`);
    }

}

const electricCar1 = new ElectricCar("BYD", "Tang", "2024", "80%")  
electricCar1.getInfoFull()       


// 2) Create a Library class that stores a list of books (as an array) which have following methods addBook(), removeBook(), listBooks(). listBooks should have array of objects with following properties: [
// {
// author: 'George Orwell',
// book: 'Nineteen Eighty-Four',
// year: 1948,
// }
// ]

class Library {
    
    books = []
    
    addBook(author, book, year){
        this.books.push({author, book, year})
    }
    removeBook(book){
        this.books = this.books.filter(b => b.book !== book)
    }
    listBooks(){
        console.log(this.books);
    }
}
const library = new Library()
library.addBook("George Orwell", "Nineteen Eighty-Four", 1948)
library.addBook("J.K. Rowling", "Harry Potter and the Philosopher's Stone", 1997)
library.addBook("J.R.R. Tolkien", "The Hobbit", 1937)
library.listBooks()
library.removeBook("Nineteen Eighty-Four")
library.listBooks()

// 3) Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.

class Employee {
    constructor(name, houarsWorked, houarsRate){
        this.name = name
        this.houarsWorked = houarsWorked
        this.houarsRate = houarsRate
    }
    calculateSalary(){
        console.log(`salary: ${this.name} $${this.houarsWorked * this.houarsRate}`);
        
    }
}

const employee1 = new Employee("elene", 48, 20)
employee1.calculateSalary()

// 4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()


class ShoppingCart {
    #items = []
  
    #addLog(operation, itemData) {
      const log = {
        operation,
        ...itemData,
        date: new Date().toISOString()
      }
      console.log("addLog", log);
      
    }
  
    addItem(name, price, quantity ) {
      this.#items.push({ name, price, quantity })
      this.#addLog("ADD_ITEM", { name, price, quantity })
    }
  
    deleteItem(name) {
      const initialLength = this.#items.length
      this.#items = this.#items.filter(item => item.name !== name)
      if (this.#items.length < initialLength) {
        this.#addLog("DELETE_ITEM", { name })
      }
    }
  
    updateItem(name, price = null, quantity = null) {
      const item = this.#items.find(item => item.name === name)
      if (!item) return
  
      if (price !== null) item.price = price
      if (quantity !== null) item.quantity = quantity
  
      this.#addLog("UPDATE_ITEM", { name, price: item.price, quantity: item.quantity })
    }
  
    calculateTotal() {
      const total = this.#items.reduce((sum, item) => {
        return sum + item.price * item.quantity
      }, 0)
      this.#addLog("CALCULATE_TOTAL", { total })
      return total
    }
  
    showCart() {
      console.log("showCard", this.#items)
    }
  }

  const cart = new ShoppingCart()

cart.addItem("Laptop", 1200, 1)
cart.addItem("Mouse", 25, 2)
cart.updateItem("Mouse", 30)
cart.deleteItem("Laptop")
console.log("fullPrice", cart.calculateTotal())
cart.showCart()

// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars. getAllCars should be array of objects with following properties: [
// {
// year: 2010 // use random year from 2010 to 2024 using math.random
// model: 'Ferrari',
// price: 350000
// }
// ]


class CarFactory {
    #cars = [   ]

    #generateRandomYear() {
        return Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010
      }
    #logCars (operation, carData){
        const infocar = {
            operation,
            ...carData,
            year: this.#generateRandomYear(),
            date: new Date().toISOString()
        }

       console.log("infocar", infocar);
       
    }

    addCar(name, model,  price) {
        this.#cars.push({name, model,  price})
        this.#logCars("AddCar", {name, model,  price})
    }

    deleteCar(name) {
       const carslength = this.#cars.length
       this.#cars = this.#cars.filter(car => car.name !== name)
       if (this.#cars.length < carslength ) {
        this.#logCars("DelateCar", {name})
        
       }
    }

    updateCar(name, model = null,  price= null){
        const carupdate = this.#cars.find(car => car.name === name)
       if(!carupdate){
        return
       }
       if (model !== null) {
        carupdate.model = model
       }
      
       if(price !== null){
        carupdate.price = price
       }
       this.#logCars("UpdateCar", {name, model, price})

    }

    getAllCars() {
        console.log("getAllCars", this.#cars);
    }
}

const carfactory1 = new CarFactory()
carfactory1.addCar("mercedes", "S-Class",  80000)
carfactory1.addCar("dodge", "Charger",  30000)
carfactory1.addCar("ferrari", "488",  350000)
carfactory1.updateCar("ferrari", "F8",  400000)
carfactory1.deleteCar("dodge")
carfactory1.getAllCars()

// 6) Create a class rectangle that receives width and height and add this methods getArea(), getPerimeter(), isSquare()


class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
}

getArea(){
    return this.width * this.height
}
getPerimeter(){
    return 2 * (this.width + this.height)
}
isSquare(){
    return this.width === this.height
}
}

const rectangle1 = new Rectangle(5, 10)
console.log("Area:", rectangle1.getArea());
console.log("Perimeter:", rectangle1.getPerimeter());
console.log("Is square:", rectangle1.isSquare());





// 7) Create a Class Inventory that holds a list of items, Each item has name, stock, price Methods: addItem(), updateStock(name, quantity), checkAvailability(name), calculateValue()



class Inventory{
    #items = []
    
    #addInvent(operation, itemData){
        const invetlog ={
            operation,
            ...itemData,
            date: new Date().toISOString()
        
        }
        console.log("addInvent", invetlog);
        
    }

    addItem(name, stock, price){
        this.#items.push({name, stock, price})
        this.#addInvent("AddItem", {name, stock, price})
    }
    
    updateStok(name, quantity = null){
        const item = this.#items.find(item => item.name === name)
        if(!item) return
        if(quantity !== null){
            item.quantity = quantity
        }
        this.#addInvent("UpdateStock", {name, quantity})
    }

    checkAvailability(name){
        const item = this.#items.find(item => item.name === name)
        if(!item) return false
        return item.stock > 0
    }

    calculateValue(){
        const total = this.#items.reduce((sum, item) => {
            return sum + item.price * item.stock
        }, 0)
        this.#addInvent("CalculateValue", {total})
        return total
    }

    getAllItems(){
        console.log("getAllItems", this.#items);
    }
}


const inventory = new Inventory()
inventory.addItem("apple", 50, 15)
inventory.addItem("egg", 20, 25)

inventory.updateStok("apple", -5)
inventory.updateStok("egg", -20)
inventory.checkAvailability("egg")
inventory.checkAvailability("apple")
inventory.calculateValue()
inventory.getAllItems()



