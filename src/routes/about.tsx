import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/about').createRoute({
  component: AboutPage,
});

function AboutPage() {
  return <div className="p-2">Hello from AboutPage!</div>;
}
