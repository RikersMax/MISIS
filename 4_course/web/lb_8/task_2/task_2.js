import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';

controls = new FirstPersonControls( camera, renderer.domElement );
controls.movementSpeed = 10;
controls.lookSpeed = 0.125;
controls.lookVertical = true;

const clock = new THREE.Clock();
renderer.setAnimationLoop( animate );

function animate(){
	controls.update( clock.getDelta() );
	renderer.render( scene, camera );
	console.log(camera.position);
}

const mtlLoader = new MTLLoader();
mtlLoader.load('1.mtl', (mtl) => {
	const objLoader = new OBJLoader();
	objLoader.setMaterials(mtl);
	objLoader.load('1.obj', (obj) => {
		scene.add(obj);
	})
});