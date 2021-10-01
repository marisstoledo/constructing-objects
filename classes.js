class Animal {
    constructor(name, species, age){
this.name = name;
this.species = species;
this.age = age;
    }
    getNameAndSpeciesAndAge(){
        let bio = `${this.name} is a ${this.species} and is ${this.age} years old`;
        return bio;
    
    }
 }

 let lion = new Animal ("lion", 'cat','16')
 let trout = new Animal ("trout", 'fish', '22')
 let chimp = new Animal ("chimp", 'monkey', '82')

 console.log("The name is:", lion.name)
console.log("This species is:", cat.species)
console.log("They are:", 16.age)

console.log(lion.getNameAndSpeciesAndAge());

console.log("The name is:", trout.name)
console.log("This species is:", fish.species)
console.log("They are:", 22.age)

console.log(trout.getNameAndSpeciesAndAge());

console.log("The name is:", chimp.name)
console.log("This species is:", monkey.species)
console.log("They are:", 82.age)

console.log(chimp.getNameAndSpeciesAndAge());