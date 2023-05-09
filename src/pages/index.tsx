import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) return <div>Thanks for being a user, {user.name}.</div>;

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
