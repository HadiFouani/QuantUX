import { useRouter } from "next/router";
import { Button } from "../components/ui/button";

export default function SurveyIntro() {
  const router = useRouter();
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Survey Introduction</h1>
      <p className="mb-4">
        Welcome to our user experience study! This survey is designed to evaluate how students interact with navigation apps such as Google Maps and Citymapper. 
        You will be asked to complete a navigation task and share your experience.
      </p>
      <p className="mb-4">
        The survey consists of three phases:
        <ul className="list-disc ml-6 mt-2">
          <li>Pre-survey questions to understand your background and navigation habits.</li>
          <li>A navigation task where you will choose an app and complete a real-world journey.</li>
          <li>A post-survey feedback session where you will describe your experience using the selected app.</li>
        </ul>
      </p>
      <p className="mb-4">
        Your feedback is invaluable in helping us improve navigation solutions for students. Please take your time and provide honest answers. 
        The survey should take about 10-15 minutes to complete.
      </p>
      <Button onClick={() => router.push("/survey-questions")} className="w-full">Next</Button>
    </div>
  );
}