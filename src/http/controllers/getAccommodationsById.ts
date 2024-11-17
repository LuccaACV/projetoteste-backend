import { FastifyRequest, FastifyReply } from "fastify";
import { AccommodationByIdUseCase } from "@/use-cases/get-accomodation-byid";
import { PrismaAccommodationRepository } from "@/repositories/prisma/prisma-accommodations-repository";

export async function getAccomodationsById(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.params; 

    try {
        const prismaAccommodationRepository = new PrismaAccommodationRepository
        const accommodationByIdUseCase = new AccommodationByIdUseCase(prismaAccommodationRepository)
        
        const accommodation = await accommodationByIdUseCase.execute({
            id,
        })

        return reply.send(accommodation);
    } catch (error) {

        console.error("Error fetching accommodation by ID:", error);

        return reply.status(500).send({
             error: "Could not fetch accommodation" 
            });
    }
}