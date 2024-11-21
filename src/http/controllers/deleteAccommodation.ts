import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaAccommodationRepository } from "@/repositories/prisma/prisma-accommodations-repository";
import { DeleteAccommodationUseCase } from "@/use-cases/delete-accommodation";

export async function deleteAccommodation(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };

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