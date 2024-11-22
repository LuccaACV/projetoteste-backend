import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaAccommodationRepository } from "@/repositories/prisma/prisma-accommodations-repository";
import { CreateAccommodationUseCase } from "@/use-cases/create-accommodation";

export async function createAccommodation(request: FastifyRequest, reply: FastifyReply) {
  const { name, location, summary, description, price, isAvailable } = request.body as {
    name: string;
    location: string;
    summary: string;
    description: string;
    price: number;
    isAvailable: boolean;
  };

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