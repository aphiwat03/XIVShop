import { defineConfig } from "cypress";

export default defineConfig({
  // 1. เพิ่มบรรทัดนี้ (บอกว่าจะใช้ reporter ตัวนี้)
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // 2. เพิ่มบรรทัดนี้ (เรียกใช้ plugin)
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
