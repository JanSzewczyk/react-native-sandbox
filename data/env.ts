import { createEnv } from "@t3-oss/env-core";
// import { z } from "zod";

export const env = createEnv({
  // Only variables with this prefix are allowed on the client
  clientPrefix: "EXPO_PUBLIC_",
  client: {
    // EXPO_PUBLIC_FEATURE_FLAG_X: z.enum(["true", "false"]).transform((value) => value === "true")
  },
  // Values come from process.env; Expo inlines EXPO_PUBLIC_* during bundling
  runtimeEnv: {
    // EXPO_PUBLIC_FEATURE_FLAG_X: process.env.EXPO_PUBLIC_FEATURE_FLAG_X
  },
  emptyStringAsUndefined: true
});
