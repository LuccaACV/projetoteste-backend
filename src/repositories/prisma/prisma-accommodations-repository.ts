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

    async getAll(){
        const accommodation = await prisma.accommodation.findMany();

        return accommodation
    }

    async create(data: {
        name: string;
        location: string;
        summary: string;
        description: string;
        price: number;
        isAvailable: boolean;
      }) {
        return await prisma.accommodation.create({ data });
      }

    async updatePrice({ id, price }: { id: string; price: number }) {
    return await prisma.accommodation.update({
        where: { id },
        data: { price },
    });
    }
}