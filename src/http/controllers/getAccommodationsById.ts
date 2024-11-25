import { FastifyRequest, FastifyReply } from "fastify";
import { AccommodationByIdUseCase } from "@/use-cases/get-accomodation-byid";
import { PrismaAccommodationRepository } from "@/repositories/prisma/prisma-accommodations-repository";
import { z } from "zod";

const paramsSchema = z.object({
    id: z.string().uuid(),  // Aqui validamos que o 'id' seja uma string no formato UUID
  });
  
  
  export async function getAccomodationsById(request: FastifyRequest, reply: FastifyReply){

      const validation = paramsSchema.safeParse(request.params);
    
      if (!validation.success) {
        return reply.status(400).send({
          message: 'Invalid ID parameter',
          errors: validation.error.errors,
        });
      }
    
      const { id } = validation.data;  // Agora o 'id' é garantidamente uma string UUID

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