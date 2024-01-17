import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute("/about").createRoute({
  beforeLoad: () => ({
    title: "About Page",
  }),
  component: AboutPage,
  loader: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await res.json();
  },
});

function AboutPage() {
  const loaderData = Route.useLoaderData();
  console.log("loaderData -->", loaderData);

  return <div className="p-2">Hello from AboutPage!</div>;
}
