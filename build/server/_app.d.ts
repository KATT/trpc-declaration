declare const appRouter: import("@trpc/server").CreateRouterInner<{
    ctx: {
        foo: "bar";
    };
    meta: {};
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}, {
    greeting: import("@trpc/server").BuildProcedure<"query", {
        _config: {
            ctx: {
                foo: "bar";
            };
            meta: {};
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        };
        _meta: {};
        _ctx_in: {
            foo: "bar";
        };
        _ctx_out: {
            foo: "bar";
        };
        _input_in: {
            name?: string | null | undefined;
        } | null | undefined;
        _input_out: {
            name?: string | null | undefined;
        } | null | undefined;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        text: string;
    }>;
    getUser: import("@trpc/server").BuildProcedure<"query", {
        _config: {
            ctx: {
                foo: "bar";
            };
            meta: {};
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        };
        _ctx_in: {
            foo: "bar";
        };
        _ctx_out: {
            foo: "bar";
        };
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: {};
    }, {
        id: string;
        name: string;
    }>;
}>;
export declare type AppRouter = typeof appRouter;
export {};
//# sourceMappingURL=_app.d.ts.map