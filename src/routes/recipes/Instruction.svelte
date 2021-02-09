<script lang="ts">
	export let chunk: string;
	let completed = false;
</script>

<div class={completed ? "disabled" : "enabled"}>
	<i
		class="fas fa-check-circle px-1 cursor-pointer {completed
			? 'idisabled'
			: 'ienabled'}"
		on:click={() => (completed = !completed)}
	/>
	{@html chunk}
</div>

<style>
	.disabled {
		text-decoration: line-through;
		color: darkgray;
	}
	.idisabled {
		color: #10b981;
	}
	.ienabled {
		color: darkgray;
	}
</style>
