class Vehicle {
  constructor(name,model,speed) {
    this.name = name;
    this.model = model;
    this.speed = speed;
  }
  showSpeed() {
    return `speed : ${this.speed}`;
  }
}
class Motor extends Vehicle{
  constructor(){
    super();
  }
  showMotor(){
    console.log(this.name)
  }
  acceler(){
    console.log(this.speed*2)
  }
}
const car1 = new Vehicle();
car1.name= 'bmw';
car1.model='2018';
car1.speed=100;
console.log(car1.showSpeed());
const motor1 = new Motor();
motor1.name='honda';
motor1.speed=200;
motor1.showMotor();
motor1.acceler()
