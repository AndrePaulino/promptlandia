import "@styles/globals.css";

export const metadata = {
	title: "Promptopolis",
	description: "Descubra & Compartilhe Prompts de IA",
	charset: "UTF-8",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="pt_br">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>

				<main className="app">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
