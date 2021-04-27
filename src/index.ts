import { PrismaClient } from "@prisma/client";
import express from "express";
import { CategorySeed } from "./seed/category.seed";
import { ExpenseSeed } from "./seed/Expense.seed";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

async function main() {
  
  CategorySeed.map((cat) => {
    prisma.category.create({
      data:{
        id: cat.id,
        name: cat.name
      }
    })
  });
  
  ExpenseSeed.map((exp) => {
    prisma.expense.create({
      data: {
          date: exp.date,
          price:exp.price,
          title:exp.title

      },
    })
}


app.get('/user', async(req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

app.get('/budgets', async(req, res) => {
  const expense = await prisma.expense.findMany();
  
  res.json(expense);
});



app.listen(8080, () => {
  console.log('ready at: http://localhost:8080')
})
