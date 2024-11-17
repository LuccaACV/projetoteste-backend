import { Accommodation } from "@prisma/client";

export interface AccommodationRepository{
    getById(data: {id: Accommodation["id"]}): Promise<Accommodation|null>
}