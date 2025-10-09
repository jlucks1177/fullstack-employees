import express from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../db/queries/employees.js";

const router = express.Router();
export default router;

// TODO: this file!

// gets all employees
router.get("/", async (req, res, next) => {
  try {
    const employees = await getEmployees();
    res.json(employees);
  } catch (err) {
    next(err);
  }
});

// creates a new employee on the table
router.post("/", async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).send("Request body is required");
    }

    const { name, birthday, salary } = req.body;
    if (!name || !birthday || !salary) {
      return res.status(400).send("Missing required fields");
    }

    const newEmployee = await createEmployee({ name, birthday, salary });

    res.status(201).json(newEmployee);
  } catch (err) {
    next(err);
  }
});

// gets a specific employee based on ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const employeeId = Number(id);

    if (!Number.isInteger(employeeId) || String(employeeId) !== id) {
      return res.status(400).send("Invalid employee id");
    }

    const employee = await getEmployee(employeeId);

    if (!employee) {
      return res.status(404).send("Employee not found");
    }

    res.json(employee);
  } catch (err) {
    next(err);
  }
});

// deletes an employee from the table
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const employeeId = Number(id);

    if (!Number.isInteger(employeeId) || String(employeeId) !== id) {
      return res.status(400).send("Invalid employee id");
    }

    const deletedEmployee = await deleteEmployee(employeeId);

    if (!deletedEmployee) {
      return res.status(404).send("Employee not found");
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

// updates an employee on the table
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const employeeId = Number(id);

    if (!Number.isInteger(employeeId) || String(employeeId) !== id) {
      return res.status(400).send("Invalid employee id");
    }

    if (!req.body) {
      return res.status(400).send("Request body is required");
    }

    const { name, birthday, salary } = req.body;

    if (!name || !birthday || !salary) {
      return res.status(400).send("Missing required fields");
    }

    const updatedEmployee = await updateEmployee({
      id: employeeId,
      name,
      birthday,
      salary,
    });

    if (!updatedEmployee) {
      return res.status(404).send("Employee not found");
    }

    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
});
