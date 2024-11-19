import { AccommodationRepository } from "@/repositories/accommodation-repository"

export class GetAllAccommodationUseCase{
    constructor(private accommodationRepository: AccommodationRepository){}


    async execute() {
    
        const accommodation =  await this.accommodationRepository.getAll()
    
        if (accommodation.length === 0) {
            throw new Error("Accommodation not found.");
        }

        return accommodation
    }
}