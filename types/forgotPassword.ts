import { z } from "zod";
import { forgotPasswordValidation } from "@/validation/forgotPasswordValidation";

export interface IForgotPassword
  extends z.infer<typeof forgotPasswordValidation> {}
