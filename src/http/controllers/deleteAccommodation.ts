import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaAccommodationRepository } from "@/repositories/prisma/prisma-accommodations-repository";
import { DeleteAccommodationUseCase } from "@/use-cases/delete-accommodation";
import { z } from "zod";

const paramsSchema = z.object({
    id: z.string().uuid(), 
  });

export async function deleteAccommodation(request: FastifyRequest, reply: FastifyReply) {

  const validation = paramsSchema.safeParse(request.params);

  if (!validation.success) {
    return reply.status(400).send({
      message: 'Invalid ID parameter',
      errors: validation.error.errors,
    });
  }

  const { id } = validation.data;

  try {
    const prismaAccommodationRepository = new PrismaAccommodationRepository();
    const deleteAccommodationUseCase = new DeleteAccommodationUseCase(prismaAccommodationRepository);

    await deleteAccommodationUseCase.execute({ id });

    return reply.status(204).send();
  } catch (error) {
    console.error("Error deleting accommodation:", error);

    return reply.status(500).send({
      error: "Could not delete accommodation",
    });
  }
}