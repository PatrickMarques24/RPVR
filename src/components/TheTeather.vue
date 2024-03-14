<script setup>
// Vue

// A-Frame
import "../aframe/bind-position.js";
import "../aframe/bind-rotation.js";
import "../aframe/clickable.js";
import "../aframe/life-like-automaton.js";
import "../aframe/a-ocean.js";
import "../aframe/teleport-camera-rig.js";
import "../aframe/simple-grab.js";
import "../aframe/proximity-trigger.js";
import "../aframe/physx-force-pushable.js";
import Questions from "./Questions.vue";

import { dates } from "../store/game.js";
</script>

<template>
	<a-entity
		gltf-model="#theater"
		rotation="0 180 0"
		position="0 -101 -0.25"
		scale="0.03 0.03 0.03"
	>
	</a-entity>
	<a-text
		value="iPhone"
		position="-1.5 -95 -15"
		rotation="0 0 0"
		scale="5 5 5"
	></a-text>

	<!-- Navigation mesh -->
	<a-entity
		id="originalnavmesh"
		geometry="primitive: plane; height: 1; width: 1.5"
		position="0 -100 0"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="true"
	></a-entity>

	<a-entity
		class="desktopanswers"
		visible="true"
		scale="2 2 2"
		position="-1.5 -98 -0.7"
		rotation="0 45 0 "
	>
		<Questions
			:reponses="dates[1]"
			:nextScene="undefined"
		></Questions>
	</a-entity>
</template>
