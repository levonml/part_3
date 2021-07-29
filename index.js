import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
let persons = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

app.get("/api/persons", (request, response) => {
	response.json(persons);
});
app.get("/api/persons/:id", (req, res) => {
	const id = Number(req.params.id);
	const person = persons.find((el) => el.id === id);
	if (person) {
		res.json(person);
	} else {
		res.status(404).end("nothing has found");
	}
});
app.get("/api/info", (req, res) => {
	const length = persons.length;
	res.send(`Phonebook has info for ${length} people </br></br>
	${Date()}`);
});
app.delete("/api/persons/:id", (req, res) => {
	const id = Number(req.params.id);
	persons = persons.filter((el) => el.id !== id);
	res.status(204).json(persons);
});
app.post("/api/persons", (req, res) => {
	const createId = (max, min) => {
		max = Math.floor(max);
		min = Math.ceil(min);
		const rand = Math.floor(Math.random() * (max - min) + min);
		return rand;
	};
	const id = createId(100000, 0);
	if (!req.body.name) {
		return res.status(400).send("name is missing");
	}
	if (!req.body.number) {
		return res.status(400).send("number is missing");
	}
	const uniqueName = persons.every((person) => person.name !== req.body.name);
	if (!uniqueName) {
		return res.status(400).send(`name ${req.body.name} already exists`);
	}
	const newPerson = {
		id: id,
		name: req.body.name,
		number: req.body.number,
	};
	persons = persons.concat(newPerson);
	res.json(persons);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server is running on the port ${PORT}`));
