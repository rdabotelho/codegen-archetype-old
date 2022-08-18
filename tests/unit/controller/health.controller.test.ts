import { HealthController } from "../../../src/controller/HealthController";

describe("HealthController", () => {

    describe("health", () => {
        test("should return successfully", async () => {
            const result = await new HealthController().health();
            expect(result.status).toEqual("success");
        });
    });

});
