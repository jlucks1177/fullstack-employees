import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  try {
    await createEmployee({
      name: "Alice Johnson",
      birthday: "1990-04-12",
      salary: 60000,
    });

    await createEmployee({
      name: "Bob Smith",
      birthday: "1985-07-23",
      salary: 55000,
    });

    await createEmployee({
      name: "Carla Mendes",
      birthday: "1992-11-03",
      salary: 72000,
    });

    await createEmployee({
      name: "David Kim",
      birthday: "1988-01-15",
      salary: 64000,
    });

    await createEmployee({
      name: "Emily Zhang",
      birthday: "1995-09-30",
      salary: 58000,
    });

    await createEmployee({
      name: "Frank Martinez",
      birthday: "1983-06-19",
      salary: 75000,
    });

    await createEmployee({
      name: "Grace Lee",
      birthday: "1998-12-05",
      salary: 50000,
    });

    await createEmployee({
      name: "Hector Alvarez",
      birthday: "1991-03-28",
      salary: 67000,
    });

    await createEmployee({
      name: "Isabella Rossi",
      birthday: "1987-10-14",
      salary: 71000,
    });

    await createEmployee({
      name: "James O'Connor",
      birthday: "1993-08-21",
      salary: 62000,
    });

    console.log("Seeding successful!");
  } catch (err) {
    console.error("Seeding error:", err);
  }
}
