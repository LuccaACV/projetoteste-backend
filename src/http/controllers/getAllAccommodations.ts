export async function getAllAccommodations (request, reply) => {
    try {
      const accommodations = await prisma.accommodation.findMany(); 
      reply.send(accommodations);
    } catch (error) {
      console.error("Error fetching accommodations:", error);
      reply.status(500).send({ error: "Could not fetch accommodations" });
    }
  }