import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (request) => {
	const { prompt, tag, userId } = await request.json();

	try {
		await connectToDB();
		const newPrompt = new Prompt({
			creator: userId,
			prompt,
			tag,
		});

		await newPrompt.save();

		return new Response(JSON.stringify(newPrompt, { status: 201 }));
	} catch (error) {
		console.log("⛔ ~ file: route.js:10 ~ POST ~ error:", error);
		return new Response("Falha ao criar um novo prompt", { status: 500 });
	}
};
