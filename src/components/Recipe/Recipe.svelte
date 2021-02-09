<script lang="ts">
	import Ingredients from "./Ingredients.svelte";

	import type { Recipe } from "../../types";
	import Instructions from "./Instructions.svelte";
	export let recipe: Recipe;
	const url = recipe.youtube;
</script>

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
