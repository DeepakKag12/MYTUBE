import {v2 as cloudinary} from "cloudinary";
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API, 
  api_secret: process.env.CLOUDINARY_SECRET 
});
const uploadOnCloudinary=async(localFilePath)=>{
  try {
    if(!localFilePath) return null;
    // file is stored in temp file name 
    const response=await cloudinary.v2.uploader.upload(localFilePath,{resource_type:"auto"});
    console.log("file is uploaded on cloudinary",response.url);
    fs.unlinkSync(localFilePath);
    return response;
    
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;    
  }
}       
export  {uploadOnCloudinary};   
  



 


