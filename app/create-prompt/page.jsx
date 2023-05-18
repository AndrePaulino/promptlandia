"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Form from "@components/Form";

const CreatePrompt = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({ prompt: "", tag: "" });

	const createPrompt = async (event) => {
		event.preventDefault();
		setSubmitting(true);
		try {
			const response = await fetch("api/prompt/new", {
				method: "POST",
				body: JSON.stringify({
					prompt: post.prompt,
					tag: post.tag,
					userId: session?.user.id,
				}),
			});

			if (response.ok) router.push("/");
		} catch (error) {
			console.log(
				"⛔ ~ file: page.jsx:17 ~ createPrompt ~ error:",
				error
			);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Form
			type="Criar"
			post={post}
			setPost={setPost}
			submitting={submitting}
			handleSubmit={createPrompt}
		/>
	);
};

export default CreatePrompt;
