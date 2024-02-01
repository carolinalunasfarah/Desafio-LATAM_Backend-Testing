import request from "supertest";
import app from "../server.js";

describe("Coffees CRUD operations", () => {
    describe("GET /coffees", () => {
        it("Should respond with a 200 code status", async () => {
            const response = await request(app).get("/coffees").send();
            expect(response.status).toBe(200);
        });
    });
});
