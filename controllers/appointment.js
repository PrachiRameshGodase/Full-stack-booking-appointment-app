const path = require("path")
const booking = require("../models/booking")

exports.getbooking = async (req, res, next) => {
    try {
        // const Booking=await booking.findAll();
        // res.json(Booking)
        res.sendFile(path.join(__dirname, "../views/appointment.html"))
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })
    }
}

exports.getPreviousBookings = async (req, res, next) => {
    try {
        const appointments = await booking.findAll();
        console.log(appointments)
        res.status(200).json({ appointments: appointments })

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: 'false' })
    }
}

exports.postAddbooking = async (req, res, next) => {
    try {
        console.log("post request is succesfully")
        console.log(req.body)
        console.log('hii')

        const name = req.body.name;
        const email = req.body.email;
        const phonenumber = req.body.phonenumber;

        const appointmentDetails = await booking.create({
            name: name,
            email: email,
            phonenumber: phonenumber
        })

        console.log(req.body)

        res.status(200).json({ message: "appointment booked successfully", appointmentDetails: appointmentDetails })

    } catch (err) {
        res.status(500).json({success:'false',error:err})
    }

}

exports.Editbooking = async (req, res) => {

    const { id } = req.params;
const { name, email, phonenumber } = req.body;
console.log(req.body)
try {
    const Booking = await booking.findByPk(id);
    if (!Booking) {
        res.status(404).json({ error: "Booking not found" });
        return;
    }

    Booking.name = name;
    Booking.email = email;
    Booking.phonenumber = phonenumber;

    await Booking.save();

    res.json({ message: "Booking updated successfully" });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
}

}

exports.deletebooking = async (req, res) => {
    try {
        const { id } = req.params;
        const Booking = await booking.findByPk(id);

        if (!Booking) {
            res.status(404).json({ error: "booking is not found" })
            return;
        }

        await Booking.destroy()
        res.json({ message: "Booking deleted successfully" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
}