import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {}

const ThreePage = (props: Props) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  const canvas_w = window.innerWidth - 100; // 600;
  const canvas_h = window.innerHeight- 80 ; //600;
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // const camera = new THREE.PerspectiveCamera(75, canvas_w / canvas_h, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setSize(canvas_w, canvas_h);
    sceneRef.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      sceneRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  })

  return (
    <div className='w-full h-full bg-slate-800'>
      <div className='w-full h-full'>
        {/* <HText>Three in React</HText> */}
        <div ref={sceneRef} />
      </div>
    </div>
  )
}

export default ThreePage