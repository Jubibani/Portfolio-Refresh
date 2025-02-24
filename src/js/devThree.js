// Using CDN imports for Three.js and its modules
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('modelCanvas') });
renderer.setSize(window.innerWidth / 2, window.innerHeight);

renderer.setClearColor(0xE6D5AC);  // Light brown/beige background
renderer.shadowMap.enabled = true;  // Enable shadows


// Replace existing lighting setup with this:
// Main directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Ambient light for overall scene brightness
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

// Add hemisphere light for natural lighting
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x404040, 1);
scene.add(hemisphereLight);

// Load the 3D model (Man.obj)
const loader = new OBJLoader();
const isGitHubPages = window.location.hostname.includes('github.io');
const modelPath = isGitHubPages ? '/Portfolio-Refresh/assets/Man.obj' : '../assets/Man.obj';

loader.load(
    modelPath,
    function (object) {
        object.scale.set(0.8, 0.8, 0.8);
        object.position.set(0, -4, 0);
        object.rotation.y = Math.PI / 4;
        
        // Add this to handle materials
        object.traverse((child) => {
            if (child.isMesh) {
                child.material.side = THREE.DoubleSide;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        
        scene.add(object);
    },
    function (xhr) {
        console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    function (error) {
        console.error('Error loading model:', error);
    }
);

// Set camera position for better view
camera.position.set(0, 1, 8); // Moved back and slightly up
camera.lookAt(0, 0, 0);

// Setup OrbitControls with constraints
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 3;
controls.maxDistance = 10;
controls.enableZoom = true;        // Allow zooming
controls.enablePan = true;         // Allow panning
controls.enableRotate = true;      // Allow rotation
controls.autoRotate = false;       // Optional: auto-rotate the model
controls.autoRotateSpeed = 2.0;    // Speed of auto-rotation if enabled
controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,      // Left click to rotate
    MIDDLE: THREE.MOUSE.DOLLY,     // Middle click/wheel to zoom
    RIGHT: THREE.MOUSE.PAN         // Right click to pan
};

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
