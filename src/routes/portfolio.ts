import { Hono } from "hono";
import { z } from "zod";

const portfolio = new Hono();

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  message: z.string().min(10).max(1000),
});

// Get portfolio statistics
portfolio.get("/stats", (c) => {
  return c.json({
    projects: 7,
    experiences: 6,
    skills: 16,
    lastUpdated: new Date().toISOString(),
  });
});

// Contact form submission
portfolio.post("/contact", async (c) => {
  try {
    const body = await c.req.json();
    const validated = contactSchema.parse(body);

    // TODO: Send email or save to database
    console.log("Contact form submission:", validated);

    return c.json({
      success: true,
      message: "Message received successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return c.json(
        {
          success: false,
          errors: error.errors,
        },
        400
      );
    }
    throw error;
  }
});

export default portfolio;
