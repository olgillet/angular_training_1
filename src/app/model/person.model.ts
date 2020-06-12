export class Person{

    protected Id;
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public getLastName(): string{
        return this.lastName;
    }
    public setLastName(lastName: string ){
        this.lastName = lastName;
    }
    public getFirstName(): string{
        return this.firstName;
    }
    public setFirstName(firstName: string){
        this.lastName = firstName;
    }
    public getName(): string{
        return this.firstName + ' ' + this.lastName;
    }
    public getAge(): number{
        return this.age;
    }
    public setAge(age: number){
        this.age = age;
    }
}