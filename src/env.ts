import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  NEXT_PUBLIC_API_URL: z.string().default("http://localhost:3000/api"),
  SEGMENT_APP_KEY: z.string(),
});

export const ENV = EnvSchema.parse(process.env);
