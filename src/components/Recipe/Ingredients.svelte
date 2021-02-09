<script lang="ts">
	import { each } from "svelte/internal";
	import type { IngredientsEntity } from "../../types";

	export let ingredients: IngredientsEntity[];
</script>

<div class="flex flex-col">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div
				class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-4"
			>
				<table class="min-w-full divide-y divide-gray-200">
					{#each ingredients as ingredient}
						<tbody class="bg-white divide-y divide-gray-200">
							<tr>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
								>
									{ingredient.name}
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
								>
									{ingredient.amount}
								</td>
							</tr>
						</tbody>
					{/each}
				</table>
			</div>
		</div>
	</div>
</div>
