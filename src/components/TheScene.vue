<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import Berlin from "./Berlin.vue";
import Temp from "./Temp.vue";
import TheTeather from "./TheTeather.vue";
import Final from "./Final.vue";

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
	fog="type: linear; color: #d5c7e8; near: 7;far: 50; "
	>
		<a-assets @loaded="allAssetsLoaded = true">
			<!-- Assets -->
			<a-asset-item id="berlin" src="assets/berlin.glb"></a-asset-item>
			<a-asset-item id="theater" src="assets/theater.glb"></a-asset-item>
			<a-asset-item id="mirror" src="assets/mirror_b.glb"></a-asset-item>
			<a-asset-item id="empty_room" src="assets/room.glb"></a-asset-item>
			<a-asset-item id="house" src="assets/house.glb"></a-asset-item>
			<a-asset-item id="road" src="assets/road.glb"></a-asset-item>

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

		<a-assets>
			<img id="sky" src="../images/sky.jpg">
		</a-assets>
		<a-sky src="#sky"></a-sky>

		<template v-if="allAssetsLoaded">
			<Berlin />
			<Final />
			<Temp />
			<TheTeather />
		</template>

		<TheCameraRig />
	</a-scene>
</template>
