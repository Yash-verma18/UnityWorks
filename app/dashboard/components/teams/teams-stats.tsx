import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cm from "@/public/images/cm.jpg";

export default function TeamsStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Team Leaders</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Team Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center"></CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecks />
            <span>Support Ticket Resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">Line Graph</CardContent>
      </Card>
    </>
  );
}
