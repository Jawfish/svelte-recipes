<script lang="ts">
	import data from "../data";
	import { current } from "../stores";
	current.set("home");
	import slugify from "slugify";
	import type { Recipe as RecipeType } from "../types";
	import RecipeCardComponent from "../components/RecipeCard/RecipeCardComponent.svelte";
	const cards: number = 9;
	const mainRecipe: RecipeType =
		data[Math.floor(Math.random() * data.length)];
	const rando: number = Math.floor(Math.random() * data.length - cards);
	const additionalRecipes: RecipeType[] = data.slice(rando, rando + cards);
</script>

<svelte:head>
	<title>Svelte Recipes - Home</title>
</svelte:head>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
	<div class="max-w-7xl mx-auto">
		<a
			rel="prefetch"
			href="recipes/{slugify(mainRecipe.recipeName).toLowerCase()}"
		>
			<RecipeCardComponent recipe={mainRecipe} big={true} />
		</a>

		<div class="mt-8">
			<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each additionalRecipes as additionalRecipe}
					<a
						rel="prefetch"
						href="recipes/{slugify(
							additionalRecipe.recipeName
						).toLowerCase()}"
					>
						<RecipeCardComponent recipe={additionalRecipe} />
					</a>
				{/each}
			</ul>
		</div>
	</div>
</div>
