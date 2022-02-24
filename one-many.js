const db = require("./models")





async function relationshipCrud(){
    try{
        //create
        // //find User
        
        const foundUser = await db.user.findOne({
            where:{
            firstName: "Jamel"
            }
        });
        console.log(foundUser)
        // //create a pet
        const petMongoose = await foundUser.createPet({

            name: "Soma",
            description: "literally the greatest",

        })
        // console.log(petMongoose)
        //read
        //fooInstance.getBar()
        // const mongooseUser = await petMongoose.getUser()
        // console.log(mongooseUser)
        //FooInstance.countBar()
        const petCount = await foundUser.countPets()
        console.log(petCount)
        //read

        //EAGER LOADING
        const eagerBeaver = await db.user.findOne({
            where: {
                firstName: "Jason"
            },
            include: [db.pet] //supply an array of models
        })


console.log(eagerBeaver.pets)
    } catch(err){
        console.log(err)
    }

}

relationshipCrud();