import "cypress-mochawesome-reporter/register";
describe("Login System", () => {
  it("User can login with correct credentials", () => {
    // 1. ไปที่หน้า Login ของคุณ (แก้ URL ให้ตรงกับหน้าที่มีฟอร์มนี้)
    cy.visit("http://localhost:5173");

    // 2. กรอก Email: เจาะจงไปที่ input ที่มี type="email"
    cy.get('input[type="email"]').type("test01@gmail.com");

    // 3. กรอก Password: เจาะจงไปที่ input ที่มี type="password"
    cy.get('input[type="password"]').type("1");

    // 4. กดปุ่ม Sign In: เจาะจงไปที่ class ".auth-btn"
    cy.get(".auth-btn").click();

    // 5. (สำคัญ) เช็คผลลัพธ์: ล็อกอินเสร็จแล้วควรไปหน้าไหน? (เช่นหน้า home)
    // รอให้ URL เปลี่ยนไปหน้า home
    cy.url().should("include", "/home");
  });
});
