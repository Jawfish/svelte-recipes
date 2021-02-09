<script context="module" lang="ts">
	import type { Recipe } from "../../types";
	import slugify from "../../../node_modules/slugify/slugify";
	import data from "../../data";
	import Ingredients from "../../Components/Recipe/Ingredients.svelte";
	import Instructions from "../../Components/Recipe/Instructions.svelte";
	let recipe: Recipe;
	export async function preload({ params }) {
		data.forEach((r) => {
			if (slugify(r.recipeName).toLowerCase() == params.slug) {
				recipe = r;
			}
		});
		return recipe;
	}
</script>

<svelte:head>
	<title>{recipe.recipeName}</title>
</svelte:head>

<div class="container mx-auto p-24 max-w-7xl">
	<h1 class="text-6xl font-bold pb-8">{recipe.recipeName}</h1>

	<div class="flex gap-10">
		<Ingredients ingredients={recipe.ingredients} />
		<Instructions instructions={recipe.instructions} />
	</div>
	<footer class="mx-auto w-full text-center text-gray-400 py-4">
		Source: {recipe.source}
	</footer>
</div>
