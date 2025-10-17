import app from "./index.js";
import request from "supertest";

describe("Test de Endpoints de Express", () => {
  test("GET / debe devolver el mensaje de bienvenida y estado 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hola desde CodeBuild y Express 🚀");
  });

  test("GET /estudiantes debe devolver la lista de estudiantes en formato JSON", async () => {
    const response = await request(app).get("/estudiantes");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveLength(5);

    // Validar estructura de los estudiantes
    expect(response.body[0]).toHaveProperty("nombre");
    expect(response.body[0]).toHaveProperty("edad");
    expect(response.body[0]).toHaveProperty("carrera");
  });
});
