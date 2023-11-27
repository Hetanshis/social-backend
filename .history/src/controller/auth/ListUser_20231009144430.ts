import { Request, Response } from "express";
import prisma from "../../config/prisma";



const List_User = async(req:Request, res:Response) => {
    try{

        const data = await prisma.user.findMany()
        if(!data){
            return res.status(200).json({status:false, message:"User not get Lists"})
        }

        // const templatePath = path.join(
        //     __dirname,
        //     "../",
        //     "resources",
        //     "users.ejs"
        //   );

        //   const emailtemplate = await ejs.renderFile(templatePath, {
        //  users: users
        //   });
  
          console.log(data, "data")
        if (req.headers["content-type"] === "application/json") {
            return res.status(200).json({status:true, message:"User Get Lists successfully", data})
          } else {
            return res.render("users", {
              status: false,
             data
            });
            // const html = await ejs.renderFile('users' /*{data goes here if necessary}*/)
            // res.send(html)   
          }

       
    }catch(err:any){
        return res.status(500).json({status:false, message:err.message})
    }
} 

export default List_User