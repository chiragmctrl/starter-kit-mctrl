import { chatRouter } from "./routers/chatRouter";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  chat: chatRouter
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
