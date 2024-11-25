import * as THREE from 'three';

const h = window.innerHeight;
const w = window.innerWidth;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0000aa);
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
    color: 0xaa00bb
});

const cube = new THREE.Mesh(geometry, material);
cube.scale.setScalar(2);
scene.add(cube);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += Math.random()/25;
    cube.rotation.y += Math.random()/100;
    cube.rotation.z += Math.random()/50;
    renderer.render(scene, camera);
}

animate();
