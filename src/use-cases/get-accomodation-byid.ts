import { AccommodationRepository } from "@/repositories/accommodation-repository"

interface GetByIdAccomodationRequest{
    id: string
}

export class AccommodationByIdUseCase{
    constructor(private accommodationRepository: AccommodationRepository){}


    async execute(id: GetByIdAccomodationRequest) {
    
        const accommodation = this.accommodationRepository.getById(id)
    
        if (!accommodation) {
            throw new Error("Accomodation not found.")
        }

        return accommodation
    }
}
