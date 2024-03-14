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
		position="3 -400.1 -1"
		scale="0.05 0.05 0.05"
	>
	</a-entity>

	<a-entity
		gltf-model="#mirror"
		rotation="0 0 0"
		position="0 -400.1 -3"
		scale="2 2 1"
	>
	</a-entity>
	<a-image 
		src="assets/pics/miguel2.jpg"
		position="0 -398.4 -2.95"
		scale="1 2 1">
		
	</a-image>
	<a-entity
		material="color: grey"
		position="0 -400.2 0"
		geometry="primitive: plane; height: 5; width: 15"
		rotation="-90 0 0"
		data-role="nav-mesh"
	>
	</a-entity>

	<a-entity
		id=".desktopanswers"
		visible="true"
		scale="2 1.7 2"
		position="-1.4 -398.2 -0.7"
		rotation="0 45 0 "
	>
		<a-text
			width="1"
			height="0.2"
			depth="0.005"
			clickable
			id="questionzone"
			position="-0.75 0.45 -0.5"
			rotation="0 0 0"
			value="Recapitulatif"
			visible="true"
		>
		</a-text>
		<a-image src="assets/pics/recap.png"></a-image>

		
	</a-entity>

	<!-- <a-box
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
		><a-text :value="`Passer à la scene suivante`" scale="0.3 0.3 0.3" position="-0.4 0 0.02">
		</a-text>
	</a-box> -->

	<!-- <a-entity
		id=".desktopanswers"
		visible="true"
		scale="2 2 2"
		position="0 1.4 -0.1"
		rotation="0 45 0 "
	>
		<a-text
			width="1"
			height="0.2"
			depth="0.005"
			clickable
			id="questionzone"
			position="-0.25 0.35 -0.5"
			rotation="0 0 0"
			value="Quand a eu lieu cet evenement ?"
			visible="true"
		>
		</a-text>

		<a-box
			width="0.2"
			height="0.2"
			depth="0.005"
			opacity="0.8"
			clickable
			id="answerzone"
			position="-0.35 0.2 -0.5"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
			visible="true"
			material="color: orange"
		>
			<a-text :value="`${dates[0]}`" scale="0.3 0.3 0.3" position="-0.075 0 0.02">
			</a-text>
		</a-box>
		<a-box
			width="0.2"
			height="0.2"
			depth="0.005"
			opacity="0.8"
			clickable
			id="answerzone"
			position="-0.125 0.2 -0.5"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
			visible="true"
			material="color: orange"
			><a-text :value="`${dates[1]}`" scale="0.3 0.3 0.3" position="-0.075 0 0.02">
			</a-text>
		</a-box>
		<a-box
			width="0.2"
			height="0.2"
			depth="0.005"
			opacity="0.8"
			clickable
			id="answerzone"
			position="0.125 0.2 -0.5"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
			visible="true"
			material="color: orange"
		>
			<a-text :value="`${dates[2]}`" scale="0.3 0.3 0.3" position="-0.1 0 0.02">
			</a-text>
		</a-box>
		<a-box
			width="0.2"
			height="0.2"
			depth="0.005"
			opacity="0.8"
			clickable
			id="answerzone"
			position="0.35 0.2 -0.5"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
			visible="true"
			material="color: orange"
			:teleport-camera-rig="`x: 0; y: -100; z: 0; handleRotation: true; rot: 0;`"
			@click="changeBackground('black')"
			><a-text :value="`${dates[3]}`" scale="0.3 0.3 0.3" position="-0.1 0 0.02">
			</a-text>
		</a-box>
	</a-entity> -->

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
