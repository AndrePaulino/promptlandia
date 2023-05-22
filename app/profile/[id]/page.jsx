"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
	const searchParams = useSearchParams();
	const userName = searchParams.get("name");

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${params?.id}/posts`);
			const data = await response.json();

			setPosts(data);
		};

		if (params?.id) fetchPosts();
	}, [params.id]);

	return (
		<Profile
			name={userName}
			desc={`Bem-vindo ao perfil personalizado de ${userName}. Explore seus incríveis prompts e se inspire!`}
			data={posts}
		/>
	);
};

export default UserProfile;
