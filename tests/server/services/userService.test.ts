// import request from "supertest";
import { expect, test, describe, vi, afterEach, beforeEach } from "vitest";
import Users from "../../../src/server/models/userModel";
import { userService } from "../../../src/server/services/userService";

vi.mock("../../../src/server/models/userModel", () => ({
  default: {
    create: vi.fn(),
    findOne: vi.fn(),
    findByIdAndUpdate: vi.fn(),
  },
}));

describe("createUser", () => {
  let userData: any;
  let createMock: any;
  beforeEach(() => {
    // set up my mock before each test
    userData = {
      username: "testuser",
      email: "test@example.com",
      password: "password",
    };
    createMock = vi.fn().mockResolvedValue(userData);
    Users.create = createMock;
  });

  test("createUser should save the userData to the database", async () => {
    const result = await userService.createUser(userData);

    expect(createMock).toHaveBeenCalledWith({
      username: "testuser",
      email: "test@example.com",
      password: "password",
    });
    expect(result).toHaveProperty("username");
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("email");
  });

  afterEach(() => {
    // Restore the prototype after each test
    vi.restoreAllMocks();
  });
});
