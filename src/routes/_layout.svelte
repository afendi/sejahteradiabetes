<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	
</style>

<Tailwindcss />

<Nav {segment}/>

<main class="container mx-auto flex flex-col md:flex-row items-center my-1 md:my-0">
	<slot></slot>
</main>
