import { FastifyInstance } from "fastify";
import { getAccomodationsById } from "./controllers/getAccommodationsById";
import { getAllAccommodations } from "./controllers/getAllAccommodations";
import { createAccommodation } from "./controllers/createAccommodation";
import { updateAccommodation } from "./controllers/updateAccommodation";
import { deleteAccommodation } from "./controllers/deleteAccommodation";


export async function appRoutes(app: FastifyInstance){
    app.get("/accommodations", getAllAccommodations);
    app.get("/accommodations/:id", getAccomodationsById);
    app.post("/accommodations", createAccommodation);
    app.put("/accommodations/:id", updateAccommodation);
    app.delete("/accommodations/:id", deleteAccommodation);
}