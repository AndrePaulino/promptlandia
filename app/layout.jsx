import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
	title: "Promptopolis",
	description: "Descubra & Compartilhe Prompts de IA",
	charset: "UTF-8",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="pt-br">
			<body>
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>

					<main className="app">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
