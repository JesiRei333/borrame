import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav(props) {
  const [texto, setTexto] = useState("");
  const [token, setToken] = useState("");

  return (
    <nav
      id="navPricipal"
      className=" fixed flex justify-center bg-[rgb(245_245_245)] border-[1.5px] min-h-[55.990px] min-w-full align-middle "
    >
      <div
        id="contenedorNav"
        className="flex relative justify-center align-middle items-center "
      >
        <div
          id="contenedorNav1"
          className="flex justify-center align-middle max-h-[40px] max-w-[50px]  "
        >
          <div id="contenedorNav2" className="pr-[16px] md:hidden">
            <Image
              className=""
              src={"https://cdn-icons-png.flaticon.com/512/8637/8637657.png"}
              alt={"DEV Hamburguesa"}
              width={20}
              height={20}
            />
          </div>
        </div>

        <div id="contenedorNav3" className="pr-[16px]">
          <Link href="/">
            <div
              id="contenedorNav4"
              className="flex justify-center align-middle max-h-[40px] min-w-[50px]  "
            >
              <Image
                className=""
                src={
                  "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                }
                alt={"DEV Community"}
                width={50}
                height={40}
              />
            </div>
          </Link>
        </div>

        <div
          id="contenedorSerch"
          className=" hidden md:flex justify-center items-center align-middle w-[401.778px] h-[40px] pr-[16px] "
        >
          <div
            id=" contenedorNav4"
            className="flex justify-center align-middle pl-[6px] pr-[6px]  min-h-[23.962px]  w-[401.778px]  text-[23_23_23_1] text-[100%] border-2 border-[rgb(212_212_212)] hover:border-[rgb(47_58_178)]   rounded-md "
          >
            <input
              id="imputNav1"
              className=" justify-center align-middle min-h-[23.962px]  text-sm w-[401.778px] text-[rgb(23_23_23_1)] 
                text-[100%] pb-[6.500px] pt-[6.500px] pl-[8px] pr-[8px] boder-none outline-none rounded-md "
              type="text"
              placeholder="Serch..."
              autoComplete="off"
              aria-label="Serch term"
              onChange={(event) => {
                props.setTexto(event.target.value);
              }}
            />

            <button
              id="botonNav1"
              className=" min-h-full bg-[rgb(0_0_0/0%] hover:bg-[rgb(59_73_223/10%)] hover:brightness-200 "
            >
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/2319/2319177.png"}
                alt={"Lupa"}
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
        <div
          id="padreBotonNav"
          className=" flex align-middle justify-center items-center w-[232.396] h-[39.184px] text-[rgb(64_64_64)] text-sm ml-auto pl-[200px] md:pl-[200px] lg:pl-[400px]"
        >
          <div id="divNav01" className="flex  md:hidden min-h-[30]">
            <button
              id="botonNav2"
              className=" min-h-full bg-[rgb(0_0_0/0%] hover:bg-[rgb(59_73_223/10%)] hover:brightness-200"
            >
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/2319/2319177.png"}
                alt={"Lupa"}
                width={30}
                height={30}
              />
            </button>
          </div>

          <div id="contenedor001" className="">
            <Link href="/enter/enterEmail">
              <button
                id="boton3"
                className="hidden md:flex hover:bg-[rgb(59_73_223/10%)] p-[8px_16px] text-center min-w-[39px] hover:text-[rgb(47_58_178)] rounded-md"
              >
                Log in
              </button>
            </Link>
          </div>

          <div id="divNav002" className="">
            <Link href="/enter">
              <button className="hover:bg-[rgb(59_73_223)] p-[8px_16px] min-w-[95px] text-center text-[rgb(59_73_223)] hover:text-[rgb(255_255_255)] border-[rgb(59_73_223)] border-2 rounded-lg  font-semibold">
                Create account
              </button>
            </Link>
          </div>

          <div id="divNav003" className="hidden">
            <Link href="/post">
              <button className="hover:bg-[rgb(59_73_223)] p-[8px_16px] min-w-[95px] text-center text-[rgb(59_73_223)] hover:text-[rgb(255_255_255)] border-[rgb(59_73_223)] border-2 rounded-lg  font-semibold">
                Create post
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
