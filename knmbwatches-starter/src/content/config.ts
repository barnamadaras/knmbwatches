import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const watches = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    reference: z.string().optional(),
    year: z.number().int().optional(),
    condition: z.string().optional(),
    set: z.string().optional(),
    case_size_mm: z.number().optional(),
    material: z.string().optional(),
    dial: z.string().optional(),
    bracelet: z.string().optional(),
    wrist_fit_cm: z.number().optional(),
    price_huf: z.number().optional(),
    currency: z.string().default("HUF"),
    status: z.enum(["available", "sold"]).default("available"),
    images: z.array(z.string()).default([]),
    updated: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { blog, watches };