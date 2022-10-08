export declare const isAuthed: import("@trpc/server").MiddlewareFunction<{
    _config: import("@trpc/server/dist/core/internals/config").RootConfig<{
        ctx: {
            user: {
                id: number;
                name: string;
            } | null;
        };
        meta: {};
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {
        user: {
            id: number;
            name: string;
        } | null;
    };
    _input_out: unknown;
    _input_in: unknown;
    _output_in: unknown;
    _output_out: unknown;
    _meta: {};
}, {
    _config: import("@trpc/server/dist/core/internals/config").RootConfig<{
        ctx: {
            user: {
                id: number;
                name: string;
            } | null;
        };
        meta: {};
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {
        user: {
            id: number;
            name: string;
        };
    };
    _input_in: unknown;
    _input_out: unknown;
    _output_in: unknown;
    _output_out: unknown;
    _meta: {};
}>;
export declare const publicProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server/dist/core/internals/config").RootConfig<{
        ctx: {
            user: {
                id: number;
                name: string;
            } | null;
        };
        meta: {};
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {
        user: {
            id: number;
            name: string;
        } | null;
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
    _meta: {};
}>;
export declare const authedProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server/dist/core/internals/config").RootConfig<{
        ctx: {
            user: {
                id: number;
                name: string;
            } | null;
        };
        meta: {};
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _meta: {};
    _ctx_out: import("@trpc/server").Overwrite<{
        user: {
            id: number;
            name: string;
        } | null;
    }, {
        user: {
            id: number;
            name: string;
        };
    }>;
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}>;
export declare const router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server/dist/core/internals/config").RootConfig<{
    ctx: {
        user: {
            id: number;
            name: string;
        } | null;
    };
    meta: {};
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, TProcRouterRecord>;
//# sourceMappingURL=trpc.d.ts.map