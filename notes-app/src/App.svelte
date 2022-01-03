<script>
	import Editor from './components/Editor.svelte'
	import Sidebar from './components/Sidebar.svelte'
</script>

<main>
	<Sidebar />
	<Editor />
</main>

<style>
	main {
		max-width: 1000px;
		margin: 1rem auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
	}
</style>