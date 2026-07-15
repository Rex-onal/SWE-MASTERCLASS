import { Metadata } from "next";
import AIEngineeringPage from "@/components/AIEngineering/AIEngineeringPage";

export const metadata: Metadata = {
  title: "AI Engineering | SWE-MASTERCLASS",
  description: "Master AI Engineering: Four phases from zero Python to production AI agents. Build chatbots, RAG systems, and autonomous multi-agent networks.",
};

export default function Page() {
  return <AIEngineeringPage />;
}
