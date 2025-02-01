import { useRouter } from "next/router";
import { Button } from "../components/ui/button";

export default function Home() {
  const router = useRouter();
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Google Maps vs. Citymapper UX Study</h1>
      <p className="mb-4">This study evaluates the usability of Google Maps and Citymapper for navigating IP Paris campus.</p>
      <Button onClick={() => router.push("/survey-intro")}>Start Survey</Button>
    </div>
  );
}
