import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EmpoyeesStats from "./components/employees/employees-stats";
import TeamsStats from "./components/teams/teams-stats";

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
      <TabsContent value="teams">
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
}
