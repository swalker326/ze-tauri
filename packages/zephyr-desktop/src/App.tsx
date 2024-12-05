import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "./components/ui/button";
//@ts-expect-error - its there
import RemoteApp from "vite-remote/App";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<main className="container">
			<h1>Welcome to Tauri + React</h1>
			<p>Click on the Tauri, Vite, and React logos to learn more.</p>
			<div className="border border-red-500 w-full min-h-10">
				<h1>remote app</h1>
				<RemoteApp />
			</div>

			<form
				className="row"
				onSubmit={(e) => {
					e.preventDefault();
					greet();
				}}
			>
				<input
					id="greet-input"
					onChange={(e) => setName(e.currentTarget.value)}
					placeholder="Enter a name..."
				/>
				<Button type="submit">Greet</Button>
			</form>
			<p>{greetMsg}</p>
		</main>
	);
}

export default App;
