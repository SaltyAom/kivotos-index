<script>
	import PageTransition from '../layouts/page-transition.svelte'
	import { crossfade } from '../services/crossfade'

	import millennium from '../data/millennium.json'
	import { parseName } from '../services/parse'

	const [send, receive] = crossfade
</script>

<PageTransition class="flex flex-col gap-4 w-full p-4 sm:p-12">
	<figure class="w-48 h-16 bg-black">
		<picture>
			<source srcset="/game-development-department.webp" type="image/webp" />
			<source srcset="/game-development-department.png" type="image/png" />
			<img
				class="w-full"
				src="/game-development-department.png"
				alt="Game Development Department logo"
				title="Game Development Department"
			/>
		</picture>
	</figure>

	<main id="students" class="grid w-full">
		{#each millennium as { name, profile } (name)}
			<a href="/data/{parseName(name)}" aria-label="View {name} profile">
				<article class="flex flex-col gap-2 w-full p-4 border">
					<figure
						out:send={{ key: `${name}-profile` }}
						in:receive={{ key: `${name}-profile` }}
						class="w-full"
					>
						<picture>
							<source srcset={profile.replace('png', 'webp')} type="image/webp" />
							<source srcset={profile} type="image/png" />
							<img src={profile} alt={name} />
						</picture>
					</figure>
					<h2
						class="text-lg"
						out:send={{ key: `${name}-name` }}
						in:receive={{ key: `${name}-name` }}
					>
						{name}
					</h2>
				</article>
			</a>
		{/each}
	</main>
</PageTransition>

<style>
	#students {
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
	}

	@screen sm {
		#students {
			grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
		}
	}
</style>
