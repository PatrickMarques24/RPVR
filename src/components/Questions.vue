<script setup>
import { ref } from "vue";
import "../aframe/teleport-camera-rig.js";
import { setCurrentNextScene } from "../store/game.js";
defineProps({
	reponses: { default: [] },
    nextScene: { default: undefined},
});
function tp(rep, next) {
    if (rep.isAnswer) {
        if (next == undefined) {
            return `x: 0; y: -400; z: 0; handleRotation: true; rot: 0;`
        }
        setCurrentNextScene(next);
        return `x: 0; y: -200; z: 0; handleRotation: true; rot: 0;`
    }
    return "-"
}
</script>

<template>
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
			id="answerzone1"
			position="-0.35 -0.15 0.01"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
			material="color: orange"
            :teleport-camera-rig="`${tp(reponses[0], nextScene)}`"
		>
			<a-text :value="`${reponses[0].year}`" scale="0.3 0.3 0.3" position="-0.075 0 0.02">
			</a-text>
		</a-box>
		<a-box
			width="0.2"
			height="0.2"
			depth="0.005"
			opacity="0.8"
			clickable
			id="answerzone2"
			position="-0.125 -0.15 0.01"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
			material="color: orange"
            @click="() => click(this)"
            :teleport-camera-rig="`${tp(reponses[1], nextScene)}`"
			><a-text :value="`${reponses[1].year}`" scale="0.3 0.3 0.3" position="-0.075 0 0.02">
			</a-text>
		</a-box>
		<a-box
			width="0.2"
			height="0.2"
			depth="0.005"
			opacity="0.8"
			clickable
			id="answerzone3"
			position="0.125 -0.15 0.01"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
			material="color: orange"
            @click="() => click(this)"
            :teleport-camera-rig="`${tp(reponses[2], nextScene)}`"
		>
			<a-text :value="`${reponses[2].year}`" scale="0.3 0.3 0.3" position="-0.1 0 0.02">
			</a-text>
		</a-box>
		<a-box
			width="0.2"
			height="0.2"
			depth="0.005"
			opacity="0.8"
			clickable
			id="answerzone4"
			position="0.35 -0.15 0.01"
			scale="0.5 0.3 0.7"
			rotation="0 0 0"
			material="color: orange"
            @click="() => click(this)"
			:teleport-camera-rig="`${tp(reponses[3], nextScene)}`"
			><a-text :value="`${reponses[3].year}`" scale="0.3 0.3 0.3" position="-0.1 0 0.02">
			</a-text>
		</a-box>
</template>