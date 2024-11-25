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