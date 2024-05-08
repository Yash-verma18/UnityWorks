"use client";
import React from "react"; // Ensure React is in scope when using JSX
import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

export default function MainMenu() {
  // Function to clear local storage and potentially redirect the user
  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent the default link behavior
    localStorage.clear(); // Clear the local storage
    window.location.href = "/"; // Redirect to the homepage or login page
  };

  return (
    <nav className="bg-muted overflow-auto p-4 flex flex-col">
      <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </div>
      <header className="py-4 grow">
        <MenuItem href="/dashboard">My Dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </header>
      <footer className="flex gap-2 items-center ">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            YV
          </AvatarFallback>
        </Avatar>
        <Link className="hover:underline" href="/" onClick={handleLogout}>
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
