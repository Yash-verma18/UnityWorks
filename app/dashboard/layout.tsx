import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <div className="bg-muted overflow-auto p-4"> Side panel </div>
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome Back, Tom!</h1>
        {children}
      </div>
    </div>
  );
}
