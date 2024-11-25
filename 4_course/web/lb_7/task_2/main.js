import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const h = window.innerHeight;
const w = window.innerWidth;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xccbbaa);
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 10;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );
controls.listenToKeyEvents(window);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({
      color: 0xaa00bb
  });
const cube = new THREE.Mesh(geometry, material);
cube.scale.setScalar(2);
scene.add(cube);

const flor = new THREE.Mesh(
    new THREE.PlaneGeometry(10,10),
    new THREE.MeshStandardMaterial({
    color: 0xbb0066,
    metalness: 0,
    roughness: 0.5,
}),);

flor.position.set(0,-5,0)
flor.rotation.x = -1;
scene.add(flor);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
dirLight.position.set(15,15,8);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1024,1024);
scene.add(dirLight);

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    console.log(camera.position);
}

animate();

