<script lang="ts">
	import type { Recipe } from "../../types";
	import { onDestroy } from "svelte";
	import Ingredient from "./Ingredient.svelte";
	import { fade } from "svelte/transition";

	export let recipe: Recipe;
</script>

<div
	id="card"
	class="bg-white shadow overflow-hidden sm:rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
>
	<h3
		class="text-lg leading-6 text-gray-700  bg-white py-4 text-center font-bold truncate px-2"
	>
		{recipe.recipeName}
	</h3>
	<div
		class="h-48 background-image "
		style="background-image: url('{recipe.thumbnail}')"
	/>
</div>

<style>
	.background-image {
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 80%;
		/* filter: grayscale(0.3); */
		transition: all 0.3s ease;
	}
	#card:hover > .background-image {
		opacity: 100%;
		/* filter: grayscale(0); */
	}
</style>
