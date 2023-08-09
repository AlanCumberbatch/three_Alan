import {
  Link,
  Outlet,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useEffect, useState } from "react";

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, CubeIcon } from "@heroicons/react/24/outline"
import webGPULogo from '@/assets/webGPU.svg';
import webGLLogo from '@/assets/webgl.svg';
import ThreeLogo from '@/assets/three.svg';
import shaderLogo from '@/assets/shader.svg';
import { color } from "framer-motion";
// import {
//   HomeModernIcon,
//   UserGroupIcon,
//   AcademicCapIcon,
// } from "@heroicons/react/24/solid";

// export async function action() {
//   const contact = await createContact();
//   // return { contact };
//   return redirect(`/contacts/${contact.id}/edit`);
// }

// export async function loader({ request }) {
// export async function loader() {
//   // 用于收集当前所有的 一级 route
//   // const url = new URL(request.url);
//   // const q = url.searchParams.get("q");
//   let routers = [
//     {
//       id: "three",
//       name:"three.js"
//     }
//   ];// [{id: 'vjdfn9f', createdAt: 1691474990684}, ... ]
//   return { routers };
// }


const Root = () => {
  const [siderBarOpen, setSiderBarOpen] = useState(true);
  let routers:Array<{}> = [
    {
      id: "three",
      name:"three.js"
    },
    {
      id: "webgl",
      name:"webGL"
    },
  ];// [{id: 'vjdfn9f', createdAt: 1691474990684}, ... ]
  // const { routers } = useLoaderData();
  // const { contacts, q } = useLoaderData();
  // const navigation = useNavigation();
  // const submit = useSubmit();

  // const searching =
  //   navigation.location &&
  //   new URLSearchParams(navigation.location.search).has(
  //     "q"
  //   );

  // useEffect(() => {
  //   document.getElementById("q").value = q;
  // }, [q]);

  const siderDrawer = ()=>{
    setSiderBarOpen(!siderBarOpen)
    console.log('%c [ siderBarOpen ]-66', 'font-size:13px; background:pink; color:#bf2c9f;', siderBarOpen)
  }

  return (
    // <div>
    <div className="flex flex-row w-screen h-screen">
      <div id="sidebar" className="absolute min-h-fit py-3" >
        {/* <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                submit(event.currentTarget.form);
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching}/>
            <div className="sr-only "  aria-live="polite"  ></div>
          </Form>
          // use React Router "action" instead HTML form action
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div> */}
        <nav>
          {/* {routers.length ? (
            <ul>
              {routers.map((router) => (
                <li key={router.id} >
                  <NavLink
                    to={`${router.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                          : ""

                    }
                  >
                      {router.name ? (
                        <>
                        {router.id == "three"
                          ? <CubeIcon className="w-12 h-8" />
                          : router.id == "webgl"
                            ?

                        }
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )} */}
          <ul className=" min-w-fit w-96">
            <li key="three" >
              <NavLink to="three" >
                <img src={ThreeLogo} className="w-12 h-8 text-red-500 fill-slate-500" alt="" />
              </NavLink>
            </li>
            <li key="webgl" >
              <NavLink to="webgl" >
                <img src={webGLLogo} className="w-12 h-8" alt="" />
              </NavLink>
            </li>
            <li key="webgpu" >
              <NavLink to="webgpu" >
                <img src={webGPULogo} className="w-12 h-8" alt="" />
              </NavLink>
            </li>
            <li key="shader" >
              <NavLink to="shader" >
                <img src={shaderLogo} className="w-12 h-8" alt="" />
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* <div className="rounded-md flex justify-end p-0">
          <div className="text-white bg-black p-1 rounded-[50%] m-0" onClick={siderDrawer}>
            {siderBarOpen ? (
              <ChevronDoubleLeftIcon className="w-6 h-6 " />
            ): (
              <ChevronDoubleRightIcon className="w-6 h-6 " />
            )
            }
          </div>
        </div> */}
      </div>
      <div
        className="w-full flex-1"
        // className={
        //   navigation.state === "loading" ? "loading" : ""
        // }
      >
        <Outlet />
      </div>
    </div>
  )
}

export default Root