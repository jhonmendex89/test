// Importa supertest y tu aplicación Express
import app from "./index.js";
import request from "supertest";

describe("Test de Endpoints de Express", () => {
  // **TEST PARA EL ENDPOINT GET / **
  test("GET / debe devolver el mensaje de bienvenida y estado 200", async () => {
    // 1. Usa supertest para hacer una petición GET a la ruta '/'
    const response = await request(app).get("/");

    // 2. Verifica el código de estado HTTP
    expect(response.statusCode).toBe(200);

    // 3. Verifica el cuerpo de la respuesta (el mensaje de texto)
    expect(response.text).toBe("Hola desde CodeBuild y Express 🚀");
  });

  // **TEST PARA EL ENDPOINT GET /estudiantes **
  test("GET /estudiantes debe devolver la lista de estudiantes en formato JSON", async () => {
    // 1. Usa supertest para hacer una petición GET a la ruta '/estudiantes'
    const response = await request(app).get("/estudiantes");

    // 2. Verifica el código de estado HTTP
    expect(response.statusCode).toBe(200);

    // 3. Verifica que la respuesta es un JSON
    expect(response.headers["content-type"]).toMatch(/json/);

    // 4. Verifica que la respuesta es un array con 3 elementos
    expect(response.body).toHaveLength(3);

    // 5. Verifica que la estructura de un elemento sea correcta
    expect(response.body[0]).toHaveProperty("id", 1);
    expect(response.body[0]).toHaveProperty("nombre", "Alicia");
  });
});
