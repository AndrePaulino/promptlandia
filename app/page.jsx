import Feed from "@components/Feed";

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Descubra e Compartilhe <br className="max-md:hidden" />
				<span className="orange_gradient text-center">
					Prompts para IA
				</span>
			</h1>
			<p className="desc text-center">
				Promptlândia é uma ferramenta Open-Source para descobrir, criar
				e compartilhar prompts criativos para IAs.
			</p>

			<Feed />
		</section>
	);
};

export default Home;
