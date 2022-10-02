/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { z } from "zod";
import { publicProcedure, authedProcedure, router } from "./trpc";

const appRouter = router({
  greeting: publicProcedure
    // This is the input schema of your procedure
    // 💡 Tip: Try changing this and see type errors on the client straight away
    .input(
      z
        .object({
          name: z.string().nullish(),
        })
        .nullish(),
    )
    .query(({ input }) => {
      // This is what you're returning to your client
      return {
        text: `hello ${input?.name ?? "world"}`,
        // 💡 Tip: Try adding a new property here and see it propagate to the client straight-away
      };
    }),
  viewer: router({
    whoami: publicProcedure.query((opts) => {
      return opts.ctx.user;
    }),
    edit: authedProcedure
      .input(
        z.object({
          name: z.string(),
        }),
      )
      .mutation(({ ctx, input }) => {
        return {
          ...ctx,
          ...input,
        };
      }),
  }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;
