const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

const tasks = [];

// POST METHOD
app.post('/message', (req, res) => {
  const { name, email, messages } = req.body;
  const currentTime = getCurrentDateTime();
  if (!name) {
    return res.status(400).json({ msg: 'name is required' });
  }
  let newTask = {
    name: name,
    email: email,
    message: messages,
    id: tasks.length + 1,
    time: currentTime,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});
// Function to get the current date and time
function getCurrentDateTime() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = padZero(currentDate.getMonth() + 1);
  const day = padZero(currentDate.getDate());
  const hours = padZero(currentDate.getHours());
  const minutes = padZero(currentDate.getMinutes());
  const seconds = padZero(currentDate.getSeconds());

  return `${hours}:${minutes}:${seconds} ${day}-${month}-${year} `;
}

// Function to pad single-digit numbers with leading zeros
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

// GET ALL METHOD
app.get('/message', (req, res) => {
  res.json(tasks);
});

// GET SINGLE
// app.get('/message/:id', (req, res) => {
//   let id = parseInt(req.params.id);
//   let task = tasks[id - 1];
//   console.log(task);
//   res.json(task);
// });

// DELETE METHOD
app.delete('/message/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks.splice(taskIndex, 1);
  const newPeople = tasks.filter(
    (person) => person.id !== parseInt(req.params.id)
  );

  return res.status(204).json({ succes: true, tasks: newPeople });
});

// SERVER PORT LISTENING
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
