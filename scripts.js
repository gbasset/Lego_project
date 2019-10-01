import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r108/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r108/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r108/examples/jsm/loaders/GLTFLoader.js';

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  const mesh = new THREE.Mesh( geometry, material );
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far,);
  camera.position.set(0, 10, 20);

  const scene = new THREE.Scene();
  

  {
    const planeSize = 40;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('/examples/3d-obj-loader/assets/index.jpg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1.5;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 10, 2);
    scene.add(light);
    scene.add(light.target);
    const light2 = new THREE.DirectionalLight(color, intensity);
    light2.position.set(-5, -10, -5);
    scene.add(light2);
    scene.add(light2.target);
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
    gltfLoader.load('/examples/3d-obj-loader/assets/deathStarDef.gltf', (gltf) => {
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

    const SPEED = 0.01;

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
