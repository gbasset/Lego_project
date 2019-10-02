import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r108/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r108/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r108/examples/jsm/loaders/GLTFLoader.js';

function main() {
  const canvas = document.querySelector('#canvas3d');
  const renderer = new THREE.WebGLRenderer({ alpha: true, canvas });
  const geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { transparent: true } );
  const mesh = new THREE.Mesh( geometry, material );
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far,);
  camera.position.set(0, 10, 20);

  const scene = new THREE.Scene();
  canvas.background = new THREE.Color({ alpha: true });
  

  {
    const planeSize = 40;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('/3d_obj/deathstar.jpg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);
  }

  {
    const color = 0xFFFFFF;
    const color2 = 0xdee5ff;
    const intensity = 1.2;
    const light = new THREE.DirectionalLight(color2, intensity);
    light.position.set(-0.3, 9, 10);
    scene.add(light);
    scene.add(light.target);
    const intensity2 = 1.2;
    const light2 = new THREE.DirectionalLight(color2, intensity2);
    light2.position.set(-0.3, 8, -10);
    scene.add(light2);
    scene.add(light2.target);
    const light3 = new THREE.DirectionalLight(color2, intensity2);
    light3.position.set(-7.9, 8, 0);
    scene.add(light3);
    scene.add(light3.target);
    const light4 = new THREE.DirectionalLight(color2, intensity2);
    light4.position.set(10, 10, 2);
    scene.add(light4);
    scene.add(light4.target);
    const intensity3 = 1;
    const light5 = new THREE.DirectionalLight(color2, intensity3);
    light5.position.set(10, -10, 2);
    scene.add(light5);
    scene.add(light5.target);
  }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/3d_obj/finalExport.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      

      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 1, boxSize, boxCenter, camera);

    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    const SPEED = 0.003;

    function rotateCube() {
    scene.rotation.y -= SPEED;
}
    rotateCube()
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
