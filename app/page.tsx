"use client";

import { Button, Divider, Input, Snippet, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import Read from "./components/icons/Read";
import Git from "./components/icons/Git";
import React, { useState } from "react";
import axios from "axios";
import Logo from "./components/icons/Logo";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(false);
  const urlPattern =
    /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

  const generateURL = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    if (!urlPattern.test(url)) {
      setError(true);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("/api/tiny", { url });
      if (res.status === 200 || res.status === 201) {
        const data = res.data;
        setShortUrl(data.shortUrl);
      } else {
        console.error("Failed to generate short URL:", res.status);
      }
    } catch (error: any) {
      console.error("Error generating short URL:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg min-h-screen w-screen flex flex-col justify-center items-center relative gap-[3em]">
      <header className="fixed top-0 w-full text-center py-3 sm:px-8 px-3 text-black">
        <div className="flex justify-start items-center cursor-pointer">
          <Logo />
        </div>
      </header>
      <div className="md:w-3/5 w-4/5 flex flex-col gap-1">
        <label htmlFor="input" className="font-bold text-black">
          Long URL
        </label>
        <Input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setError(false);
          }}
          placeholder="Enter the long URL"
          classNames={{
            inputWrapper: [
              "bg-black text-white pr-0 shadow-sm shadow-black",
              "data-[hover=true]:bg-zinc-800 group-data-[focus=true]:bg-zinc-800",
            ],
            input: "group-data-[has-value=true]:text-white",
          }}
          isInvalid={error}
          errorMessage="Entered URL is not valid!"
          endContent={
            <Button
              isLoading={loading}
              onClick={generateURL}
              className="bg-green-300 font-semibold"
            >
              Generate
            </Button>
          }
        />
      </div>

      <div className="md:w-3/5 w-4/5 flex flex-col gap-1">
        <label htmlFor="output" className="font-bold text-black">
          Short URL
        </label>
        <Snippet
          radius="lg"
          tooltipProps={{ showArrow: true }}
          className="bg-black text-white h-[2.5rem] shadow-sm shadow-black"
          classNames={{
            pre: "overflow-x-scroll sch",
          }}
        >
          {shortUrl ? `tinyminy.luciferlocas.live/${shortUrl}` : ""}
        </Snippet>
      </div>

      <footer className="fixed bottom-0 w-full text-center py-3 sm:px-8 px-3 text-black">
        <Divider className="mb-2 bg-black" />
        <div className="flex sm:flex-row flex-col-reverse gap-4 items-center justify-between px-3">
          <div className="flex gap-4 items-center">
            <Tooltip
              content="About"
              showArrow
              classNames={{
                content: "shadow-none font-semibold",
              }}
              offset={5}
            >
              <Link
                href="https://read.cv/luciferlocas"
                target="blank"
                className=" text-black rotate-12 hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
              >
                <Read />
              </Link>
            </Tooltip>
            <Tooltip
              content="Github"
              showArrow
              classNames={{
                content: "shadow-none font-semibold",
              }}
              offset={6}
            >
              <Link
                href="https://github.com/Luciferlocas"
                target="blank"
                className=" text-black hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
              >
                <Git />
              </Link>
            </Tooltip>
            <Tooltip
              content="LinkedIn"
              showArrow
              classNames={{
                content: "shadow-none font-semibold",
              }}
              offset={-1}
            >
              <Link
                href="https://www.linkedin.com/in/rohit-somvanshi/"
                target="blank"
                className=" text-black font-light text-lg hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
              >
                in
              </Link>
            </Tooltip>
          </div>
          <p className="font-light">
            Designed and Developed with 🖤 by{" "}
            <span className="font-semibold">Rohit</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
