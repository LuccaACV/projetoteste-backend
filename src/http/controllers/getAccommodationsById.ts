import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "@/lib/prisma";

export async function getAccomodationsById(request: FastifyRequest, reply: FastifyReply){
    const { id } = request.params; 

    try {

    const accommodation = await prisma.accommodation.findUnique({
        where: { id },
    });

    if (!accommodation) {
        return reply.status(404).send({ error: "accommodation not found" });
    }

    return reply.send(accommodation);
    } catch (error) {
    console.error("Error fetching accommodation by ID:", error);
    return reply.status(500).send({ error: "Could not fetch accommodation" });
    }
}