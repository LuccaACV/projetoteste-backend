import { FastifyRequest,FastifyReply } from "fastify";
import { prisma } from "@/lib/prisma";



export async function getAllAccommodations (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const accommodations = await prisma.accommodation.findMany(); 
      return reply.send(accommodations);
    } catch (error) {
      console.error("Error fetching accommodations:", error);
      return reply.status(500).send({ error: "Could not fetch accommodations" });
    }
  }