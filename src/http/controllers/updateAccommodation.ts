import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaAccommodationRepository } from "@/repositories/prisma/prisma-accommodations-repository";
import { UpdateAccommodationUseCase } from "@/use-cases/update-accommodation";

export async function updateAccommodation(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };
  const { price } = request.body as { price: number };

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