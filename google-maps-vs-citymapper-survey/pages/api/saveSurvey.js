import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { responses } = req.body;
      const phases = [
        "Discovery",
        "Search the destination",
        "Click a method of transport",
        "Select a route",
        "Start the journey",
        "Follow the steps",
        "End the journey",
      ];
      const categories = ["Actions", "User Needs", "Thoughts", "Mindsets Emotions", "Pain Points"];

      const data = [];
      categories.forEach((category) => {
        const row = { Phase: category };
        phases.forEach((phase, index) => {
          row[phase] = responses[category][index];
        });
        data.push(row);
      });

      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Survey Responses");

      const uniqueFileName = `survey_${uuidv4()}.xlsx`;
      const filePath = path.join(process.cwd(), 'public', uniqueFileName);
      XLSX.writeFile(wb, filePath);

      res.status(200).json({ message: "Survey data saved successfully!", file: uniqueFileName });
    } catch (error) {
      res.status(500).json({ message: "Error saving survey data", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
