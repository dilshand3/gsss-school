import { StudentResult } from "../model/studentResult.model.js";
import XLSX from "xlsx";
import fs from "fs/promises"; 
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadResult = async (req, res) => {
    const { className, section, year } = req.body;
    try {
        if (!className || !year || !section) {
            return res.status(400).json({ error: "All fields required" });
        }

        const filePath = req.file.path;  
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(worksheet);

        for (const row of data) {
            const rollNumber = row.RollNo.toString();
            const subjects = {};
            let totalMarks = row.Total || 0;
            let resultStatus = row.Result || "Pending";

            Object.keys(row).forEach(key => {
                if (key !== "RollNo" && key !== "Total" && key !== "Result") {
                    subjects[key] = parseFloat(row[key]) || 0;
                }
            });

            const resultEntry = { year: parseInt(year), subjects, totalMarks, resultStatus };

            const student = await StudentResult.findOne({ rollNumber, className, section });

            if (student) {
                const existingIndex = student.result.findIndex(r => r.year === parseInt(year));

                if (existingIndex !== -1) {
                    student.result[existingIndex] = resultEntry;
                } else {
                    student.result.push(resultEntry);
                }

                await student.save();
            } else {
                await StudentResult.create({
                    rollNumber,
                    className,
                    section,
                    result: [resultEntry]
                });
            }
        }

        await fs.unlink(filePath);

        res.status(200).json({ message: "Data processed successfully!" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "Something went wrong, please check the console." });
    }
};

export { uploadResult };
