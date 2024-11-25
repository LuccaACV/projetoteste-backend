import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaAccommodationRepository } from "@/repositories/prisma/prisma-accommodations-repository";
import { CreateAccommodationUseCase } from "@/use-cases/create-accommodation";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(1, "Name is required"),
  location: z.string().min(1, "Location is required"),
  summary: z.string().min(1, "Summary is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive("Price must be a positive number"),
  isAvailable: z.boolean(),
});


export async function createAccommodation(request: FastifyRequest, reply: FastifyReply) {

  const validation = bodySchema.safeParse(request.body);

  if (!validation.success) {
    return reply.status(400).send({
      message: "Validation failed",
      errors: validation.error.errors,
    });
  }

  const { name, location, summary, description, price, isAvailable } = validation.data;

  try {
    const prismaAccommodationRepository = new PrismaAccommodationRepository();
    const createAccommodationUseCase = new CreateAccommodationUseCase(prismaAccommodationRepository);

    const newAccommodation = await createAccommodationUseCase.execute({
      name,
      location,
      summary,
      description,
      price,
      isAvailable,
    });

    return reply.status(201).send(newAccommodation);
  } catch (error) {
    console.error("Error creating accommodation:", error);

    return reply.status(500).send({
      error: "Could not create accommodation",
    });
  }
}