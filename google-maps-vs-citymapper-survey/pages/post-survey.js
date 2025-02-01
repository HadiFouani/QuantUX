import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import * as XLSX from 'xlsx';
import { v4 as uuidv4 } from 'uuid';

export default function PostSurvey() {
  const router = useRouter();
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

  const [responses, setResponses] = useState(
    categories.reduce((acc, category) => {
      acc[category] = Array(phases.length).fill("");
      return acc;
    }, {})
  );

  const handleChange = (category, index, value) => {
    setResponses((prevResponses) => {
      const newResponses = { ...prevResponses };
      newResponses[category] = [...newResponses[category]];
      newResponses[category][index] = value;
      return newResponses;
    });
  };

  const submitSurvey = async () => {
    try {
      const res = await fetch("/api/saveSurvey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ responses }),
      });
      
      if (res.ok) {
        router.push("/survey-result");
      } else {
        console.error("Error submitting survey");
      }
    } catch (error) {
      console.error("Error saving survey:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Post-Experience Survey</h1>
      <p className="mb-4">Please share your experience using the navigation app by filling in the table below.</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="border border-gray-400 px-4 py-2">Phase</th>
              {phases.map((phase, index) => (
                <th key={index} className="border border-gray-400 px-4 py-2">{phase}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((category, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-400 px-4 py-2 font-bold capitalize">{category}</td>
                {phases.map((_, colIndex) => (
                  <td key={colIndex} className="border border-gray-400 px-4 py-2">
                    <Input 
                      value={responses[category][colIndex]}
                      onChange={(e) => handleChange(category, colIndex, e.target.value)}
                      placeholder="Enter response"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button onClick={submitSurvey} className="w-full mt-4 bg-green-500">Submit</Button>
    </div>
  );
}