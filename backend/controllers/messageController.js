export const sendMessage = async(req,res)=>{
    try {
        const senderId=req.id;
        const receiverId= req.params.id;
    } catch (error) {
        console.log(error)
    }
}