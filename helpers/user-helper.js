var db=require('../config/connection')
var collection=require('../config/dbcollections')
var bcrypt=require('bcrypt')
const { USER_COLLECTION } = require('../config/dbcollections')
const { response } = require('../app')




module.exports={
    doSignUp:(userData)=>{
        // console.log('mongo',userData); 
return new Promise( async(resolve,reject)=>{
    userData.Password=await bcrypt.hash(userData.Password,10);
    // console.log('hash',userData);
    db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((result)=>{
     
          resolve(data.ops[0])
          console.log("heloooooooooooooooooooooooooooooooooooo",userData);
})
})
    },

//usser login 
doLogin:(userData)=>{
    return new Promise (async (resolve,reject)=>{
let response={}
        let userfound=await db.get().collection(USER_COLLECTION).findOne({email:userData.email})
        if(userfound)
        {
            console.log("hereeeeeeeeeee");
            bcrypt.compare(userData.Password,userfound.Password).then((status)=>{
                console.log("okkokokokookoko");
                if(status)
                {
                    response.userfound=userfound
                    response.status=true
                    resolve(response)
                                  
                console.log("login successfully");
                }
                else{
                    console.log("login failed");
                    resolve({status:false})
                }
            })
        }
        else
        {
            console.log("login failed");
            resolve({status:false})
        }
        
    })
}




}
