import { AccommodationRepository } from "@/repositories/accommodation-repository";

export class CreateAccommodationUseCase {
  constructor(private accommodationRepository: AccommodationRepository) {}

  async execute(data: {
    name: string;
    location: string;
    summary: string;
    description: string;
    price: number;
    isAvailable: boolean;
  }) {
    const accommodation = await this.accommodationRepository.create(data);
    return accommodation;
  }
}