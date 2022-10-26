import { expoOut } from 'svelte/easing'
import { crossfade as svelteCrossfade } from 'svelte/transition'

export const crossfade = svelteCrossfade({
	duration: 600,
	easing: expoOut
})
