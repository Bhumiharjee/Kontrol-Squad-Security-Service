const Message = require("../db/models/message");

module.exports = submitForm = async (req, res) => {
    const { name, email, services, message } = req.body;

    if (!services) {
        const type = "career";
        const newMessage = new Message({
            name,
            email,
            message,
            type
        })
        await newMessage.save();
        res.status(200).redirect("/home");
    } else {
        const type = "contact";
        const newMessage = new Message({
            name,
            email,
            services,
            message,
            type
        })
        await newMessage.save();
        res.status(200).redirect("/home");
    }
}