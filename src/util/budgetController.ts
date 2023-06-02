import { NextApiRequest, NextApiResponse } from "next";
import { Budget } from "./types/Budget";
import sql from "./db";

class BudgetController {
  async createBudget(
    budget: Budget,
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      const createBudgetQuery =
        await sql`INSERT INTO budgets(title) VALUES(${budget.title})`;
    } catch (e: any) {
      console.log(
        `Error: ${e.message}\nMethod called: BudgetController.createBudget()`
      );
    }
  }

  async getBudget(id: number) {
    try {
      if (id === undefined || id < 0) throw new Error("Invalid ID passed.");

      const results = await sql`SELECT * FROM budgets WHERE id = ${id}`;
      if (results.length === 0)
        throw new Error(`No budget found with ID ${id}.`);
      if (results.length > 1)
        throw new Error(
          `Duplicate budgets with ID ${id}, please find a way to narrow results.`
        );

      return results[0];
    } catch (e: any) {
      console.log(
        `Error: ${e.message}\nMethod called: BudgetController.getBudget()`
      );
      return {
        error: true,
      };
    }
  }

  async getAllBudgets() {
    try {
      const results = await sql`SELECT * FROM budgets;`;
      if (results.length === 0)
        throw new Error(`No budgets were found in the database.`);

      return {
        error: false,
        data: results,
      };
    } catch (e: any) {
      console.log(
        `Error: ${e.message}\nMethod called: BudgetController.getAllBudgets()`
      );

      return {
        error: true,
        data: undefined,
      };
    }
  }
}

export default new BudgetController();
