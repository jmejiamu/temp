import { z } from "zod";
import { registrationValidation } from "@/validation/registrationValidation";

export interface IRegistration extends z.infer<typeof registrationValidation> {}
