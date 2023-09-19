import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/lib/graphql/schema.graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/lib/graphql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
