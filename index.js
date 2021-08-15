import express, { response } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import Person from "./models/person.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(morgan("tiny"));

const errorHandler = (error, request, response, next) => {
	console.log("error.name =", error.name);
	if (error.name === "CastError") {
		return response.status(400).send({ error: "malformatted id" });
	} else if (error.name === "ValidationError") {
		return response
			.status(400)
			.send({ error: `${error.message}-------------` });
	}

	next(error);
};

app.get("/api/persons", async (request, response) => {
	const person = await Person.find({});
	response.json(person);
});
app.get("/api/persons/:id", (req, res, next) => {
	Person.findById(req.params.id)
		.then((person) => {
			if (person) {
				res.json(person);
			} else {
				res.status(404).end();
			}
		})
		.catch((error) => {
			return next(error);
		});
});
app.get("/api/info", (req, res) => {
	const length = persons.length;
	res.send(`Phonebook has info for ${length} people </br></br>
	${Date()}`);
});
app.delete("/api/persons/:id", (req, res) => {
	Person.findByIdAndDelete(req.params.id).then((persons) => {
		console.log("deleted response - ", persons);
		res.status(204).json(persons);
	});
});
app.post("/api/persons", (req, res, next) => {
	if (!req.body) {
		return response.status(400).json({ error: "content missing" });
	}
	const newPerson = new Person({
		name: req.body.name,
		number: req.body.number,
	});
	newPerson
		.save()
		.then((savedNote) => res.json(savedNote))
		.catch((err) => {
			console.log("error ====", err.name);
			return next(err);
		});
});
app.put("/api/persons/:id", (req, res, next) => {
	const body = req.body;
	const updatedPerson = {
		name: req.body.name,
		number: req.body.number,
	};
	Person.findByIdAndUpdate(req.params.id, updatedPerson, { new: true })
		.then((updatedPerson) => {
			console.log("updatedPerson ", updatedPerson);
			res.json(updatedPerson);
		})
		.catch((error) => next(error));
});
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is running on the port ${PORT}`));
