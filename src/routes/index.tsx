import { FileRoute } from "@tanstack/react-router";

async function fetchPost() {
  return fetch("https://jsonplaceholder.typicode.com/todos/2").then((res) =>
    res.json()
  ) as Promise<{ title: string }>;
}

export const Route = new FileRoute('/').createRoute({
  component: HomePage,
  loader: async () => {
    return {
      post: await fetchPost(),
    };
  },
});

function HomePage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="p-2">
      Hello from HomePage!
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}
