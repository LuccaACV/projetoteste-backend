import fastify from "fastify";
import { prisma } from "./lib/prisma";

export const app = fastify()


app.get("/accommodations", );


app.get("/accommodations/:id", async (request, reply) => {
  const { id } = request.params; 

  try {
    const accommodation = await prisma.accommodation.findUnique({
      where: { id }, 
    });

    if (!accommodation) {
      return reply.status(404).send({ error: "accommodation not found" });
    }

    reply.send(accommodation);
  } catch (error) {
    console.error("Error fetching accommodation by ID:", error);
    reply.status(500).send({ error: "Could not fetch accommodation" });
  }
});
