import { useRouter } from "next/router";
import { Button } from "../components/ui/button";

export default function TaskDescription() {
  const router = useRouter();
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Task Description</h1>
      <p className="mb-4">Use the selected app to complete navigation tasks, such as searching locations and comparing transport options.</p>
      <Button onClick={() => router.push("/survey-results")} className="w-full">Proceed</Button>
    </div>
  );
}
