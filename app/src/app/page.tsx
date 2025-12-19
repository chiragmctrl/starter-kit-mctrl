"use client";
import { api } from "@/trpc/react";

export default function Home() {
  const res = api.example?.hello.useQuery({ name: "Mission ctrl" });
  // const [{ data, fetching, error }] = useQuery<TestQuery, TestQueryVariables>({
  //   query: Test,
  //   requestPolicy: "cache-and-network"
  // });

  return <div className="flex min-h-screen text-6xl items-center justify-center font-sans">{res.data?.greeting}</div>;
}
