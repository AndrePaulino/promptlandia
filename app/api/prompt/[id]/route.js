import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
	try {
		await connectToDB();

		const prompt = await Prompt.findById(params.id).populate("creator");
		if (!prompt)
			return new Response("Prompt não encontrado", { status: 404 });

		return new Response(JSON.stringify(prompt), { status: 200 });
	} catch (error) {
		console.log("⛔ ~ file: route.js:14 ~ GET ~ error:", error);
		return new Response("Falha ao buscar prompt", { status: 500 });
	}
};

export const PATCH = async (request, { params }) => {
	const { prompt, tag } = await request.json();

	try {
		await connectToDB();

		const existingPrompt = await Prompt.findById(params.id);

		if (!existingPrompt)
			return new Response("Prompt não encontrado", { status: 404 });

		existingPrompt.prompt = prompt;
		existingPrompt.tag = tag;

		await existingPrompt.save();

		return new Response(JSON.stringify(existingPrompt), { status: 200 });
	} catch (error) {
		console.log("⛔ ~ file: route.js:37 ~ PATCH ~ error:", error);
		return new Response("Falha ao atualizar prompt", { status: 500 });
	}
};

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB();

		await Prompt.findByIdAndDelete(params.id);

		return new Response("Prompt removido", { status: 200 });
	} catch (error) {
		console.log("⛔ ~ file: route.js:50 ~ DELETE ~ error:", error);
		return new Response("Falha ao remover prompt", { status: 500 });
	}
};
