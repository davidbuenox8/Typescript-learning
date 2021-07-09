class Coche {
    constructor(public color: string){
    }

    protected honk():void{
        console.log('Broom Broom')
    }

}


class Auto extends Coche {
    constructor(public wheel: number,color: string){
        super(color);
    }
     private drive(): void{
    console.log('Vroom Vroom')
}
startDrivingProcess():void {
    this.drive();
    this.honk();
}
}

const dasAuto = new Auto(4,'orange');
dasAuto.startDrivingProcess();
console.log(dasAuto.color)


//public -> This method can be called any where, any time
//private -> this method can only be called by other methods in THIS class
//protected -> This method can be called by other methods in THIS class, or by other methods in child classes