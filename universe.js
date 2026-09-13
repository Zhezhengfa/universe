const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050520);
scene.fog = new THREE.Fog(0x050520, 20, 80);
const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth / window.innerHeight, 0.1, 200
);
camera.position.set(0, 8, 18);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const sunLight = new THREE.PointLight(0xffdd44, 2.5, 100);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);
const sun = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xffdd22 })
);
scene.add(sun);
const earthMoonGroup = new THREE.Group();
scene.add(earthMoonGroup);
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0x4488dd })
);
earth.position.x = 6;
earthMoonGroup.add(earth);
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 24, 24),
    new THREE.MeshStandardMaterial({ color: 0xaaaaaa })
);
moon.position.x = 1.8;
earth.add(moon);
function animate ( ) { requestAnimationFrame (animate);
    controls.update ();
    sun.rotation.y += 0.003;
    earthMoonGroup.rotation.y+=0.008;
    earth.rotation.y+=0.02;
    moon.rotation.y+=0.04;
    renderer. render (scene, camera);
} animate ();