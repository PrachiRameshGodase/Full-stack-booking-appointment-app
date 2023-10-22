
const booking=require("../models/booking")

exports.getbooking= async (req,res,next)=>{
    try{
        const bookings=await booking.findAll();
        res.json(bookings)
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
}

// exports.createbooking=async (req,res,next)=>{
//     try{
//         const {name,email,phone}=req.body;
//         const bookings=await req.user.createbooking({name, email,phone});
//         res.json(bookings)
//     }catch(error){
//         console.log(error)
//         res.status(500).json({error:"Internal server error"})
//     }
// }

exports.postAddbooking=(req,res,next)=>{
    // console.log(req,"post request is succesfully")
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    booking.create({
        name:name,
        email:email,
        phonenumber:phonenumber
    }).then(result=>{
        console.log("Booking added")
        res.redirect('/')
    }).catch(err=>{
        console.log(err)
    })
}

exports.Editbooking=async(req,res)=>{
    
    try{
        const {id}=req.params;
        const {name,email,phonenumber}=req.body;
        const bookingss=await booking.findByPk(id)

        if(!bookingss){
            res.status(404).json({error:"booking is not found"})
            return
        }
        bookingss.name=name;
        bookingss.email=email;
        bookingss.phonenumber=phonenumber;
        await bookingss.save()
        res.json(bookingss);
    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
    }
}

exports.deletebooking=async(req,res)=>{
try{
    const {id}=req.params;
    const bookings=await booking.findByPk(id);

    if(!bookings){
        res.status(404).json({error:"booking is not found"})
        return;
    }

    await bookings.destroy()
    res.json({message:"Booking deleted successfully"})
}catch(err){
    console.log(err)
    res.status(500).json({error:"Internal server error"})
}
}