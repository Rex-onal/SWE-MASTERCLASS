import { redirect } from "next/navigation";
import { WEEKS } from "@/lib/curriculum";

interface WeekPageProps {
  params: {
    weekId: string;
  };
}

export default function WeekPage({ params }: WeekPageProps) {
  const weekId = parseInt(params.weekId, 10);
  const week = WEEKS.find((w) => w.id === weekId);

  if (week && week.modules.length > 0) {
    redirect(`/module/${week.modules[0].id}`);
  } else {
    redirect("/");
  }
}
