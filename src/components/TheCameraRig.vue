<script setup>
import { ref } from "vue";
import "../aframe/disable-in-vr.js";
import "../aframe/hide-in-vr.js";
import "../aframe/simple-navmesh-constraint.js";
import "../aframe/blink-controls.js";
import "../aframe/physx-grab.js";
import { dates } from "../store/game.js";

// if VR
const VR =
	AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()
		? true
		: false;

document.addEventListener("DOMContentLoaded", function () {
	if (!VR) {
		document.querySelector("#vranswers").setAttribute("visible", "false");
	} else {
		document.querySelector(".desktopanswers").setAttribute("visible", "false");
	}
});
</script>

<template>
	<a-entity
		id="camera-rig"
		movement-controls="camera: #head;"
		disable-in-vr="component: movement-controls;"
		position="0 0 0"
	>
		<a-entity
			id="head"
			look-controls="pointerLockEnabled: true"
			simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.63;"
			disable-in-vr="component: simple-navmesh-constraint;"
			camera
			position="0 1.63 0"
		>
			<a-entity
				id="cursor"
				geometry="primitive: circle; radius: 0.001;"
				material="shader: flat; color: white;"
				cursor
				raycaster="far: 4; objects: [clickable]; showLine: false;"
				position="0 0 -0.1"
				disable-in-vr="component: raycaster; disableInAR: false;"
				hide-in-vr="hideInAR: false"
			></a-entity>
			<a-entity id="dummy-hand-right" position="0.3 -0.4 -0.5"></a-entity>
			<a-entity id="dummy-hand-left" position="-0.3 -0.4 -0.5"></a-entity>

			<a-entity id="vranswers" visible="true">
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
					<a-text :value="`${dates[0]}`" scale="0.3 0.3 0.3" position="-0.1 0 0.02">
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
					><a-text :value="`${dates[1]}`" scale="0.3 0.3 0.3" position="-0.1 0 0.02">
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
					><a-text :value="`${dates[3]}`" scale="0.3 0.3 0.3" position="-0.1 0 0.02">
					</a-text>
				</a-box>
			</a-entity>
		</a-entity>

		<a-entity
			id="hand-left"
			hand-controls="hand: left"
			blink-controls="
          cameraRig: #camera-rig;
          teleportOrigin: #head;
          collisionEntities: [data-role='nav-mesh'];
          snapTurn: false;
        "
			position="0 1.5 0"
			physx-grab
		>
			<a-sphere
				id="hand-left-collider"
				radius="0.02"
				visible="false"
				physx-body="type: kinematic; emitCollisionEvents: true"
			>
			</a-sphere>
		</a-entity>

		<a-entity
			id="hand-right"
			hand-controls="hand: right"
			laser-controls="hand: right"
			raycaster="far: 4; objects: [clickable]; showLine: true; direction: 0 -1 0;"
			position="0 1.5 0"
			physx-grab
		>
			<a-sphere
				id="hand-right-collider"
				radius="0.02"
				visible="false"
				physx-body="type: kinematic; emitCollisionEvents: true"
			>
			</a-sphere>
		</a-entity>
	</a-entity>
</template>
