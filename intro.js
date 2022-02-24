// const { DATE } = require('sequelize/types')
const db = require('./models')



// CREATE

// db.user.create({
    
//         firstName: "Jamel",
//         lastName: "Fadel",
//         age: 31,
//         email: 'itsjamelscott@gmail.com',
//         birthday: new Date()
// })
// .then(createdUser =>{
//     console.log(createdUser)
// })
// .catch(console.log)

async function userCrud (){
    
    try{
        //create
        // const createdUser = await db.user.create({
    
        //     firstName: "Jason",
        //     lastName: "Serafica",
        //     age: 26,
        //     email: 'jason.serfica@generalassemb.ly',
        //     birthday: new Date()
        // })
        // console.log(createdUser.firstName, createdUser.lastName)

        const [newUser, wasCreated] = await db.user.findOrCreate({
            where: {
                firstName: "April"
            },
            defaults: {
                    
                firstName: "April",
                lastName: "Gonzales",
                age: 26,
                email: 'april.gonzales@generalassemb.ly',
                birthday: new Date()
                        
            }
        })
        console.log([newUser, wasCreated])
        console.log(newUser,`this user was created? ${wasCreated}`)

        // //read
        // const foundUser = await db.user.findOne({

        // where: {
        //     firstName: "Jason"
        // }
        // })
        // console.log("foundUser")

        //update
        //update({cols to update}, {where clause})
        // const numRows = await db.user.update({
        //     age: 35
        // }, {
        //     where: {
        //         firstName: "Jamel"
        //     }
        // })
        // console.log(numRows)

        
        //detroy
        // const numDeletedRows = await db.user.destroy({
        //     where: "Weston"
        // })
        // console.log(numDeletedRows)



    } catch (error){
        console.log(error)
    }
   
}
userCrud();

//array/object detructuring
// takes value from an array and give them variable names
// const myNumbers = [0,1,2,10,50,999]
// const [zero, one, two, ten, taco, banana] = myNumbers
// console.log(zero, taco)

// function example() {
//     return ["hello", "banana", "taco"]
// }

// const [stringOne, stringTwo] = example();


// READ
// db.user.findAll()
// .then(foundUser =>{
//     console.log(foundUser)
// })
// // you have to declare an async function to get access to the await keyword
async function findAllUsers(){
    //handle errors with try/catch blocks
    try {
        //triese to run this code -- if there's an error it goes to the catch

        const foundUser = await db.user.findAll()
        console.log(foundUser)
    } catch (error){
        console.log(error)
    }
}

// findAllUsers()
// UPDATE


// DESTROY