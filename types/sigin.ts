import { signInValidation } from "@/validation/siginValidation";
import { z } from "zod";

export interface ILogin extends z.infer<typeof signInValidation> {
  // Login can have additional fields if needed
}
