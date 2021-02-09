<script lang="ts">
	import Instruction from "./Instruction.svelte";

	export let instructions: string;
	const chunks: string[] = instructions
		.split("\n")
		.filter((i) => i.length > 1);
</script>

<ol class="list-inside">
	{#each chunks as chunk}
		<li class="py-3">
			<Instruction {chunk} />
		</li>
	{/each}
</ol>
