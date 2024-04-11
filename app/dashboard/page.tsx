import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EmpoyeesStats from "./components/employees-stats";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employee</TabsTrigger>
        <TabsTrigger value="teams">Teams</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmpoyeesStats />
      </TabsContent>
      <TabsContent value="teams">teams stats view</TabsContent>
    </Tabs>
  );
}
