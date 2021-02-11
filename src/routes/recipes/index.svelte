<script context="module">
	import data from "../../data";
</script>

<script lang="ts">
	import slugify from "../../../node_modules/slugify/slugify";
	import type { Recipe as RecipeType } from "../../types";
	import { current } from "../../stores";
	import RecipeCardComponent from "../../components/RecipeCard/RecipeCardComponent.svelte";
	const recipes: RecipeType[] = data;
	const recipe = recipes[0];
	current.set("recipes");
	let searchTerm: string = "";
	$: filteredList = recipes.filter(
		(item) =>
			item.recipeName.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
			-1
	);
</script>

<svelte:head>
	<title>Svelte Recipes - Recipes</title>
</svelte:head>

<main>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
		<div class="max-w-lg w-full lg:max-w-xs mx-auto pb-8">
			<label for="search" class="sr-only">Search</label>
			<div class="relative">
				<div
					class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
				>
					<!-- Heroicon name: search -->
					<svg
						class="h-5 w-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<input
					bind:value={searchTerm}
					id="search"
					name="search"
					class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					placeholder="Search"
					type="search"
				/>
			</div>
		</div>
		<ul
			class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			{#each filteredList as recipe}
				<a
					rel="prefetch"
					href="recipes/{slugify(recipe.recipeName).toLowerCase()}"
				>
					<RecipeCardComponent {recipe} /></a
				>
			{/each}
		</ul>
	</div>
</main>
