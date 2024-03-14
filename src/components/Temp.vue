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

import { currentNextScene, dates } from "../store/game.js";

function changeBackground(color) {
	document
		.querySelector("a-scene")
		.setAttribute("background", `color: ${color}`);
}
</script>

<template>
	<a-entity
		gltf-model="#empty_room"
		rotation="0 0 0"
		position="3 -200.1 -1"
		scale="0.05 0.05 0.05"
	>
	</a-entity>
	<a-entity
		gltf-model="#mirror"
		rotation="0 0 0"
		position="0 -200.1 -3"
		scale="2 2 1"
	>
	</a-entity>
	<a-text
		rotation="0 0 0"
		position="-0.8 -196.4 -2.8"
		scale=".5 .5 .5"
		color="red"
		value="La bonne reponse etait 1989"
	>
	</a-text>
	<a-text
		rotation="0 0 0"
		position="-0.8 -196.6 -2.8"
		scale=".5 .5 .5"
		color="red"
		value="Vous avez ete vieilli de 22 ans"
	>
	</a-text>
	<a-entity
		gltf-model="#flowers"
		rotation="0 0 0"
		position="-8.1 -200.1 -5.5"
		scale="2 2 2"
	>
	</a-entity>
	<a-entity
		gltf-model="#flowers"
		rotation="0 90 0"
		position="-8.1 -200.1 -9.5"
		scale="2 2 2"
	>
	</a-entity>
	<a-entity
		gltf-model="#picture_frame"
		rotation="0 0 0"
		position="-9.1 -198.5 -8.5"
		scale="0.01 0.01 0.01"
	>
		<a-image 
			src="assets/pics/rp.png"
			rotation="0 90 0"
			position="10 120 100"
			scale="200 220 200">
		</a-image>
	</a-entity>

	<a-entity
		gltf-model="#picture_frame"
		rotation="0 180 0"
		position="2 -198.5 -3.5"
		scale="0.01 0.01 0.01"
	>
		<a-image 
			src="assets/pics/rp.png"
			rotation="0 90 0"
			position="10 120 100"
			scale="200 220 200">
		</a-image>
	</a-entity>

	<a-entity
		gltf-model="#sofa"
		rotation="0 180 0"
		position="-8.1 -200.1 -7.5"
		scale="0.04 0.04 0.04"
	>
	</a-entity>
	
	<a-entity
		material="color: grey"
		position="0 -200.2 0"
		geometry="primitive: plane; height: 5; width: 15"
		rotation="-90 0 0"
		data-role="nav-mesh"
	>
	</a-entity>

	<a-image 
		src="assets/pics/miguel.jpg"
		position="0 -198.4 -2.95"
		scale="1 2 1">
	</a-image>

	<a-box
		width="0.8"
		height="0.2"
		depth="0.005"
		opacity="0.8"
		clickable
		id="answerzone"
		position="0.35 -198.2 -0.5"
		scale="0.5 0.3 0.7"
		rotation="0 0 0"
		visible="true"
		material="color: orange"
		:teleport-camera-rig="`x: ${currentNextScene.x}; y: ${currentNextScene.y}; z: ${currentNextScene.z}; handleRotation: true; rot: 0;`"
		><a-text :value="`Passer a la scene suivante`" scale="0.3 0.3 0.3" position="-0.4 0 0.02">
		</a-text>
	</a-box>

	<!-- Navigation mesh -->
	<!-- <a-entity
		id="originalnavmesh"
		geometry="primitive: plane; height: 5; width: 5"
		position="0 0.01 1.5"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="true"
		physx-body="type: static"
	></a-entity> -->
</template>
