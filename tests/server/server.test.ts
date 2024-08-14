import request from "supertest";
import { expect, test, describe } from "vitest";
import { app } from "../../src/server/main";

describe.skip("POST from server", () => {
  test("Testing if server testing works", async () => {
    const response = await request(app).post("/test").send({
      test: "data",
    });
    expect(response.statusCode).toBe(200);
  });
});
