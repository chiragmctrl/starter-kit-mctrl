import { exampleRouter } from "./routers/example";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  example: exampleRouter
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
