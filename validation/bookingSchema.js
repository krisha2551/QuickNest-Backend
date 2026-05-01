import Joi from "joi";

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM"
];

// CREATE BOOKING
export const createBookingSchema = Joi.object({
  serviceId: Joi.string().required().messages({
    "any.required": "Service ID is required",
  }),

  providerId: Joi.string().required().messages({
    "any.required": "Provider ID is required",
  }),

  bookingDate: Joi.date().required().messages({
    "any.required": "Booking date is required",
  }),

  timeSlot: Joi.string().valid(...timeSlots).required().messages({
    "any.only": "Invalid time slot",
    "any.required": "Time slot is required",
  }),

  notes: Joi.string().max(200).optional(),
});


