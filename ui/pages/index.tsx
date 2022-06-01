import type {NextPage} from 'next'
import {createRef, useEffect} from "react";

const API_URL = "http://localhost:8080/api/v1/"

const Home: NextPage = () => {
  const globalMessageRef = createRef<HTMLParagraphElement>();
  const writeMessageRef = createRef<HTMLInputElement>();

  // On refresh, get the message and replace the ref.

  useEffect(() => {
    fetch(API_URL + "read").then((res: Response) => {
      res.text().then((text: string) => {
        if (globalMessageRef.current?.innerHTML) {
          globalMessageRef.current.innerHTML = text;
        }
      })
    }).catch(() => {
      if (globalMessageRef.current?.innerHTML) {
        globalMessageRef.current.innerHTML = "Failed to fetch!";
      }
    })
  }, [])

  return (
    <div id={"container"} className={"p-8"} >
      <div className={"md:w-2/12"}>
        <h1 className={"text-5xl"}>
          Global Message
        </h1>
        <p ref={globalMessageRef} className={"bg-gray-100 p-4 mt-4"}>
          Message Appears Here!
        </p>
        <label className={"block text-gray-700 text-sm font-bold mt-2"} htmlFor={"message"}>
          Message
        </label>
        <input
          id={"message"}
          ref={writeMessageRef}
          name={"message"}
          placeholder={"Hello, World!"}
          type={"text"}
          className={
            "shadow border w-full py-2 px-3 leading-tight my-2 required:text-red-500"
          }
        />
        <div className={"my-4"}>
          <a
            href={"#"}
            className={"bg-green-100 rounded p-2 outline outline-green-600 hover:bg-green-300"}
            onClick={() => {
              fetch(API_URL + "write", {
                method: "POST",
                body: JSON.stringify({
                  "message": writeMessageRef.current?.value || "",
                })
              }).then();
            }}
          >
            Submit
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
