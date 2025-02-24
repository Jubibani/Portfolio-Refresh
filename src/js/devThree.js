// Using CDN imports for Three.js and its modules
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.138/build/three.module.js';
import { OBJLoader } from 'https://cdn.jsdelivr.net/npm/three@0.138/examples/jsm/loaders/OBJLoader.js';
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
    '../../assets/Man.obj',  // Adjusted for file in assets folder, from src/js/
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

// Setup OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // for damping
    renderer.render(scene, camera);
}

animate();

// Responsive resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    camera.aspect = window.innerWidth / 2 / window.innerHeight;
    camera.updateProjectionMatrix();
});
