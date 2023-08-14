import React from 'react'

import SideMenuAnt from '@/UIComponent/SideMenuAnt.tsx';
import WebGPULogo from '@/assets/webGPU.svg';
import WebGLLogo from '@/assets/webgl.svg';
import ThreeLogo from '@/assets/three.svg';
import ShaderLogo from '@/assets/shader.svg';

type Props = {}

const UITest = (props: Props) => {
  let routers_2:LinkGroup = [
    {
      id: "three",
      name: "three.js",
      icon: <ThreeLogo />,
      children: [
        {
          name:"point",
          value:"point"
        },
        {
          name:"plane",
          value:"plane"
        },
        {
          name:"volume",
          value:"volume"
        },
      ]
    },
    {
      id: "ogl",
      name: "ogl",
      icon: <WebGLLogo/>
    },
    {
      id: "webgl",
      name: "webGL",
      icon: <WebGLLogo/>
    },
    {
      id: "webgpu",
      name: "webGPU",
      icon: <WebGPULogo/>
    },
    {
      id: "shader",
      name: "shader",
      icon: <ShaderLogo/>
    },
  ];

  return (
    <div className='flex'>
      <div className='h-screen bg-black w-[70px]'>
      </div>
      <SideMenuAnt links={routers_2} />
    </div>
  )
}

export default UITest