declare const appRouter: import("@trpc/server").CreateRouterInner<{
    ctx: {
        user: {
            id: number;
            name: string;
        } | null;
    };
    meta: {};
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}, {
    greeting: import("@trpc/server").BuildProcedure<"query", {
        _config: {
            ctx: {
                user: {
                    id: number;
                    name: string;
                } | null;
            };
            meta: {};
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        };
        _meta: {};
        _ctx_in: {
            user: {
                id: number;
                name: string;
            } | null;
        };
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
    viewer: import("@trpc/server").CreateRouterInner<{
        ctx: {
            user: {
                id: number;
                name: string;
            } | null;
        };
        meta: {};
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }, {
        whoami: import("@trpc/server").BuildProcedure<"query", {
            _config: {
                ctx: {
                    user: {
                        id: number;
                        name: string;
                    } | null;
                };
                meta: {};
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            };
            _ctx_in: {
                user: {
                    id: number;
                    name: string;
                } | null;
            };
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
            _config: {
                ctx: {
                    user: {
                        id: number;
                        name: string;
                    } | null;
                };
                meta: {};
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            };
            _meta: {};
            _ctx_in: {
                user: {
                    id: number;
                    name: string;
                } | null;
            };
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
            user: {
                id: number;
                name: string;
            };
        }>;
    }>;
}>;
export declare type AppRouter = typeof appRouter;
export {};
//# sourceMappingURL=_app.d.ts.map