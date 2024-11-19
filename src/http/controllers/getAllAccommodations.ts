import { FastifyRequest,FastifyReply } from "fastify";
import { PrismaAccommodationRepository } from "@/repositories/prisma/prisma-accommodations-repository";
import { GetAllAccommodationUseCase } from "@/use-cases/get-all-accomodations";



export async function getAllAccommodations (request: FastifyRequest, reply: FastifyReply){
  try {
    const prismaAccommodationRepository = new PrismaAccommodationRepository
    const getAllAccommodationsUseCase = new GetAllAccommodationUseCase(prismaAccommodationRepository)

    const accommodations = await getAllAccommodationsUseCase.execute();
    
    return reply.send(accommodations);

  } catch (error) {
    console.error("Error fetching accommodations:", error);

    return reply.status(500).send({ error: "Could not fetch accommodations" });

  }
}