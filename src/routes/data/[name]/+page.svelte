<script lang="ts">
	import PageTransition from '../../../layouts/page-transition.svelte'
	import { crossfade } from '../../../services/crossfade'

	import type { PageData } from './$types'

	const [send, receive] = crossfade

	export let data: PageData

	$: ({
		student: { name, profile, school, club }
	} = data)
</script>

<PageTransition class="flex flex-col justify-center items-center w-full h-screen p-4">
	<article class="flex flex-col sm:flex-row gap-8 sm:w-auto p-6 sm:p-12 bg-gray-100 rounded-lg">
		<a href="/">
			<figure
				out:send={{ key: `${name}-profile` }}
				in:receive={{ key: `${name}-profile` }}
				class="w-full max-w-xs filter drop-shadow-xl"
			>
				<picture>
					<source srcset={profile.replace('png', 'webp')} type="image/webp" />
					<source srcset={profile} type="image/png" />
					<img src={profile} alt={name} />
				</picture>
			</figure>
		</a>

		<header>
			<h2
				class="text-3xl font-medium"
				out:send={{ key: `${name}-name` }}
				in:receive={{ key: `${name}-name` }}
			>
				{name}
			</h2>

			<p class="text-base font-light text-gray-500">{club}</p>

			<figure class="w-48 h-16 bg-black my-2">
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

			<hr class="my-4" />

			<p class="text-base text-gray-600">{school}</p>
		</header>
	</article>
</PageTransition>
