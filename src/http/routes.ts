import { FastifyInstance } from "fastify";
import { getAccomodationsById } from "./controllers/getAccommodationsById";
import { getAllAccommodations } from "./controllers/getAllAccommodations";
import { createAccommodation } from "./controllers/createAccommodation";
import { updateAccommodation } from "./controllers/updateAccommodation";
import { deleteAccommodation } from "./controllers/deleteAccommodation";


export async function appRoutes(app: FastifyInstance){
    // GET all accommodations
    app.get("/accommodations", {
    schema: {
        description: "Retrieve all accommodations",
        tags: ["Accommodations"],
        response: {
        200: {
            type: "array",
            items: {
            type: "object",
            properties: {
                id: { type: "string" },
                name: { type: "string" },
                location: { type: "string" },
                summary: { type: "string" },
                description: { type: "string" },
                price: { type: "number" },
                isAvailable: { type: "boolean" },
            },
            },
        },
        },
    },
    }, getAllAccommodations);

    // GET a single accommodation by ID
    app.get("/accommodations/:id", {
    schema: {
        description: "Retrieve an accommodation by ID",
        tags: ["Accommodations"],
        params: {
        type: "object",
        properties: {
            id: { type: "string" },
        },
        },
        response: {
        200: {
            type: "object",
            properties: {
            id: { type: "string" },
            name: { type: "string" },
            location: { type: "string" },
            summary: { type: "string" },
            description: { type: "string" },
            price: { type: "number" },
            isAvailable: { type: "boolean" },
            },
        },
        },
    },
    }, getAccomodationsById);

    // POST create an accommodation
    app.post("/accommodations", {
    schema: {
        description: "Create a new accommodation",
        tags: ["Accommodations"],
        body: {
        type: "object",
        required: ["name", "location", "summary", "description", "price", "isAvailable"],
        properties: {
            name: { type: "string" },
            location: { type: "string" },
            summary: { type: "string" },
            description: { type: "string" },
            price: { type: "number" },
            isAvailable: { type: "boolean" },
        },
        },
        response: {
        201: {
            description: "Accommodation created successfully",
            type: "object",
            properties: {
            id: { type: "string" },
            },
        },
        },
    },
    }, createAccommodation);

    // PUT update accommodation by ID
    app.put("/accommodations/:id", {
    schema: {
        description: "Update an accommodation by ID",
        tags: ["Accommodations"],
        params: {
        type: "object",
        properties: {
            id: { type: "string" },
        },
        },
        body: {
        type: "object",
        required: ["price"],
        properties: {
            price: { type: "number" },
        },
        },
        response: {
        200: {
            description: "Accommodation updated successfully",
            type: "object",
            properties: {
            id: { type: "string" },
            price: { type: "number" },
            },
        },
        },
    },
    }, updateAccommodation);

    // DELETE accommodation by ID
    app.delete("/accommodations/:id", {
    schema: {
        description: "Delete an accommodation by ID",
        tags: ["Accommodations"],
        params: {
        type: "object",
        properties: {
            id: { type: "string" },
        },
        },
        response: {
        204: {
            description: "Accommodation deleted successfully",
        },
        },
    },
    }, deleteAccommodation);
}