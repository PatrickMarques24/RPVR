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
		id=".desktopanswers"
		visible="true"
		scale="2 2 2"
		position="-0.5 -98.5 -0.1"
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
	</a-entity>
</template>
