import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
	try {
		await connectToDB();

		const prompts = await Prompt.find({ creator: params.id }).populate(
			"creator"
		);

		return new Response(JSON.stringify(prompts), { status: 200 });
	} catch (error) {
		console.log("⛔ ~ file: route.js:14 ~ GET ~ error:", error);
		return new Response("Falha ao buscar prompts do usuário", {
			status: 500,
		});
	}
};
