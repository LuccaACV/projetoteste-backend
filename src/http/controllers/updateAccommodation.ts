import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaAccommodationRepository } from "@/repositories/prisma/prisma-accommodations-repository";
import { UpdateAccommodationUseCase } from "@/use-cases/update-accommodation";
import { z } from "zod";

const paramsSchema = z.object({
    id: z.string().uuid(), 
  });

const bodySchema = z.object({
  price: z.number().positive("Price must be a positive number"),
});

export async function updateAccommodation(
  request: FastifyRequest,
  reply: FastifyReply
) {
  
  const paramsValidation = paramsSchema.safeParse(request.params);

  if (!paramsValidation.success) {
    return reply.status(400).send({
      message: 'Invalid ID parameter',
      errors: paramsValidation.error.errors,
    });
  }

  const { id } = paramsValidation.data;

  const bodyValidation = bodySchema.safeParse(request.body);

  if (!bodyValidation.success) {
    return reply.status(400).send({
      message: "Validation failed",
      errors: bodyValidation.error.errors,
    });
  }

  const { price } = bodyValidation.data;

  if (typeof price !== "number" || price <= 0) {
    return reply.status(400).send({ error: "Invalid price value" });
  }

  try {
    const prismaAccommodationRepository = new PrismaAccommodationRepository();
    const updateAccommodationUseCase = new UpdateAccommodationUseCase(
      prismaAccommodationRepository
    );

    const updatedAccommodation = await updateAccommodationUseCase.execute({
      id,
      price,
    });

    if (!updatedAccommodation) {
      return reply.status(404).send({ error: "Accommodation not found" });
    }

    return reply.send(updatedAccommodation);
  } catch (error) {
    console.error("Error updating accommodation:", error);
    return reply
      .status(500)
      .send({ error: "Could not update accommodation" });
  }
}