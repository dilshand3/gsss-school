import { Feedback } from "../model/feedback.model.js";

const shareFeedback = async (req, res) => {
    const { name, number, message } = req.body;
    try {
        if (!name || !number || !message) {
            return res.status(400).json({ success: false, message: "all filed required" });
        }
        const feedback = await Feedback.create({
            name,
            number,
            message
        })

        if (!feedback) {
            return res.status(400).json({ success: false, message: "feedback didn't created" });
        }
        res.status(200).json({ success: true, message: "feedback created successfully", data: feedback })
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "something went wrong! Please check the console" })
    }
}


export { shareFeedback }