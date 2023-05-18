import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
	return (
		<section className="w-full max-w-full flex-start flex-col">
			<h1 className="head_text text-left">
				<span className="blue_gradient">{type} Post</span>
			</h1>
			<p className="desc text-left max-w-md">
				{type} e compartilhe prompts incríveis com o mundo, deixe sua
				imaginação voar com qualquer plataforma de IA.
			</p>

			<form
				className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
				onSubmit={handleSubmit}
			>
				<label>
					<span className="font-satoshi font-semibold text-base text-gray-700">
						Seu prompt para IA
					</span>
					<textarea
						className="form_textarea"
						onChange={(event) =>
							setPost({ ...post, prompt: event.target.value })
						}
						placeholder="Escreva seu prompt aqui..."
						required
						value={post.prompt}
					/>
				</label>
				<label>
					<span className="font-satoshi font-semibold text-base text-gray-700">
						Tag {` `}
						<span className="font-normal">
							(#desenvolvimento #midjourney #produtividade)
						</span>
					</span>
					<input
						className="form_input"
						onChange={(event) =>
							setPost({ ...post, tag: event.target.value })
						}
						placeholder="#tag"
						required
						value={post.tag}
					/>
				</label>

				<div className="flex-end mx-3 mb-5 gap-4">
					<Link className="text-gray-500 text-sm" href="/">
						Cancelar
					</Link>

					<button
						className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
						disabled={submitting}
						type="submit"
					>
						{submitting ? `${type}...` : type}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
