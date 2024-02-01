import request from "supertest";
import app from "../server.js";
import { faker } from "@faker-js/faker";

describe("Coffees CRUD operations", () => {
    describe("GET /coffees", () => {
        it("Should respond with a 200 code status", async () => {
            const response = await request(app).get("/coffees").send();
            expect(response.status).toBe(200);
        });

        it("Should respond with an array and at least 1 object", async () => {
            const response = await request(app).get("/coffees");
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body[0]).toBeInstanceOf(Object);
        });
    });

    describe("GET /coffees/:id", () => {
        it("Should respond with a 200 code status when using a valid id", async () => {
            const response = await request(app).get("/coffees/1").send();
            expect(response.status).toBe(200);
        });

        it("Should respond with a 404 code status when using an invalid id", async () => {
            const id = faker.string.alphanumeric();
            const response = await request(app).get(`/coffees/${id}`);
            expect(response.status).toBe(404);
        });
    });
});
