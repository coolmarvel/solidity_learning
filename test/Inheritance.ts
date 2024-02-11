import { ethers } from "hardhat";

describe("Inheritance Test", () => {
  let animal: any;
  let dog: any;
  let cat: any;
  let hipo: any;
  let son1: any;
  let son2: any;

  let owner: any;

  before(async () => {
    const [_owner] = await ethers.getSigners();
    owner = _owner;

    const Animal = await ethers.getContractFactory("Animal", owner);
    const Dog = await ethers.getContractFactory("Dog", owner);
    const Cat = await ethers.getContractFactory("Cat", owner);
    const Hipo = await ethers.getContractFactory("Hipo", owner);
    const Son1 = await ethers.getContractFactory("Son1", owner);
    const Son2 = await ethers.getContractFactory("Son2", owner);

    animal = await Animal.deploy(4);
    dog = await Dog.deploy();
    cat = await Cat.deploy();
    hipo = await Hipo.deploy(3);
    son1 = await Son1.deploy();
    son2 = await Son1.deploy();
  });

  it("Animal", async () => {
    console.log("dog.age: ", await dog.getNumberOfLegs());
    await dog.moveOneYear();
    console.log("dog.age + 1: ", await dog.getNumberOfLegs());

    console.log("dog.originalAnimal: ", await dog.originalAnimal());
  });

  it("Overloading", async () => {
    console.log("Animal.animal: ", await animal.animal());
    console.log("dot.animal: ", await dog.animal());
  });

  it("MultiInheritance", async () => {
    console.log("son1.f: ", await son1.f());
    console.log("son2.f: ", await son2.f());
  });
});
