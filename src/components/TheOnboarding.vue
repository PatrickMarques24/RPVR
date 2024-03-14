<script setup>
import { ref } from "vue";

defineProps({
	loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
	showOnboarding.value = false;
	if (
		AFRAME.utils.device.checkHeadsetConnected() &&
		!AFRAME.utils.device.isMobile()
	) {
		document.querySelector("a-scene").enterVR();
	}
}

// Définition des technologies incluses
const technologyAssets = [];

// Définition des assets 3D inclus
const asset3D = [
	{
		name: "Living Room",
		link: "https://skfb.ly/6TAqI",
		author: {
			name: "Carlos Miguel Vieira Maciel",
			link: "https://sketchfab.com/Carlos.Miguel.Vieira.Maciel",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},

		modifications: null,
	},
];

const imageAssets = [];
</script>

<template>
	<div id="onboarding" v-if="showOnboarding">
		<div>
			<h1>Time Machine</h1>
			<p v-if="!loaded">loading...</p>
			<button v-if="loaded" @click="enterScene()">Entrer dans le salon</button>
			<div class="licences">
				<section>
					<h2 class="warning">Attention</h2>
					<p class="warning">N'essayez pas de vous levez pendant l'expérience VR.</p>
				</section>
				<section>
					<h2>Movement modes support</h2>
					<p>
						Desktop <br />
						Keyboard for move (WASD or Arrows keys) + Mouse for look control (Drag and
						drop)
					</p>

					<p>
						Mobile
						<br />
						1x Finger touch to go forward + 2x Fingers touch to go backward + Gaze
						cursor for click
					</p>

					<p>
						VR Headset
						<br />
						AR/VR walk + Teleport (Grip for grab and laser for click) + Gaze cursor
						for click
					</p>
				</section>
				<section>
					<dl>
						<dt>
							<h2>Included</h2>
						</dt>

						<dt>
							<h3 v-if="asset3D.length == 1" class="asset-type">3D asset</h3>
							<h3 v-if="asset3D.length > 1" class="asset-type">3D assets</h3>
						</dt>

						<!-- Affichage dynamique des données des assets 3D -->
						<template v-for="(asset, index) in asset3D" :key="index">
							<dt>
								<a :href="asset.link" target="_blank">{{ asset.name }}</a>
							</dt>
							<dd>
								by
								<a :href="asset.author.link" target="_blank">{{ asset.author.name }}</a>
								under
								<a :href="asset.license.link" target="_blank">{{
									asset.license.name
								}}</a>
							</dd>
							<dd v-if="asset.modifications">
								Modifications : {{ asset.modifications }}
							</dd>
						</template>

						<dt>
							<h3 v-if="imageAssets.length == 1" class="asset-type">Image</h3>
							<h3 v-if="imageAssets.length > 1" class="asset-type">Images</h3>
						</dt>

						<!-- Affichage dynamique des données des images -->
						<template v-for="(asset, index) in imageAssets" :key="index">
							<dt>
								<a :href="asset.link" target="_blank">{{ asset.name }}</a>
							</dt>
							<dd>
								by
								<a :href="asset.author.link" target="_blank">{{ asset.author.name }}</a>
								under
								<a :href="asset.license.link" target="_blank">{{
									asset.license.name
								}}</a>
							</dd>
							<dd v-if="asset.modifications">
								Modifications : {{ asset.modifications }}
							</dd>
						</template>
					</dl>
				</section>
				<section>
					<h2>Attributions</h2>
					<p>
						This work is created by
						<a target="_blank" href="https://github.com/PatrickMarques24"
							>Patrick Marques Meliciano</a
						>
						based on code provided by
						<a target="_blank" href="https://github.com/Chabloz">Nicolas Chabloz</a>
						during a
						<a href="https://github.com/Chabloz/VR-A-Frame">VR course at HEIG-VD</a>.
					</p>
				</section>
			</div>
		</div>
	</div>
</template>

<style scoped>
.warning {
	color: #ffc107;
}

h1 {
	font-size: 1.5rem;
}

h2 {
	font-size: 1.3rem;
}

a {
	color: #eee;
	text-decoration: none;
}

.licences {
	margin: 2rem 0;
	font-size: 1rem;
	text-align: left;
}

.licences dt {
	padding-top: 0.75rem;
	font-size: 0.9rem;
	font-weight: bold;
}

.licences dd {
	margin-left: 0;
	font-size: 0.8rem;
}

#onboarding {
	position: absolute;
	top: 0;
	left: 0;
	background-color: #333;
	color: #ccc;
	width: 100vw;
	height: 100vh;
	padding: 1rem;
	font-family: monospace;
	z-index: 10000;
	overflow: auto;
}

#onboarding > * {
	margin: 0 auto;
	max-width: 50rem;
	width: calc(100vw - 10rem);
	text-align: center;
	border-radius: 0.3rem;
	padding: 1rem;
	font-size: 1.3rem;
}

#onboarding button {
	font-size: 1.3rem;
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
	background-color: white;
	color: black;
	border: none;
	cursor: pointer;
}

/* .asset-type {
	margin-top: 20px;
} */
</style>
