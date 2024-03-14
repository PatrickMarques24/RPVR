<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import Berlin from "./Berlin.vue";
import TheTeather from "./TheTeather.vue";

defineProps({
	scale: Number,
	overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
	<a-scene
		background="color: skyblue;"
		:webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
		xr-mode-ui="XRMode: xr"
		physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
	>
		<a-assets @loaded="allAssetsLoaded = true">
			<!-- Assets -->
			<a-asset-item id="berlin" src="assets/berlin.glb"></a-asset-item>
			<a-asset-item id="theater" src="assets/theater.glb"></a-asset-item>

			<!-- Audio -->
			<!-- <a-asset-item
				id="theme-music"
				response-type="arraybuffer"
				src="assets/sounds/main.mp3"
				preload="auto"
			></a-asset-item>
		-->

			<!-- Images -->
			<!--<img
				id="room-physic-out-texture"
				:src="`assets/main-room-from-physic-room.png`"
			/>-->
		</a-assets>

		<template v-if="allAssetsLoaded">
			<Berlin />
			<TheTeather />
		</template>

		<TheCameraRig />
	</a-scene>
</template>
