import { PersonStanding } from "lucide-react";
import Link from "next/link";

export default function MenuTitle() {
  return (
    <Link href="/">
      <h4 className="flex items-center">
        <PersonStanding size={40} className="text-primary" /> UnityWorks
      </h4>
    </Link>
  );
}
