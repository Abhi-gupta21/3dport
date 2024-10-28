
import * as three from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('canvas');

// create scene
const scene = new three.Scene();
scene.background = new three.Color('#F0F0F0');

// camera
const camera = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// object
const geometry = new three.DodecahedronGeometry();
const material = new three.MeshLambertMaterial({color: '#468585', emissive: '#468585'});
const dodecahedron = new three.Mesh(geometry, material);

const boxgeometry = new three.BoxGeometry(2, 0.1, 2);
const boxmaterial = new three.MeshStandardMaterial({color: '#B4B4B3', emissive: '#B4B4B3'});
const box = new three.Mesh(boxgeometry, boxmaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// light
const light = new three.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);

// renderer
const renderer = new three.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


// orbit conrtols
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;


// Animations
/**
 * Animates the scene by rotating the objects in the scene and then renders the scene.
 */
function animate() {
  requestAnimationFrame(animate);
  
  // Rotate the dodecahedron and the box
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  
  box.rotation.y += 0.01;
  
  // Update the orbit controls
  controls.update();
  
  // Render the scene
  renderer.render(scene, camera);
};


// window resizing
window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();