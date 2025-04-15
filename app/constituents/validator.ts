import { z } from "zod";

export const ConstituentInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
});
