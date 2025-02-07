import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.138/build/three.module.js';
import { OBJLoader } from '../libs/examples/jsm/loaders/OBJLoader.js'; // Correct path to OBJLoader.js
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.138/examples/jsm/controls/OrbitControls.js';

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('modelCanvas') });
renderer.setSize(window.innerWidth / 2, window.innerHeight);

// Add lighting to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

// Load the 3D model (Man.obj)
const loader = new OBJLoader();
loader.load(
    '../assets/Man.obj',  // Path to the .obj file
    function (object) {
        object.scale.set(1, 1, 1); // Adjust scale if necessary
        object.position.set(0, -1, 0); // Adjust position if necessary
        scene.add(object);
    },
    function (xhr) {
        console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    function (error) {
        console.error('Error loading model:', error);
    }
);

// Set camera position
camera.position.z = 5;

// Controls (Optional)
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Required for damping
    renderer.render(scene, camera);
}

animate();

// Responsive resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    camera.aspect = window.innerWidth / 2 / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Initialize Flickity
document.addEventListener('DOMContentLoaded', () => {
    const flkty = new Flickity('.gallery', {
        wrapAround: true,
        autoPlay: true, // Optional: Automatically play the carousel
        pageDots: false // Optional: Hide page dots
    });
});
