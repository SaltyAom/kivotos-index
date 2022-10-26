<script>
	import { navigating } from '$app/stores'
	import { fade } from 'svelte/transition'

	/**
	 * ? Can't be apply to global +layout.svelte
	 * Because `navigating` is applied to individual page
	 *
	 * Global layout isn't affected by `navigating`
	 */
</script>

<main class="{navigating ? 'absolute' : ''} {$$props.class}" out:fade={{ duration: 100 }}>
	<slot />
</main>

<style>
	.transition-layout {
		will-change: opacity;
	}
</style>
