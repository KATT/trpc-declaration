export declare const trpc: import("@trpc/react/dist/createTRPCReact").CreateTRPCReact<import("@trpc/server").Router<import("@trpc/server").RouterDef<{
    foo: "bar";
}, import("@trpc/server").DefaultErrorShape, {}, {
    greeting: import("@trpc/server").QueryProcedure<import("@trpc/server/dist/core/internals/utils").OverwriteKnown<{
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
        _output_in: {
            text: string;
        };
        _output_out: {
            text: string;
        };
    }>>;
    getUser: import("@trpc/server").QueryProcedure<import("@trpc/server/dist/core/internals/utils").OverwriteKnown<{
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
        _output_in: {
            id: string;
            name: string;
        };
        _output_out: {
            id: string;
            name: string;
        };
    }>>;
}>> & {
    greeting: import("@trpc/server").QueryProcedure<import("@trpc/server/dist/core/internals/utils").OverwriteKnown<{
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
        _output_in: {
            text: string;
        };
        _output_out: {
            text: string;
        };
    }>>;
    getUser: import("@trpc/server").QueryProcedure<import("@trpc/server/dist/core/internals/utils").OverwriteKnown<{
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
        _output_in: {
            id: string;
            name: string;
        };
        _output_out: {
            id: string;
            name: string;
        };
    }>>;
}, unknown>;
//# sourceMappingURL=trpc.d.ts.map