import { CreateNextContextOptions } from "@trpc/server/adapters/next";
export async function createContext(opts: CreateNextContextOptions) {
  const user = opts.req.headers.authorization
    ? {
        id: 1,
        name: "KATT",
      }
    : null;
  return {
    user,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
