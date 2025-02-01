import { useRouter } from "next/router";
import { Button } from "../components/ui/button";

export default function SurveyResult() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Survey Submission</h1>
      <p className="mb-4">Thank you for participating in our survey. Your responses have been successfully recorded.</p>
      <p className="mb-4">Would you approve the use of your responses for educational and research purposes?</p>
      
      <div className="flex gap-4">
        <Button onClick={() => alert("Thank you for approving data usage!")} className="w-full bg-blue-500">Approve</Button>
        <Button onClick={() => alert("Your response has been recorded without data usage.")} className="w-full bg-red-500">Decline</Button>
      </div>

      <div className="mt-6">
        <Button onClick={() => router.push("/")} className="w-full bg-gray-500">Return to Home</Button>
      </div>
    </div>
  );
}
