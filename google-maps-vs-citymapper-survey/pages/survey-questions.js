import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectItem } from "../components/ui/select";
import { Input } from "../components/ui/input";

export default function SurveyQuestions() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("never");
  const [frequency, setFrequency] = useState("rarely");
  const [preferredApp, setPreferredApp] = useState("none");
  const [importantFeature, setImportantFeature] = useState("accuracy");

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Pre-Survey Questions</h1>
      <Card className="mb-4">
        <CardContent>
          <label className="block mb-2">What is your name?</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <label className="block mb-2">How old are you?</label>
          <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" />
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <label className="block mb-2">Have you used navigation apps before?</label>
          <Select value={experience} onChange={(value) => setExperience(value)}>
            <SelectItem value="never">Never</SelectItem>
            <SelectItem value="sometimes">Sometimes</SelectItem>
            <SelectItem value="often">Often</SelectItem>
          </Select>
        </CardContent>
      </Card>
      
      <Card className="mb-4">
        <CardContent>
          <label className="block mb-2">How often do you use navigation apps?</label>
          <Select value={frequency} onChange={(value) => setFrequency(value)}>
            <SelectItem value="rarely">Rarely</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="daily">Daily</SelectItem>
          </Select>
        </CardContent>
      </Card>
      
      <Card className="mb-4">
        <CardContent>
          <label className="block mb-2">Which navigation app do you use most frequently?</label>
          <Select value={preferredApp} onChange={(value) => setPreferredApp(value)}>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="google-maps">Google Maps</SelectItem>
            <SelectItem value="citymapper">Citymapper</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </Select>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent>
          <label className="block mb-2">What is the most important feature in a navigation app?</label>
          <Select value={importantFeature} onChange={(value) => setImportantFeature(value)}>
            <SelectItem value="accuracy">Accuracy</SelectItem>
            <SelectItem value="real-time">Real-time updates</SelectItem>
            <SelectItem value="ease-of-use">Ease of use</SelectItem>
            <SelectItem value="transport-options">Diversity of transport options</SelectItem>
          </Select>
        </CardContent>
      </Card>

      <Button onClick={() => router.push("/survey")} className="w-full">Next</Button>
    </div>
  );
}
