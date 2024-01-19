const postInvite = async (req,res) => {
    const {targetMailAddress} = req.body;
    return res.send('Controller is working')
} 

export default postInvite