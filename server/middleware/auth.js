import { clerkClient } from "@clerk/express";  

export const auth = async (req,res,next)=> {
    try {
        const {userId,has}=req.auth();
        const hasPremiumedPlan=await has({plan:"premium"});
    } catch (error) {
        
    }
}