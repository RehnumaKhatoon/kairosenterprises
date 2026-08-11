const {
    sendContactEmail,
} = require("../services/email.service");

const sendContactMessage = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            service,
            message,
        } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required.",
            });
        }

        await sendContactEmail({
            name,
            email,
            phone,
            service,
            message,
        });

        return res.status(200).json({
            success: true,
            message: "Your message has been sent successfully.",
        });
    } catch (error) {
        console.error("Contact email error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to send your message.",
        });
    }
};

module.exports = {
    sendContactMessage,
};