import React from 'react';
import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";
import { jsPDF } from "jspdf";

//import fs from 'fs-extra';
export function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const printTask = async (task) => {
    const doc = new jsPDF();
    const fecha= new Date(task.date).toLocaleDateString("en-US", {weekday: "long",year: "numeric", month: "long",day: "numeric", })
    doc.text("Title :" +" "+ task.title +", Description : "+" "+ task.description +" Date : "+" "+ fecha, 10, 10);
    doc.save("a4.pdf");

    console.log(task)

};
  return (
    <>
    <Card>
      <header className="flex justify-between">
      <div class="d-flex flex-row mb-3"><h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button class="btn btn-danger" onClick={() => deleteTask(task._id)}>Borrar</Button>
          <Button onClick={() => printTask(task)}>Imprimir</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Editar</ButtonLink>
        </div></div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      {/* format date */}
      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
    </>
  );
}
