import { prisma } from "@/lib/prisma"
import { Accommodation } from "@prisma/client"
import { AccommodationRepository } from "../accommodation-repository";

export class PrismaAccommodationRepository implements AccommodationRepository{
    async getById(data: {id: Accommodation["id"]}){
        const accommodation = await prisma.accommodation.findUnique({
            where: { id: data.id },
        });

        return accommodation
    }
}