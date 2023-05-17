"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
	const isUserLoggedIn = true;
	const [providers, setProviders] = useState(null);
	const [toggleDropdown, settoggleDropdown] = useState(false);

	useEffect(() => {
		const setProviders = async () => {
			const response = await getProviders();

			setProviders(response);
		};

		setProviders();
	}, []);

	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link className="flex gap-2 flex-center" href="/">
				<Image
					alt="Promptopolis logo"
					className="object-contain"
					height={30}
					src="/assets/images/logo.svg"
					width={30}
				/>
				<p className="logo_text">Promptopolis</p>
			</Link>

			{/* Desktop Navigation */}
			<div className="sm:flex hidden">
				{isUserLoggedIn ? (
					<div className="flex gap-3 md:gap-5">
						<Link className="black_btn" href="/create-prompt">
							Criar Post
						</Link>
						<button
							className="outline_btn"
							onClick={signOut}
							type="button"
						>
							Sair
						</button>

						<Link href="/profile">
							<Image
								alt="foto de perfil"
								className="rounded-full"
								height={37}
								src="/assets/images/logo.svg"
								width={37}
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => {
								<button
									className="black_btn"
									key={provider.name}
									onClick={() => signIn(provider.id)}
									type="button"
								>
									Entrar
								</button>;
							})}
					</>
				)}
			</div>

			{/* Mobile Navigation */}
			<div className="sm:hidden flex relative">
				{isUserLoggedIn ? (
					<div className="flex">
						<Image
							alt="foto de perfil"
							className="rounded-full"
							height={37}
							onClick={() => settoggleDropdown((prev) => !prev)}
							src="/assets/images/logo.svg"
							width={37}
						/>

						{toggleDropdown && (
							<div className="dropdown">
								<Link
									href="/perfil"
									className="dropdown_link"
									onClick={() => settoggleDropdown(false)}
								>
									Meu Perfil
								</Link>
								<Link
									href="/criar-prompt"
									className="dropdown_link"
									onClick={() => settoggleDropdown(false)}
								>
									Criar Prompt
								</Link>
								<button
									className="black_btn mt-5 w-full"
									onClick={() => {
										settoggleDropdown(false);
										signOut();
									}}
									type="button"
								>
									Sair
								</button>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => {
								<button
									className="black_btn"
									key={provider.name}
									onClick={() => signIn(provider.id)}
									type="button"
								>
									Entrar
								</button>;
							})}
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
