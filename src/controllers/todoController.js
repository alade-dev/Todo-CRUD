const { Todos } = require("../models/Todo");
const { v4: uuid } = require("uuid");

exports.getFlights = (req, res) => {
  console.log(`Flight in the database: ${Flights}`);

  res.send(Flights);
};

exports.createFlight = (req, res) => {
  const user = req.body;

  Flights.push({ ...user, id: uuid() });

  console.log(
    `Flight details: [${user.title}, ${user.time}, ${user.price}, ${user.date}] added to the database.`
  );
  res.send(
    `Flight details: [${user.title}, ${user.time}, ${user.price}, ${user.date}] added to the database.`
  );
};

exports.getFlight = (req, res) => {
  const { id } = req.params;

  const foundFlight = Flights.find((user) => user.id === id);

  res.send(foundFlight);
};

exports.deleteFlight = (req, res) => {
  const { id } = req.params;

  user = Flights.find((user) => user.id !== id);
  Flights.splice(Flights.indexOf(user), 1);

  res.send(`Flight with id ${id} has been deleted from the database.`);
  console.log(`Flight with id ${id} has been deleted from the database.`);
};

exports.updateFlight = (req, res) => {
  const user = Flights.find((user) => user.id === req.params.id);

  user.title = req.body.title;
  user.time = req.body.time;
  user.price = req.body.price;
  user.date = req.body.date;

  res.send(
    `Flight title has been updated to ${req.body.title}. time has been updated to ${req.body.time}. price has been updated to ${req.body.price}. date has been updated to ${req.body.date} `
  );
};
