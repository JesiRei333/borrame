import Image from "next/image";
import AsideLLink from "@/src/components/linkAsideL";
import { parrafo } from "@/src/constants/parrafoAsideL";
import { parrafoBot } from "@/src/constants/parrafoAsideLBot";
import BotonRedes from "@/src/components/redesBoton";
import { redes } from "@/src/constants/redes";
import ParrafoLink from "@/src/components/linksHastag";
import { linkHastag } from "@/src/constants/linksHastag";
import DevAsideLComuni from "@/src/components/devComuniAsideL";
import AsideRScroll from "@/src/components/asideDerechoScroll";
import TextoConHiper from "@/src/components/textoconComentarios";
import { textoConHiper } from "@/src/constants/textoConHiper";
import { discussWater } from "@/src/constants/discusWatercooler";
import PostMid from "@/src/components/postMid";
import BotonHeaderMid from "@/src/components/botonHeaderMid";
import { botonesHeaderMid } from "@/src/constants/botonesHeaderMid";
import { botonesHeaderMidDerecha } from "@/src/constants/botonHeaderMidDerecha";
import Nav from "./nav";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [post, setPost] = useState({});
  const [texto, setTexto] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetch("https://nextdevrep-2044e667dfb2.herokuapp.com/post", {
      //fetch("http://localhost:3001/post", {
      method: "Get",
    })
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  if (!post.data) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }

  return (
    <main key="nav">
      <Nav texto={texto} setTexto={setTexto} />
      <div
        key="div1"
        className="flex justify-center items-center align-middle  bg-[rgb(245_245_245)] p-[55.990px]  text-[rgb(64_64_64)] "
      >
        <div key="div2" className="flex justify-center   ">
          <div
            key="div3"
            id="divL"
            className=" hidden md:flex flex-col min-w-[208.021px] h-full p-[16px] pr-[0px]"
          >
            <div
              key="div5"
              className="p-[8px_16px] pr-[5px] min-w-[208px] min-h-[23.983px] rounded-md no-underline "
            >
              {parrafo.map((item, index) => {
                return (
                  <AsideLLink
                    key={`parrafo-${index}`}
                    link={item.link}
                    imagen={item.imagen}
                    alt={item.alt}
                    contenido={item.contenido}
                  />
                );
              })}
            </div>
            <br />
            <div
              key="div7"
              className=" items-center justify-center align-middle font-bold p-[8px_16px] pr-[5px]  "
            >
              <p key="p1">Other</p>
            </div>

            <div
              key="div8"
              className="p-[8px_16px] pr-[5px] min-w-[208px] min-h-[23.983px]  rounded-md no-underline "
            >
              {parrafoBot.map((item, index) => {
                return (
                  <AsideLLink
                    key={`parrafoBot-${index}`}
                    link={item.link}
                    imagen={item.imagen}
                    alt={item.alt}
                    contenido={item.contenido}
                  />
                );
              })}
            </div>
            <br />
            <div
              key="div9"
              className="w-min-[40px] h-min-[40px] rounded-md flex items-center  align-middle pl-4 "
              id="redes"
            >
              {redes.map((item, index) => {
                return (
                  <div
                    key={`redes1-${index}`}
                    className="w-min-[40px] h-min-[40px] rounded-md flex items-center p-[8px] pr-[5px] align-middle no-underline "
                    id="redes"
                  >
                    <BotonRedes
                      key={`redes-${index}`}
                      link={item.link}
                      imagen={item.imagen}
                      alt={item.alt}
                    />
                  </div>
                );
              })}
            </div>
            <br />
            <div
              key="div11"
              className="text-[rgb(64_64_64)] items-center justify-center align-middle font-bold p-[8px_16px] pr-[5px]"
            >
              <p key="p2">Popular Tags</p>
            </div>
            <div
              key="div12"
              className="overflow-y-scroll max-h-[401px] max-w-[251.984px] p-[8px_16px] "
            >
              {linkHastag.map((item, index) => {
                return (
                  <div
                    key={`linkHastag1-${index}`}
                    className="w-min-[40px] h-min-[40px] rounded-md flex items-center  align-middle no-underline "
                    id="redes"
                  >
                    <ParrafoLink
                      key={`linkHastag-${index}`}
                      link={item.link}
                      contenido={item.contenido}
                    />
                  </div>
                );
              })}
            </div>
            <div
              key="div13"
              className="p-[8px_16px] max-w-[251.984px] pr-[5px] align-middle  no-underline border-[0.5px] border-[rgba(82,82,82,0.14)]  "
            >
              {" "}
              <DevAsideLComuni className="hover:underline font-normal" />
            </div>
          </div>

          <div
            key="div15"
            id="divM"
            className=" flex flex-col  p-[20px] pl-[0px] h-full  text-[rgb(61_61_61)] text-[0.875rem] font-bold"
          >
            <header key={"header1"} className="flex flex-row">
              <div className=" flex flex-row pl-16 md:pl-0 text-lg font-normal">
                {" "}
                {botonesHeaderMid.map((item, index) => {
                  return (
                    <div
                      key={`botonesHeaderMid1-${index}`}
                      className="rounded-md flex items-center text-justify align-middle  md:pl-[8px]  p-[0px_5px] hover:text-[rgb(59,73,223)]  "
                      id="redes"
                    >
                      <BotonHeaderMid
                        key={`botonesHeaderMid-${index}`}
                        link={""}
                        contenido={item.contenido}
                        bandera={item.bandera}
                      />
                    </div>
                  );
                })}{" "}
              </div>
              <div
                key="div16"
                className=" hidden lg:flex flex-row pl-[200px] text-lg font-normal "
              >
                {" "}
                {botonesHeaderMidDerecha.map((item, index) => {
                  return (
                    <div
                      key={`botonesHeaderMidDerecha1-${index}`}
                      className="rounded-md flex items-center  text-justify align-middle p-[0px_5px] hover:text-[rgb(59,73,223)]   "
                      id="redes"
                    >
                      <BotonHeaderMid
                        key={`botonesHeaderMidDerecha-${index}`}
                        link={""}
                        contenido={item.contenido}
                        bandera={item.bandera}
                      />
                    </div>
                  );
                })}{" "}
              </div>
            </header>
            <div
              key="div17"
              className="flex flex-col min-w-[610.656px] items-center align-middle border mb-1 justify-center p-[40px]  "
            >
              <Image
                className="rounded-md"
                src={
                  "https://res.cloudinary.com/practicaldev/image/fetch/s--DgbSgg5U--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_775/https://media.dev.to/cdn-cgi/image/width%3D1000%2Cheight%3D420%2Cfit%3Dcover%2Cgravity%3Dauto%2Cformat%3Dauto/https%253A%252F%252Fdev-to-uploads.s3.amazonaws.com%252Fuploads%252Farticles%252Fn59ze0ihggwhx662h3sj.jpg"
                }
                alt={"Lupa"}
                width={470}
                height={197.703}
              />
              <p key="p3" id="tituloPost" className=" ">
                The Cloudflare AI Challenge is live: $3,000
                <br />
                in Prizes!
              </p>
            </div>

            <div
              key="div18"
              className=" flex flex-col border-[0.5px] max-w-[555.656px]  md:min-w-[610.656px] pl-20 sm:pl-12 md:pl-0  border-[rgba(82,82,82,0.14)] rounded-md mb-1 "
            >
              {post.data
                .map((data, index) => data.articuloTitulo)
                .filter((titulo) =>
                  titulo
                    .replace(/\W/g, "")
                    .toLowerCase()
                    .includes(texto.toLowerCase().replace(/\W/g, ""))
                )
                .map((item, index) => {
                  return (
                    <div key={`extoConHiper1-${index}`} className="border-2">
                      <PostMid
                        key={`extoConHiper-${index}`}
                        className="flex hover:bg-[rgba(113,234,139,0.14)] hover:border-1 p-[8px_16px]  "
                        titulo={item}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            id="divR"
            className="hidden lg:flex flex-col max-w-[301.368px] min-w-[321.368px] h-full gap-[4px]  pt-[16px]"
          >
            <div
              key="div19"
              className="max-h-[454px] min-w-[301.368px] border-2 p-[8px_16px] mb-3"
            >
              <p key="p5 " className="font-bold text-xl">
                🥰 Challenges
              </p>
              <AsideRScroll className="text-base font-bold" />
            </div>
            <div>
              <div
                key="div20"
                className="max-h-[644px] min-w-[301.368px]  p-[8px_16px] border-[0.5px] border-[rgba(82,82,82,0.14)]  pt-[8px]  mb-3"
              >
                <p className="font-bold text-xl">#discuss</p>
                <p className="text-xs">
                  Discussion threads targeting the whole community
                </p>
                <br />
                {textoConHiper.map((item, index) => {
                  return (
                    <div
                      key={`extoConHiper-1${index}`}
                      className="md:w-min-[40px] md:min-w-[301.368px]  md:h-min-[40px] rounded-md flex items-center text-justify align-middle   "
                      id="redes"
                    >
                      <TextoConHiper
                        key={`extoConHiper2-${index}`}
                        link={item.link}
                        contenido={item.contenido}
                        numRam={item.numRam}
                      />
                    </div>
                  );
                })}
              </div>
              <div
                key="div21"
                className="max-h-[644px] p-[8px_16px] border-[0.5px] border-[rgba(82,82,82,0.14)] pt-[8px] mb-3"
              >
                <p className="font-bold text-xl">#watercooler</p>
                <p className="text-xs">Light, and off-topic conversation.</p>
                <br />
                {discussWater.map((item, index) => {
                  return (
                    <div
                      key={`discussWater1-${index}`}
                      className="w-min-[40px] h-min-[40px] rounded-md flex items-center text-base  text-justify align-middle  "
                      id="redes"
                    >
                      <TextoConHiper
                        key={`discussWater-${index}`}
                        link={item.link}
                        contenido={item.contenido}
                        numRam={item.numRam}
                        className=" "
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
