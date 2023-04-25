//Given an array of objects, each object representing a person with a name and age property, write a function that returns a new array containing the names of all people who are 18 years old or older.
//const people = [
  //{ name: 'Alice', age: 17 },
 // { name: 'Eunice', age: 22 },
  //{ name: 'Charlie', age: 14 },
 // { name: 'Max', age: 19 },
//];

const Adult = (people) =>{
    return people.filter(person => person.age >= 18).map(person => person.name)
}
// .filter() - used to create an array with all elements that satisfy a given condition
// . map() method is used to extract the names of these people into a new array.
const people = [
{ name: 'Alice', age: 17 },
{ name: 'Eunice', age: 22 },
{ name: 'Charlie', age: 14 },
{ name: 'Max', age: 19 },
];

const nameOfAdults = Adult(people)
console.log(nameOfAdults) 



//Write a function that takes an array of objects, where each object represents a product with a name, price, and category property. The function should return an object that groups the products by their categories, with the category names as keys and the arrays of products as values.
//const products = [
 // { name: 'Laptop', price: 1200, category: 'Electronics' },
  //{ name: 'Shirt', price: 25, category: 'Clothing' },
  //{ name: 'Headphones', price: 80, category: 'Electronics' },
  //{ name: 'Shoes', price: 60, category: 'Clothing' },
//];

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
    ];
    
    
    const ProductCategory = (products) =>{
        const result = {}
        for(let i = 0; i < products.length; i++){
            const { name, price, category} = products[i]
            if(!result[category]){
                result[category] = []
            }
            result[category].push({name, price})
        }
        return result
    }
    
    const groupedProducts = ProductCategory(products)
    
    console.log(groupedProducts)



//Given an array of objects, where each object represents a student with a name and an array of scores,
// write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },

  
];
const getAverageScores = (students) =>{
    const result = []
   for(const student of students){
        const averageScore = student.scores.reduce((total, score) => total + score, 0)/ student.scores.length
        if (averageScore >= 85){
            result.push(student.name)
          
        }
    }

    return result
}

const studentWithHighSchool = getAverageScores(students)

console.log(studentWithHighSchool) 


//Given an object representing a car, with properties for the make, model, year, and a method to display the car's information, 
//write a function that takes the car object and adds a new 
//method to the object called age. The age method should return the current age of the car based on the current year and the car's year property.
// const car = {
//   make: 'Ford',
//   model: 'Ranger',
//   year: 2023,
//   displayInfo: function() {
//     console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
//   },
// };

