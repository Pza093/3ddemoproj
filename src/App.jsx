import { useEffect, useState } from 'react';
import * as THREE from 'three';
import SceneInit from './lib/SceneInit';
import TextureSelector from './TextureSelector';



function App() {
  const [floorTexture, setFloorTexture] = useState('/assets/Wood051_Color.jpg');
  const [leftWallTexture, setLeftWallTexture] = useState('/assets/Wood051_2K_Normal.jpg');
  const [backWallTexture, setBackWallTexture] = useState('/assets/Wood051_2K.jpg');
  const [rightWallTexture, setRightWallTexture] = useState('/assets/Wood051_Roughness.jpg');
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // Load textures based on user choices
    const floorTextureLoader = new THREE.TextureLoader().load(floorTexture);
    const leftWallTextureLoader = new THREE.TextureLoader().load(leftWallTexture);
    const backWallTextureLoader = new THREE.TextureLoader().load(backWallTexture);
    const rightWallTextureLoader = new THREE.TextureLoader().load(rightWallTexture);
    // Create materials using the loaded textures
    const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTextureLoader });
    const leftwallMaterial = new THREE.MeshStandardMaterial({ map: leftWallTextureLoader });
    const rightwallMaterial = new THREE.MeshStandardMaterial({ map: rightWallTextureLoader });
    const backwallMaterial = new THREE.MeshStandardMaterial({ map: backWallTextureLoader });

    // Create floor and walls using the materials
    const floorGeometry = new THREE.BoxGeometry(40, 0.5, 17);
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.position.set(5, -9, -9);
    test.scene.add(floorMesh);

    const leftwallGeometry = new THREE.BoxGeometry(0.5, 20, 17);
    const leftWallMesh = new THREE.Mesh(leftwallGeometry, leftwallMaterial);
    leftWallMesh.position.set(-15, 1, -9);
    test.scene.add(leftWallMesh);

    const backwallGeometry = new THREE.BoxGeometry(40, 20, 0.5);
    const backWallMesh = new THREE.Mesh(backwallGeometry, backwallMaterial);
    backWallMesh.position.set(5, 1, -17);
    test.scene.add(backWallMesh);

    // const sphereGeometry = new THREE.SphereGeometry(4);
    // const sphereMaterial = new THREE.MeshStandardMaterial({ map: floorTextureLoader });
    // const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // sphereMesh.position.set(9, 5);
    // test.scene.add(sphereMesh);
  }, [floorTexture, leftWallTexture, backWallTexture]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignContent: 'center'}}>
      <div style={{ marginRight: '20px', display: 'flex', gap: 30 }}>
        <h1 class="mt-5">Choose The Textures: </h1>
        <TextureSelector
          label="Floor Texture"
          texture={floorTexture}
          options={[
            { value: "/assets/Wood051_2K_Normal.jpg", label: "Floor Color 1" },
            { value: "/assets/Wood051_2K.jpg", label: "Floor color 2" },
            { value: "/assets/Wood051_Color.jpg", label: "Floor color 3" },
            { value: "/assets/Wood051_Roughness.jpg", label: "Floor color 4" },
          ]}
          onChange={setFloorTexture}
        />

        <TextureSelector
          label="Left Wall Texture"
          texture={leftWallTexture}
          options={[
            { value: "/assets/Wood051_2K_Normal.jpg", label: "Wall Color 1" },
            { value: "/assets/Wood051_2K.jpg", label: "Left Wall color 2" },
            { value: "/assets/Wood051_Color.jpg", label: "Left Wall color 3" },
            { value: "/assets/Wood051_Roughness.jpg", label: "Left Wall color 4" },
          ]}
          onChange={setLeftWallTexture}
        />

        <TextureSelector
          label="Back Wall Texture"
          texture={backWallTexture}
          options={[
            { value: "/assets/Wood051_2K_Normal.jpg", label: "Back Wall Color 1" },
            { value: "/assets/Wood051_2K.jpg", label: "Back Wall color 2" },
            { value: "/assets/Wood051_Color.jpg", label: "Back Wall color 3" },
            { value: "/assets/Wood051_Roughness.jpg", label: "Back Wall color 4" },
          ]}
          onChange={setBackWallTexture}
        />
      </div>
      <canvas id="myThreeJsCanvas" style={{ flex: 1, alignItems: 'center' }} />
    </div>
    
  );
}

export default App;
