import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


function createWireframe(scene, geometry, color=0xff0000) {
  // 创建边的几何体
  const wireframeGeometry = new THREE.WireframeGeometry(geometry);
  // 创建边的材质
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: color });
  // 创建边
  const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
  // 将实体和边添加到场景
  scene.add(wireframe);
}
/*
Point:

*/
export const demoPoint = (scene) => {
  // scene
  // camera
  // entity
  const point_geometry = new THREE.BufferGeometry();
  const point_positions = new Float32Array([0, 0, 0]); // 单个点的位置
  point_geometry.setAttribute('position', new THREE.BufferAttribute(point_positions, 3));
  const point_material = new THREE.PointsMaterial({ color: 0x00ff00, size: 0.1 });
  const point = new THREE.Points(point_geometry, point_material);
  scene.add(point);
  // render
  // animation
  // return false;
}
/*
Line:
    Extras / Curves
      LineCurve -- A curve representing a 2d line segment.
      LineCurve3
      SplineCurve
    Materials
      LineBasicMaterial
      LineDashedMaterial
*/
export const demoLine = (scene) => {
  // scene
  // camera
  // entity
  const points_line = [];
    points_line.push( new THREE.Vector3( - 1, 1, 0 ) );
    points_line.push( new THREE.Vector3( 1, 1, 0 ) );
    points_line.push( new THREE.Vector3( 1, -1, 0 ) );
    points_line.push( new THREE.Vector3( -1, -1, 0 ) );
    points_line.push( new THREE.Vector3( - 1, 1, 0 ) );
    const geometry_line = new THREE.BufferGeometry().setFromPoints( points_line );
    //create a blue LineBasicMaterial
    const material_line = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const line = new THREE.Line( geometry_line, material_line );
    scene.add(line);


    // 创建线的曲线（LineCurve）
    const curve_2d = new THREE.LineCurve(
      new THREE.Vector2(-1, 0), // 起点
      new THREE.Vector2(1, 0)   // 终点
    );
    const material_curve_2d = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const points_curve_2d = curve_2d.getPoints(50); // 获取曲线上的点
    const geometry_curve_2d = new THREE.BufferGeometry().setFromPoints(points_curve_2d);
    const line_2d = new THREE.Line(geometry_curve_2d, material_curve_2d);
    scene.add(line_2d);
  // render
  // animation
  // return false;
}

/*
Plane:

*/
export const demoPlane = (scene) => {
  // scene
  // camera
  // entity
  // 面
  const plane_gep = new THREE.PlaneGeometry( 1, 1 );
  const plane_material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide, wireframe: false} );
  const plane = new THREE.Mesh(plane_gep, plane_material);
  plane.position.x = 0;
  plane.position.y = 0;
  plane.position.z = 0;
  scene.add(plane);

  createWireframe(scene, plane_gep);


  // BufferGeometry
  const geometry_BufferGeometry = new THREE.BufferGeometry();
  const vertices = new Float32Array( [
    -1.0, -1.0,  1.0, // v0
     1.0, -1.0,  1.0, // v1
     1.0,  1.0,  1.0, // v2
    -1.0,  1.0,  1.0, // v3
  ] );
  const indices = [
    0, 1, 2,
    2, 3, 0,
  ];
  geometry_BufferGeometry.setIndex( indices );
  geometry_BufferGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
  const material_BufferGeometry = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
  const mesh_BufferGeometry = new THREE.Mesh(geometry_BufferGeometry, material_BufferGeometry);
  mesh_BufferGeometry.position.x = 2;
  mesh_BufferGeometry.position.y = 0;
  mesh_BufferGeometry.position.z = 0;
  scene.add(mesh_BufferGeometry);// TODO: 此 Geometry 背面没有颜色

  createWireframe(scene, geometry_BufferGeometry, 0x000000);// 不行

  // render
  // animation
  // return false;
}

/*
Box:

*/
export const demoBox = (scene) => {
  // scene
  // camera
  // entity
  const box_geometry = new THREE.BoxGeometry(1, 1, 1);
  const box_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const box = new THREE.Mesh(box_geometry, box_material);
  // 设置初始位置
  box.position.x = 0;
  box.position.y = 0;
  box.position.z = 0;
  scene.add(box);

  createWireframe(scene, box_geometry, 0x000000);
  // render
  // animation
  // return false;
}

/*
Sphere:

*/
export const demoSphere = (scene) => {
  // scene
  // camera
  // entity
  const radius = .5; // 半径
  const widthSegments = 32; // 水平分段数
  const heightSegments = 16; // 垂直分段数
  const geometry_Sphere = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  const material_Sphere = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  const sphere = new THREE.Mesh(geometry_Sphere, material_Sphere);
  // 设置初始位置
  sphere.position.x = 4;
  sphere.position.y = 2;
  sphere.position.z = 0;
  scene.add(sphere);

  createWireframe(scene, geometry_Sphere, 0x000000);

  // render
  // animation
  // return false;
}


/*
  Heart:


*/
export const demoHeart = (scene) => {
  // const containerRef = useRef(null);

  // useEffect(() => {
    // 创建场景
    // const scene = new THREE.Scene();

    // // 创建相机
    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   containerRef.current.clientWidth / containerRef.current.clientHeight,
    //   0.1,
    //   1000
    // );
    // camera.position.z = 5;

    // // 创建渲染器
    // const renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.setSize(
    //   containerRef.current.clientWidth,
    //   containerRef.current.clientHeight
    // );
    // containerRef.current.appendChild(renderer.domElement);

    // 创建心形几何体
    const bufferGeometry = new THREE.BufferGeometry();
    const vertices = new Float32Array( [
       0.5 * 4,   0.5  * 4, 0.0,
       0.5 * 4,  -0.5  * 4, 0.0,
      -0.5 * 4,  -0.5  * 4, 0.0,
      -0.5 * 4,   0.5  * 4, 0.0,
    ] );
    const indices = [
      0, 1, 2,
      0, 2, 3,
      0, 3, 2,
      0, 2, 1,
    ];
    const sts = new Float32Array([
      0.5,   0.5,
      0.5,  -0.5,
     -0.5,  -0.5,
     -0.5,   0.5,
    ]);
    bufferGeometry.setIndex( indices );
    bufferGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    bufferGeometry.setAttribute( 'uv', new THREE.BufferAttribute( sts, 2 ) );
    // const geometry = new THREE.ShapeGeometry();
    // bufferGeometry.bezierCurveTo
    console.log('%c [ bufferGeometry.bezierCurveTo ]-228', 'font-size:13px; background:pink; color:#bf2c9f;', bufferGeometry.bezierCurveTo)

    // 创建材质
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const vs = `
      varying vec4 vPosition;
      void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          vPosition = gl_Position;
      }
    `;
    const fs = `
      varying vec4 vPosition;
      void main() {
          gl_FragColor = vec4(vPosition.x+0.5,vPosition.y+0.5,vPosition.z+0.5,1.0);
      }
    `;
    var material_custome = new THREE.ShaderMaterial( {
        vertexShader: vs,// document.getElementById( 'vs' ).textContent.trim(),
        fragmentShader: fs,//document.getElementById( 'fs' ).textContent.trim()
    });

    // 成功了，但是手机上看效果不好
    const vs_heart = `
      // precision mediump float;
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const fs_heart = `
      uniform float iGlobalTime;
      uniform vec2 iResolution;

      varying vec2 vUv;

      float shape(float x){
        x = min(abs(x), 1.0);
        float b = 0.5 - x;
        float y = log(b)/log(2.718282)+10.0;
        y = y / 10.0;
        return y;
      }

      void main() {
        float iTime = iGlobalTime;

        vec2 pos = vUv*2.0;///iResolution.xy;// - 1.0;
        pos.y -= 0.15;
        pos.x *= 0.75;

        float i = sin( 23.0 * 3.1415926 * pos.x * sin( iTime * 0.5 ) + iTime * 30.0 ) * ( sin( iTime * 5.0) * 0.1 + 1.0 );
        float p = ( sin( abs( pos.x ) * 2.0 * 3.1415926 )+ shape( pos.x ) ) *0.3;
        float q = abs(pos.x)-shape(pos.x);
        float f = max(i,0.0)*p - min(i,0.0)*q;

        float d = smoothstep(0.3, -0.3, abs(f - pos.y)) * 4.0;

        gl_FragColor = vec4(0.0);
        gl_FragColor.r = d;
        gl_FragColor.a = 1.0;
      }
    `;
    var uniforms = {
      iGlobalTime: {
        type: 'f',
        value: 1.0
      },
      iResolution: {
        type: 'v2',
        value: new THREE.Vector2()
      }
    }
    uniforms.iResolution.value.x = 1 // window.innerWidth;
    uniforms.iResolution.value.y = 1 // window.innerHeight;
    const heart_material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vs_heart,
      fragmentShader: fs_heart,
    });

    //
    const vs_heart2 = `
    // precision mediump float;
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `;
    const fs_heart2 = `
      uniform float iGlobalTime;
      uniform vec2 iResolution;

      varying vec2 vUv;

      // float iTime = iGlobalTime;

      // #if HW_PERFORMANCE==0
      #define AA 1
      // #else
      // #define AA 2
      // #endif

      float hash1( float n )
      {
          return fract(sin(n)*43758.5453123);
      }

      const float PI = 3.1415926535897932384626433832795;
      const float PHI = 1.6180339887498948482045868343656;

      vec3 forwardSF( float i, float n)
      {
          float phi = 2.0*PI*fract(i/PHI);
          float zi = 1.0 - (2.0*i+1.0)/n;
          float sinTheta = sqrt( 1.0 - zi*zi);
          return vec3( cos(phi)*sinTheta, sin(phi)*sinTheta, zi);
      }

      float almostIdentity( float x, float m, float n )
      {
          if( x>m ) return x;
          float a = 2.0*n - m;
          float b = 2.0*m - 3.0*n;
          float t = x/m;
          return (a*t + b)*t*t + n;
      }

      vec2 map( vec3 q )
      {
          q *= 100.0;

          vec2 res = vec2( q.y, 2.0 );

          float r = 15.0;
          q.y -= r;
          float ani = pow( 0.5+0.5*sin(6.28318*iGlobalTime + q.y/25.0), 4.0 );
          q *= 1.0 - 0.2*vec3(1.0,0.5,1.0)*ani;
          q.y -= 1.5*ani;
          float x = abs(q.x);

          // x = almostIdentity( x, 1.0, 0.5 ); // remove discontinuity (https://iquilezles.org/articles/functions)

          float y = q.y;
          float z = q.z;
          y = 4.0 + y*1.2 - x*sqrt(max((20.0-x)/15.0,0.0));
          z *= 2.0 - y/15.0;
          float d = sqrt(x*x+y*y+z*z) - r;
          d = d/3.0;
          if( d<res.x ) res = vec2( d, 1.0 );

          res.x /= 100.0;
          return res;
      }

      vec2 intersect( in vec3 ro, in vec3 rd )
      {
        const float maxd = 1.0;

        vec2 res = vec2(0.0);
        float t = 0.2;
        for( int i=0; i<300; i++ )
        {
          vec2 h = map( ro+rd*t );
          if( (h.x<0.0) || (t>maxd) ) break;
          t += h.x;
          res = vec2( t, h.y );
        }

        if( t>maxd ) res=vec2(-1.0);
        return res;
      }

      vec3 calcNormal( in vec3 pos )
      {
        vec3 eps = vec3(0.005,0.0,0.0);
        return normalize( vec3(
          map(pos+eps.xyy).x - map(pos-eps.xyy).x,
          map(pos+eps.yxy).x - map(pos-eps.yxy).x,
          map(pos+eps.yyx).x - map(pos-eps.yyx).x )
        );
      }

      float calcAO( in vec3 pos, in vec3 nor )
      {
        float ao = 0.0;
        for( int i=0; i<64; i++ )
        {
            vec3 kk;
            vec3 ap = forwardSF( float(i), 64.0 );
            ap *= sign( dot(ap,nor) ) * hash1(float(i));
            ao += clamp( map( pos + nor*0.01 + ap*0.2 ).x*20.0, 0.0, 1.0 );
        }
        ao /= 64.0;

        return clamp( ao, 0.0, 1.0 );
      }
      vec3 render( in vec2 p )
      {
        //-----------------------------------------------------
        // camera
        //-----------------------------------------------------

        float an = 0.1*iGlobalTime;

        vec3 ro = vec3(0.4*sin(an),0.25,0.4*cos(an));
        vec3 ta = vec3(0.0,0.15,0.0);
        // camera matrix
        vec3 ww = normalize( ta - ro );
        vec3 uu = normalize( cross(ww,vec3(0.0,1.0,0.0) ) );
        vec3 vv = normalize( cross(uu,ww));
        // create view ray
        vec3 rd = normalize( p.x*uu + p.y*vv + 1.7*ww );

        //-----------------------------------------------------
        // render
        //-----------------------------------------------------

        vec3 col = vec3(1.0,0.9,0.7);

        // raymarch
        vec3 uvw;
        vec2 res = intersect(ro,rd);
        float t = res.x;

        if( t>0.0 )
        {
            vec3 pos = ro + t*rd;
            vec3 nor = calcNormal(pos);
            vec3 ref = reflect( rd, nor );
            float fre = clamp( 1.0 + dot(nor,rd), 0.0, 1.0 );

            float occ = calcAO( pos, nor ); occ = occ*occ;

            if( res.y<1.5 ) // heart
            {
                col = vec3(0.9,0.02,0.01);
                col = col*0.72 + 0.2*fre*vec3(1.0,0.8,0.2);

                vec3 lin  = 4.0*vec3(0.7,0.80,1.00)*(0.5+0.5*nor.y)*occ;
                lin += 0.8*fre*vec3(1.0,1.0,1.00)*(0.6+0.4*occ);
                col = col * lin;
                col += 4.0*vec3(0.8,0.9,1.00)*smoothstep(0.0,0.4,ref.y)*(0.06+0.94*pow(fre,5.0))*occ;

                col = pow(col,vec3(0.4545));
            }
            else // ground
            {
                col *= clamp(sqrt(occ*1.8),0.0,1.0);
            }
        }
        col = clamp(col,0.0,1.0);
        return col;
      }

      void main() {

        #if AA>1
            vec3 col = vec3(0.0);
            for( int m=0; m<AA; m++ )
            for( int n=0; n<AA; n++ )
            {
              vec2 px = gl_FragColor + vec2(float(m),float(n))/float(AA);
              vec2 p = (2.0*px-iResolution.xy)/iResolution.y;
              col += render( p );
            }
            col /= float(AA*AA);

        #else
            vec2 p = (2.0*gl_FragColor.xy-iResolution.xy)/iResolution.y;
            vec3 col = render( p );
        #endif

            vec2 q = gl_FragColor.xy/iResolution.xy;
            col *= 0.2 + 0.8*pow(16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y),0.2);

            gl_FragColor = vec4( col, 1.0 );
      }
    `;
    const heart_material2 = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vs_heart2,
      fragmentShader: fs_heart2,
    });

    // 创建心形网格
    const heart = new THREE.Mesh(bufferGeometry, heart_material);
    heart.startTime = Date.now()
    heart.uniforms = uniforms;
    heart.position.set(0, 0, 0)
    scene.add(heart);

    // // 渲染函数
    // const animate = () => {
    //   requestAnimationFrame(animate);

    //   // 旋转心形
    //   heart.rotation.x += 0.01;
    //   heart.rotation.y += 0.01;

    //   // renderer.render(scene, camera);
    // };

    // animate();

    // // 组件卸载时清除资源
    // return () => {
    //   containerRef.current.removeChild(renderer.domElement);
    //   geometry.dispose();
    //   material.dispose();
    // };
  // }, []);
  return heart;
};

/*
  Font:
  import { FontLoader } from 'three/addons/loaders/FontLoader.js';
	import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
*/
export const demoFont = (scene) => {
  THREE.Cache.enabled = true;// ?

	// let container;
	// let camera, cameraTarget, scene, renderer;
	let group, textMesh1, textMesh2, textGeo, materials;

	let firstLetter = true;

	let text = 'Happy',
		bevelEnabled = true,
		font = undefined,
		fontName = 'optimer', // helvetiker, optimer, gentilis, droid sans, droid serif
		fontWeight = 'bold'; // normal bold

	const height = 20,
		size = 70,
		hover = 30,
		curveSegments = 4,
		bevelThickness = 2,
		bevelSize = 1.5;

	const mirror = true;

	const fontMap = {
		'helvetiker': 0,
		'optimer': 1,
		'gentilis': 2,
		'droid/droid_sans': 3,
		'droid/droid_serif': 4
  };

  const weightMap = {
    'regular': 0,
    'bold': 1
  };

  const reverseFontMap = [];
  const reverseWeightMap = [];

  for ( const i in fontMap ) reverseFontMap[ fontMap[ i ] ] = i;
  for ( const i in weightMap ) reverseWeightMap[ weightMap[ i ] ] = i;

  let targetRotation = 0;
  let targetRotationOnPointerDown = 0;

  let pointerX = 0;
  let pointerXOnPointerDown = 0;

  let windowHalfX = window.innerWidth / 2;

  let fontIndex = 1;
  // before init

  // LIGHTS

  const dirLight = new THREE.DirectionalLight( 0xffffff, 0.4 );
  dirLight.position.set( 0, 0, 1 ).normalize();
  scene.add( dirLight );

  const pointLight = new THREE.PointLight( 0xffffff, 4.5, 0, 0 );
  pointLight.color.setHSL( Math.random(), 1, 0.5 );
  pointLight.position.set( 0, 100, 90 );
  scene.add( pointLight );

  materials = [
    new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
    new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
  ];

  group = new THREE.Group();
  group.position.y = 5;
  group.position.x = 2;

  scene.add( group );


  loadFont();


  function loadFont() {
    console.log("1111111111")

    const loader = new FontLoader();
    loader.load( 'fonts/' + fontName + '_' + fontWeight + '.typeface.json', function ( response ) {
      console.log('%c [ fontName ]-637', 'font-size:13px; background:pink; color:#bf2c9f;', fontName)
    // loader.load( '@/assets/fonts/helvetiker_regular.typeface.json', function ( response ) {
      font = response;
      refreshText();
    });

  }
  function createText() {
    textGeo = new TextGeometry( text, {
      font: font,
      size: size,
      height: height,
      curveSegments: curveSegments,
      bevelThickness: bevelThickness,
      bevelSize: bevelSize,
      bevelEnabled: bevelEnabled
    } );
    textGeo.computeBoundingBox();
    const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
    textMesh1 = new THREE.Mesh( textGeo, materials );
    textMesh1.position.x = centerOffset;
    textMesh1.position.y = hover;
    textMesh1.position.z = 0;
    textMesh1.rotation.x = 0;
    textMesh1.rotation.y = Math.PI * 2;

    group.add( textMesh1 );
    if ( mirror ) {
      textMesh2 = new THREE.Mesh( textGeo, materials );
      textMesh2.position.x = centerOffset;
      textMesh2.position.y = - hover;
      textMesh2.position.z = height;
      textMesh2.rotation.x = Math.PI;
      textMesh2.rotation.y = Math.PI * 2;
      group.add( textMesh2 );
    }
  }
  function refreshText() {
    console.log("222222222222")

    group.remove( textMesh1 );
    if ( mirror ) group.remove( textMesh2 );
    if ( ! text ) return;
    createText();
  }

  function onPointerDown( event ) {
    if ( event.isPrimary === false ) return;
    pointerXOnPointerDown = event.clientX - windowHalfX;
    targetRotationOnPointerDown = targetRotation;

    document.addEventListener( 'pointermove', onPointerMove );
    document.addEventListener( 'pointerup', onPointerUp );
  }

  function onPointerMove( event ) {
    if ( event.isPrimary === false ) return;
    pointerX = event.clientX - windowHalfX;
    targetRotation = targetRotationOnPointerDown + ( pointerX - pointerXOnPointerDown ) * 0.02;
  }

  function onPointerUp() {
    if ( event.isPrimary === false ) return;
    document.removeEventListener( 'pointermove', onPointerMove );
    document.removeEventListener( 'pointerup', onPointerUp );
  }
}