import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const blogSchema = new mongoose.Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

const mongoUrl =
	"mongodb+srv://fullstack:fullstack2020@cluster0.0g79b.mongodb.net/BlogList?retryWrites=true&w=majority";
mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());

app.get("/api/blogs", (request, response) => {
	Blog.find({}).then((blogs) => {
		response.json(blogs);
	});
});

app.post("/api/blogs", (request, response) => {
	const blog = new Blog(request.body);

	blog.save().then((result) => {
		response.status(201).json(result);
	});
});

const PORT = 3003;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
