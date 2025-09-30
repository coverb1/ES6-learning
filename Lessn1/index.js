// const names="bruce"
// const age=22
// console.log(`${names} is the best player in ther world with ${age}`)

// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// function capitalisation(){
//     for(let day of days){
//        let results= day.split('')
//        let final=results[0].toUpperCase()
//        let nuuuu=final+day.slice(1,day.length)
//        console.log(nuuuu)
       
//     }
// }
// capitalisation()

// function restparameters(...names) {
//     for(let key of names){
//         console.log("hello"+names)
//     }
// }
// console.log("bruce","cover","amanda")

// const fruits = ["apples", "bananas", "pears"];
// const vegetables = ["corn", "potatoes", "carrots"];
// const produce = [];
// const final=[...fruits,...vegetables]
//  produce.push(final)

// console.log(produce);

// let numbers=["mucyo","bruce",]
// let empty=[]
// function checkall() {
//     for(let num of numbers){
//       empty.push(num)
//     }
//     return empty
// }
// console.log(checkall())

function sum(...numbers) {
    let count=0
    for(let num of numbers){
count+=num
    }
    return count
}
console.log(sum(1,2,4))