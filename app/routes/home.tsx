import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forged Hand Studios" },
    { name: "description", content: "Welcome to Forged Hand Studios!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return {};
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome />;
}
