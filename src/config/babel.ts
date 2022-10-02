import path from "path";
import { TransformOptions } from "@babel/core";

export function babelDefault(config: TransformOptions) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      [
        "mock-imports",
        {
          redirects: [
            {
              pattern: "meteor/",
              location: path.resolve(__dirname, "../mocks"),
            },
          ],
        },
      ],
    ],
  };
}
