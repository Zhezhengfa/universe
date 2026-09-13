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
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();