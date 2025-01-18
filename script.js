// GSAP Animations
gsap.from("nav ul li", { opacity: 0, stagger: 0.3, y: -20, duration: 1 });
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1.5 });
gsap.from(".hero p", { opacity: 0, y: 20, delay: 0.5, duration: 1.5 });
gsap.from("section h2", { opacity: 0, y: 50, stagger: 0.3, duration: 1, delay: 0.5 });

// Three.js Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x6c63ff });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(20, 20, 20);
scene.add(light);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate();
