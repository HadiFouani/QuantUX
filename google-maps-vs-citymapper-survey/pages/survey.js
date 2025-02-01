// pages/survey.js
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectItem } from "../components/ui/select";

export default function Survey() {
  const router = useRouter();
  const [appChoice, setAppChoice] = useState("google-maps");
  const [destination, setDestination] = useState("");
  const [transport, setTransport] = useState("");

  const destinations = [
    "L'X Main Building",
    "Amphi Poincaré",
    "RU Magnan Cafeteria",
    "Lozère RER B Station",
    "Massy-Palaiseau Train Station",
  ];

  const transportModes = ["Walking", "Biking", "Bus", "Train", "Car"];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Choose Your Navigation App & Destination</h1>
      <p className="mb-4">
        Please select which navigation app you are going to use and choose a destination and method of transport. 
        Once selected, you will leave this survey to proceed with the navigation steps you have chosen. 
        After completing your journey, you must return to this survey to provide feedback on your experience.
      </p>
      
      <Card className="mb-4">
        <CardContent>
          <label className="block mb-2">Select the app you are using:</label>
          <Select value={appChoice} onChange={(value) => setAppChoice(value)}>
            <SelectItem value="google-maps">Google Maps</SelectItem>
            <SelectItem value="citymapper">Citymapper</SelectItem>
          </Select>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <label className="block mb-2">Choose a destination:</label>
          <Select value={destination} onChange={(value) => setDestination(value)}>
            {destinations.map((place) => (
              <SelectItem key={place} value={place}>{place}</SelectItem>
            ))}
          </Select>
        </CardContent>
      </Card>
      
      <Card className="mb-4">
        <CardContent>
          <label className="block mb-2">Select a method of transportation:</label>
          <Select value={transport} onChange={(value) => setTransport(value)}>
            {transportModes.map((mode) => (
              <SelectItem key={mode} value={mode}>{mode}</SelectItem>
            ))}
          </Select>
        </CardContent>
      </Card>
      
      <p className="mb-4">
        To proceed, open your chosen navigation app and start your journey. Once you have completed it, return to this survey to provide your feedback.
      </p>
      
      <Button onClick={() => window.location.href = appChoice === "google-maps" ? "https://www.google.com/maps" : "https://citymapper.com"} className="w-full mb-4">
        Open Selected App
      </Button>

      <div className="mt-4"></div>
      
      <Button onClick={() => router.push("/post-survey")} className="w-full bg-green-500">
        Return & Proceed to Feedback
      </Button>
    </div>
  );
}