import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(10)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/);

export const emailSchema = z.string().email();
