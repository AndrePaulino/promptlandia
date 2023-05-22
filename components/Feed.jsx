"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
	return (
		<div className="mt-16 prompt_layout">
			{data.map((post) => (
				<PromptCard
					key={post._id}
					post={post}
					handleTagClick={handleTagClick}
				/>
			))}
		</div>
	);
};

const Feed = () => {
	const [searchText, setSearchText] = useState("");
	const [searchTimeout, setSearchTimeout] = useState(null);
	const [searchResults, setSearchResults] = useState([]);

	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		const response = await fetch("/api/prompt");
		const data = await response.json();

		setPosts(data);
	};

	const handleSearchChange = (event) => {
		clearTimeout(searchTimeout);
		setSearchText(event.target.value);

		setSearchTimeout(
			setTimeout(() => {
				const searchResult = filterPrompts(event.target.value);
				setSearchResults(searchResult);
			}, 500)
		);
	};

	const filterPrompts = (searchText) => {
		const regex = new RegExp(searchText, "i");

		return posts.filter(
			(item) =>
				regex.test(item.creator.name) ||
				regex.test(item.tag) ||
				regex.test(item.prompt)
		);
	};

	const handleTagClick = (tagName) => {
		setSearchText(tagName);
		const searchResult = filterPrompts(tagName);
		setSearchResults(searchResult);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<section className="feed">
			<form className="relative w-full flex-center">
				<input
					className="search_input peer"
					onChange={handleSearchChange}
					placeholder="Procure por uma tag ou usuário"
					required
					type="text"
					value={searchText}
				/>
			</form>

			{searchText ? (
				<PromptCardList
					data={searchResults}
					handleTagClick={handleTagClick}
				/>
			) : (
				<PromptCardList data={posts} handleTagClick={handleTagClick} />
			)}
		</section>
	);
};

export default Feed;
