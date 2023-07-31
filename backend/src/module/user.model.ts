import { model,Schema } from "mongoose";

export interface User{
    id:string;
    provider: string;
    email: string;
    name: string;
    photoUrl: string;
    firstName: string;
    lastName: string;
    Token: string;
    password:string;
}

export const userSchame=new Schema<User>({
    email:{type:String,required:true},
    name:{type:String,required:true},
    provider:{type:String,required:true},
    photoUrl:{type:String},
    firstName:{type:String},
    lastName:{type:String},
    password:{type:String},
},
{
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
})


export const UserModel= model<User>('user',userSchame);