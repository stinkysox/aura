import { createFileRoute } from "@tanstack/react-router";
import { Legal } from "./privacy";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — Aesthesia" }, { name: "description", content: "Terms & conditions." }] }),
  component: () => <Legal title="Terms" />,
});
