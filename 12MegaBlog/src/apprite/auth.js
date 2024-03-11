import conf from "../conf/confi";

import { Client, Account, ID } from "appwrite";

export class AuthService{
    clint= new Client();
    account;

    constructor (){
        this.clint
        .setEndpoint(conf.appwriteUrl)
        .setProject(appwriteProjectId);
        this.account=new Account(this.clint);
    }

    async createAccount({email,password,name}){
        try {
          const userAccount=  await this.account.create(ID.unique(), email,password,name);

          if(userAccount){
          return this.login({email,password});

          }else{
            return userAccount;
          }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
           return this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
           return await  this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }
    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logOut :: error", error);
        }
    }
}

const authService=new AuthService();

export default authService;