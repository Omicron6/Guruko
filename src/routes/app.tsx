import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/app-sidebar";

export const Route = createFileRoute("/app")({
  component: () => (
    <AppShell>
      <Outlet />
    </AppShell>
  ),
});