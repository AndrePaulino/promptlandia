import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
	try {
		await connectToDB();

		const prompts = await Prompt.find({}).populate("creator");

		return new Response(JSON.stringify(prompts), { status: 200 });
	} catch (error) {
		console.log("⛔ ~ file: route.js:9 ~ GET ~ error:", error);
		return new Response("Falha ao buscar prompts", { status: 500 });
	}
};
