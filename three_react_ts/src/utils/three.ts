import * as THREE from 'three';

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
  const plane_material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
  const plane = new THREE.Mesh(plane_gep, plane_material);
  plane.position.x = 0;
  plane.position.y = 0;
  plane.position.z = 0;
  scene.add(plane);


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
  // render
  // animation
  // return false;
}
