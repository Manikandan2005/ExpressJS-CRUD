import { findIndex } from "../common/helpers.js"
const users = [{
    id:1,
    user:"manikandan",
    email:"manismvr321@gmail.com",
    phone:"7484849848"
}]

const getUsers = (req,res)=>{
    try{
        res.status(200).send({
            message:"User data fetched sucessfully",
            users
        }
        )
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"Internal server error"
        })
    }
}

const getUsersById = (req,res)=>{
    try{
        const {id} = req.params
        let index = findIndex(users,id)
        if(index!==-1)
        {
            res.status(200).send({
                message:"User id fetched successfully",
                users:users[index]
            })
        }
        else{
            res.status(400).send({
                message:'Invalid User ID'
            })
        }
    }
    catch(error){

    }
}


const addUsers = (req,res)=>{
    try{
        let id = users.length?users[users.length-1].id+1:1
    
        req.body.id = id

        users.push(req.body)

        res.status(200).send({
            message:"user added successfully"
        })
    }
    catch(error){
        res.status(500).send({
            message:"Internal server error"
        })
    }
}


const deleteUser = (req,res)=>{
    try{
        let {id} = req.params
        
        let index = findIndex(users,id)
        console.log(index)
        if(index!==-1)
        {
            users.splice(index,1)
            res.status(200).send({
                message:"User deleted Successfully",
                users
            })
        }
        else{
            res.status(400).send({
                message:"User Id Doesnt Exist"
            })
        }
    }
    catch(error){
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}


const editUser = (req,res)=>{
    try{
        let {id} = req.params
        let index = findIndex(users,id)
        if(index !==-1)
        {
            users.splice(index,1,req.body)
            res.status(200).send({
                message:"User Edited Successfully",
                users
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User"
            })
        }
    }
    catch(error){
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}
export default {
    getUsers,
    getUsersById,
    addUsers,
    deleteUser,
    editUser
}