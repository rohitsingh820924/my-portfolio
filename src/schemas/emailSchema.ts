import { z } from "zod";

export const emailfirstnameValidatin = z
.string()
.min(2, "Username must be at least 2 characters")
.max(20, "Username must be no more then 20 characters")

export const emaillastnameValidatin = z
.string()
.min(2, "Username must be at least 2 characters")
.max(20, "Username must be no more then 20 characters")

export const emailemailValidatin = z
.string().email({message : "invalid emial address"})

export const emailphoneValidatin = z
.number()
.min(10, "Username must be at least 2 number")

export const emailcountrycodeValidatin = z
.number()

export const emailSchema = z.object({
    firstName: emailfirstnameValidatin,
    lastName: emaillastnameValidatin,
    email: emailemailValidatin,
    phone: emailphoneValidatin,
    countryCode: emailcountrycodeValidatin,
})