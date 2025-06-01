import app from "../server";
import supertest from "supertest";

describe("GET /", () => {
  it("should send back data of some kind", async () => {
    const res = await supertest(app).get("/");

    expect(res.body.message).toBe("YabbaDabbaDoo!");
  });
});
