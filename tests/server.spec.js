import request from "supertest";
import app from "../server.js";

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
});
