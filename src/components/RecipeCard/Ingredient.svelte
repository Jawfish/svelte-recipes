<script lang="ts">
	export let amount: string;
	export let name: string;
</script>

<div class="wrapper">
	<span class="amount">
		{amount != undefined ? amount : ""}
	</span>
	<span class="name">
		{name}
	</span>
</div>
