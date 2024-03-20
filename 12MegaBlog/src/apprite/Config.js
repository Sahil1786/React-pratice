import conf from "../conf/confi";

import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{

    Client =new Client();
    Databases;
    bucket;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(appwriteProjectId);
        this.databases=new Databases(this.Client);
        this.bucket=new Storage(this.Client);


    }

    async createPost({title,slug,content,featuredImage,status,userId}){

        try {
            
            return await this.databases.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
try {
    return await this.databases.updateDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
            title,
            content,
            featuredImage,
            status
        }
    )
} catch (error) {
    console.log("Appwrite service :: updatePost :: error", error);
}


    }


    async deletePost({slug}){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug

            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
        }
    }

async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            slug

        )
    } catch (error) {
        console.log("Appwrite service :: getPost :: error", error);
        return false;
    }
}

async  getPosts(queries=[Query.equal("status","active")]){
   try {
    
    return await this.databases.listDocuments(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        queries
       
    )
   } catch (error) {
    console.log("Appwrite service :: getPosts :: error", error);
    return false;
   }
}

// file uplod services  

async uplodFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service :: uplodFile :: error", error);
        return false
    }
}

async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
        )
        return;
    } catch (error) {
        console.log("Appwrite service :: uplodFile :: error", error);
        return false;
    }
}


     getFilePrevieewa(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
     }
}







const service=new Service()

export default service