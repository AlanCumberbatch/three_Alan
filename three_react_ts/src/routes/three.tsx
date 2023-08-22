import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {demoPoint, demoLine, demoPlane, demoBox, demoSphere, demoHeart, demoFont} from '@/utils/three.ts'
import { demoThreeCamera,doubleCamera } from '@/utils/threeOfficalExample/camera.ts'


export async function loader({ request }) {
  // 用于收集当前所有的 一级 route
  const url = new URL(request.url);
  const arr = url.pathname.split('/');
  const type = arr[arr.length - 1];
  // const type = url.searchParams.get("q");
  return { type };
}

type Props = {}

const ThreePage = (props: Props) => {
  const { type } = useLoaderData();
  const sceneRef = useRef<HTMLDivElement>(null);
  // const [entities, setEntities] = useState([]);// 关于数组 是否使用 useState，这是个问题。

  const canvas_w = window.innerWidth - 100; // 600;
  const canvas_h = window.innerHeight - 80; //600;

  useEffect(() => {
    const scene = new THREE.Scene();

    let camera, renderer;
    if (type == "camera") {
      let { c, r } = demoThreeCamera(scene, sceneRef);
      // let { c, r } = doubleCamera(scene, sceneRef);
      camera = c;
      renderer = r;
    } else {
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      // const camera = new THREE.PerspectiveCamera(75, canvas_w / canvas_h, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // renderer.setSize(canvas_w, canvas_h);
      sceneRef.current?.appendChild(renderer.domElement);

      /*
        基本几何体：
          - [ ] 点
          - [ ] 线
          - [ ] 面
          - [x] 体
      */
      /*
        BoxGeometry(
          width : Float,
          height : Float,
          depth : Float,
          widthSegments : Integer,
          heightSegments : Integer,
          depthSegments : Integer
        )
      */
      let mesh;
      if (type == "point") {
        demoPoint(scene);
      } else if (type == "line") {
        demoLine(scene);
      } else if (type == "plane") {
        demoPlane(scene)
      } else if (type == "volume") {

        // 体
        // 1. Box
        demoBox(scene)

        // 2.Sphere
        demoSphere(scene);

      } else if (type == "heart") {
        mesh = demoHeart(scene)
      } else if (type == "font") {
        mesh = demoFont(scene)
      } else if (type == "1111") {

      }

      camera.position.z = 5;

      // 添加鼠标操作事件
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      const animate = function () {
        requestAnimationFrame(animate);

        // 可以在这里让模型动起来
        if (type == "heart") {
          var time = (Date.now() - mesh.startTime) / 1000;
          mesh.uniforms.iGlobalTime.value = time;
        }

        controls.update();

        renderer.render(scene, camera);
      };

      animate();

      window.addEventListener('resize', onWindowResize);
      function onWindowResize() {// can not be a arrow function

        renderer.setSize( window.innerWidth, window.innerHeight );

        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
      }
    }

    // const devicePerformance = getDevicePerformance();
    // console.log('%c [ devicePerformance ]-47', 'font-size:13px; background:pink; color:#bf2c9f;', devicePerformance)
    // // 根据性能设置不同的渲染参数
    // // const renderer = new THREE.WebGLRenderer();
    // if (devicePerformance < 0.5) {
    //   // 低性能设备，降低渲染质量
    //   renderer.setPixelRatio(0.5);
    // } else {
    //   // 高性能设备，提高渲染质量
    //   renderer.setPixelRatio(2);
    // }

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