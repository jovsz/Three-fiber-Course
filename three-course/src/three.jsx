const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({corlor: "red"})
const cube = new THREE.Mesh(geometry, material)


scene.add(cube)
