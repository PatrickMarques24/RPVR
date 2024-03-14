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

let coordonnees = `x: 0; y: -100; z: 0; handleRotation: true; rot: 0;`;

function changeBackground(color) {
	document
		.querySelector("a-scene")
		.setAttribute("background", `color: ${color}`);
}
</script>

<template>
	<a-entity
		gltf-model="#berlin"
		rotation="0 0 -1"
		position="0 16 -6"
		scale="2 1 1"
	>
	</a-entity>

	<!--a-entity
		gltf-model="#house"
		rotation="0 0 0"
		position="25 -220 -208"
		scale="10 10 10"
	>
	</a-entity-->

	<a-box
		rotation="0 0 0"
		position="1 1 -2"
		scale="0.6 0.6 0.6"
		color="blue"
		clickable
		@click="changeBackground('black')"
		:teleport-camera-rig="`${coordonnees}`"
		bind-position="target: #head; offset: 1 1 -1"
	></a-box>

	<a-entity
		material="color: grey"
		geometry="primitive: plane; height: 50; width: 50"
		rotation="-90 0 0"
		data-role="nav-mesh"
		scale="10 10 10"
	>
	</a-entity>
	<!--a-entity
		material="color: black"
		geometry="primitive: plane; height: 50; width: 50"
		rotation="0 0 0"
		data-role="nav-mesh"
		scale="1.7 0.5 1"
		position="0 0 -20"
	>
	</a-entity-->
	<a-entity
		gltf-model="#road"
		geometry="primitive: plane; height: 50; width: 50"
		rotation="0 0 0"
		position="0 0.1 -1"
		scale="8 8 8"
	>
	</a-entity>

	<a-entity
		id=".desktopanswers"
		visible="true"
		position="-0.2 1.8 -0.7"
		rotation="0 45 0 "
		material="color : #5555FF; opacity: 0.8;"
		geometry="primitive: plane; height: 0.4; width: 1"
		side="double"
	>
		<Questions
			:reponses="dates[0]"
			:nextScene="{ x: 0, y: -100, z: 0 }"
			question="Quand a eu lieu la chute du mur de Berlin ?"
		></Questions>
	</a-entity>

	<!-- Navigation mesh -->
	<!-- <a-entity
		id="originalnavmesh"
		geometry="primitive: plane; height: 5; width: 5"
		position="0 0.01 1.5"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		
		physx-body="type: static"
	></a-entity> -->
</template>
