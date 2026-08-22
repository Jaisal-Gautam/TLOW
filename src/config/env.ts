import dotenv from "dotenv";
import z from "zod";

dotenv.config();

const envSchema = z.object({
    PORT: z.coerce.number("PORT ERROR").min(1).max(65535),
    DATABASE_URL: z.string("DATABASE URL ERROR")
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
    throw new Error("ENV Validation ERROR");
}

const env = result.data;

export const PORT = env.PORT;
export const DATABASE_URL = env.DATABASE_URL;