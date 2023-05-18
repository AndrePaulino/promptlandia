import { Schema, model, models } from "mongoose";

const PrompSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	prompt: {
		type: String,
		required: [true, "Prompt é necessário"],
	},
	tag: {
		type: String,
		required: [true, "Tag é necessária"],
	},
});

const Prompt = models.Prompt || model("Prompt", PrompSchema);

export default Prompt;
