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
		position="-50 9.8 -6"
		scale="0.6 0.6 0.6"
	>
	</a-entity>
	<a-entity
		gltf-model="#berlin"
		rotation="0 0 -1"
		position="-33 9.8 -6"
		scale="0.6 0.6 0.6"
	>
	</a-entity>
	<a-entity
		gltf-model="#berlin"
		rotation="0 0 -1"
		position="38 9.8 -6"
		scale="0.6 0.6 0.6"
	>
	</a-entity>
	<a-entity
		gltf-model="#berlin"
		rotation="0 0 -1"
		position="3 9.8 -6"
		scale="0.6 0.6 0.6"
	>
	</a-entity>
	<a-entity
		gltf-model="#berlin"
		rotation="0 0 -1"
		position="-15 9.8 -6"
		scale="0.6 0.6 0.6"
	>
	</a-entity>
	<a-entity
		gltf-model="#berlin"
		rotation="0 0 -1"
		position="20 9.8 -6"
		scale="0.6 0.6 0.6"
	>
	</a-entity>

	<a-entity
		gltf-model="#house"
		rotation="0 0 0"
		position="25 -220 -208"
		scale="10 10 10"
	>
	</a-entity>

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
	<a-entity
		material="color: black"
		geometry="primitive: plane; height: 50; width: 50"
		rotation="0 0 0"
		data-role="nav-mesh"
		scale="1.7 0.5 1"
		position="0 0 -20"
	>
	</a-entity>
	<a-entity
		gltf-model="#road"
		geometry="primitive: plane; height: 50; width: 50"
		rotation="0 0 0"
		position="0 0.1 0"
		scale="8 8 8"
	>
	</a-entity>

	<a-entity
		id=".desktopanswers"
		visible="true"
		position="-0.2 1.8 -0.7"
		rotation="0 45 0 "
		material="color :darkblue; opacity: 0.8;"
		geometry="primitive: plane; height: 0.4; width: 1"
	>
		<a-text
			width="1"
			height="0.2"
			depth="0.005"
			clickable
			id="questionzone"
			position="-0.25 0 0.01"
			rotation="0 0 0"
			value="Quand a eu lieu cet evenement ?"
		>
		</a-text>

		<a-box
			width="0.2"
			height="0.2"
			depth="0.005"
			opacity="0.8"
			clickable
			id="answerzone"
			position="-0.35 -0.15 0.01"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
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
			position="-0.125 -0.15 0.01"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
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
			position="0.125 -0.15 0.01"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
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
			position="0.35 -0.15 0.01"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
			material="color: orange"
			:teleport-camera-rig="`x: 0; y: -100; z: 0; handleRotation: true; rot: 0;`"
			@click="changeBackground('black')"
			><a-text :value="`${dates[3]}`" scale="0.3 0.3 0.3" position="-0.1 0 0.02">
			</a-text>
		</a-box>
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
