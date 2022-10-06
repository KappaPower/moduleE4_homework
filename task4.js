function Electric(works){
    this.works = works
}

function Lamp(name, power){
    this.name = name
    this.powerVt = power
}

function Computer(name, type, power){
    this.name = name
    this.type = type
    this.powerVt = power
}

Electric.prototype.switch = function (){
    if(this.works){
        this.works === false
        console.log(`${this.name} выкл`)
    }
    else{
        this.works ===true
        console.log(`${this.name} вкл`)
    }
}

Electric.prototype.getPower = function (){
    console.log(`${this.name} потребляет ${this.powerVt}`)
}

Lamp.prototype = new Electric(true)
Computer.prototype = new Electric(true)
Lamp.prototype.info = function (){
    if (this.works)
        console.log(`${this.name}, вкл, энергопотребление = ${this.powerVt / 1000} кВт/час`)
    else
        console.log(`${this.name}, выкл, энергопотребление = ${this.powerVt / 1000} кВт/час`)
}


const lampOne = new Lamp("Первая лампа", 60)
const lampTwo = new Lamp("Вторая лампа", 95)

const compOne = new Computer('Первый компьютер', 'ПК', 100)
const compTwo = new Computer('Второй компьютер', 'Ноутбук', 80)

console.log(lampOne.works)
lampOne.switch()
lampTwo.switch()
lampOne.info()
compTwo.getPower()
compOne.getPower()
lampOne.switch()
lampOne.info()
lampOne.switch()
lampOne.info()