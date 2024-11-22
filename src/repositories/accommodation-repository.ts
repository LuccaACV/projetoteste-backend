import { Accommodation } from "@prisma/client";

export interface AccommodationRepository{
    getById(data: {id: Accommodation["id"]}): Promise<Accommodation|null>

    getAll(): Promise<Accommodation[]>

    create(data: {
        name: string;
        location: string;
        summary: string;
        description: string;
        price: number;
        isAvailable: boolean;
      }): Promise<Accommodation>;

    updatePrice(data: { id: string; price: number }): Promise<Accommodation | null>;

    delete(data: { id: string }): Promise<void>;
}