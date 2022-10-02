import { CreateNextContextOptions } from "@trpc/server/adapters/next";
export declare function createContext(opts: CreateNextContextOptions): Promise<{
    user: {
        id: number;
        name: string;
    } | null;
}>;
export declare type Context = Awaited<ReturnType<typeof createContext>>;
//# sourceMappingURL=context.d.ts.map