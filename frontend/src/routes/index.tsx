import { createFileRoute } from "@tanstack/react-router";

export type SortMode = "Popular" | "New";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return <div className="flex-1">Project S Monorepo</div>;
}
