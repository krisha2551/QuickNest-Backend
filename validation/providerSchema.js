import Joi from "joi";

export const createProviderSchema = Joi.object({
  document: Joi.string().required().messages({
    "any.required": "Document is required",
  }),

  experience: Joi.number().min(0).required().messages({
    "number.base": "Experience must be a number",
    "any.required": "Experience is required",
  }),

  services: Joi.array().items(Joi.string()).min(1).required().messages({
    "any.required": "At least one service is required",
  }),
});