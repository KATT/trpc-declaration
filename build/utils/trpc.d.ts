export declare const trpc: import("@trpc/react/dist/createTRPCReact").CreateTRPCReact<import("@trpc/server").CreateRouterInner<import("@trpc/server/dist/core/internals/config").RootConfig<{
    ctx: {
        user: {
            id: number;
            name: string;
        } | null;
    };
    meta: {};
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    greeting: import("@trpc/server").BuildProcedure<"query", {
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
        _ctx_out: {
            user: {
                id: number;
                name: string;
            } | null;
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
    viewer: import("@trpc/server").CreateRouterInner<import("@trpc/server/dist/core/internals/config").RootConfig<{
        ctx: {
            user: {
                id: number;
                name: string;
            } | null;
        };
        meta: {};
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>, {
        whoami: import("@trpc/server").BuildProcedure<"query", {
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
        }, {
            id: number;
            name: string;
        } | null>;
        edit: import("@trpc/server").BuildProcedure<"mutation", {
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
            _input_in: {
                name: string;
            };
            _input_out: {
                name: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            name: string;
            id: number;
        }>;
    }>;
}>, unknown>;
//# sourceMappingURL=trpc.d.ts.map