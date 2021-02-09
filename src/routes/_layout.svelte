<script lang="ts">
	import Nav from "../components/Nav.svelte";

	export let segment: string;
</script>

<Nav />
<body class="bg-gray-100">
	<main class="m-auto p-0 relative box-border">
		<slot />
	</main>
</body>
