import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/').createRoute({
  component: HomePage,
});

function HomePage() {
  return <div className="p-2">Hello from HomePage!</div>;
}
