import { FastifyInstance } from "fastify";
import { getAccomodationsById } from "./controllers/getAccommodationsById";
import { getAllAccommodations } from "./controllers/getAllAccommodations";


export async function appRoutes(app: FastifyInstance){
    app.get("/accommodations", getAllAccommodations);
    app.get("/accommodations/:id", getAccomodationsById);
}