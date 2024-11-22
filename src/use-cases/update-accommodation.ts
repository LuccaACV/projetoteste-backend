import { AccommodationRepository } from "@/repositories/accommodation-repository";

interface UpdateAccommodationUseCaseRequest {
  id: string;
  price: number;
}

export class UpdateAccommodationUseCase {
  constructor(private accommodationRepository: AccommodationRepository) {}

  async execute({ id, price }: UpdateAccommodationUseCaseRequest) {
    const updatedAccommodation = await this.accommodationRepository.updatePrice(
      { id, price }
    );

    return updatedAccommodation;
  }
}