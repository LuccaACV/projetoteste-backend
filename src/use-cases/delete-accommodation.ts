import { AccommodationRepository } from "@/repositories/accommodation-repository";

export class DeleteAccommodationUseCase {
  constructor(private accommodationRepository: AccommodationRepository) {}

  async execute({ id }: { id: string }) {
    await this.accommodationRepository.delete({ id });
  }
}