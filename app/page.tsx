"use client";

import { Button, Divider, Input, Snippet, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import Read from "./components/icons/Read";
import Git from "./components/icons/Git";
import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(false);
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  const generateURL = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlPattern.test(url)) {
      setError(true);
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
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center relative gap-[3em]">
      <div className="md:w-3/5 w-4/5 flex flex-col gap-1">
        <label htmlFor="input" className="font-bold">
          Long URL
        </label>
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the long URL"
          classNames={{
            inputWrapper: "pr-0 bg-[#fcfdf9] shadow-xl",
          }}
          isInvalid={error}
          errorMessage="Entered URL is not valid!"
          endContent={
            <Button
              onClick={generateURL}
              className="bg-[#bc6280] font-semibold"
            >
              Generate
            </Button>
          }
        />
      </div>

      <div className="md:w-3/5 w-4/5 flex flex-col gap-1">
        <label htmlFor="output" className="font-bold">
          Short URL
        </label>
        <Snippet
          radius="lg"
          tooltipProps={{ showArrow: true }}
          className="bg-[#fcfdf9] h-[2.5rem] shadow-xl"
        >
          {shortUrl ? `tiny-miny.luciferlocas.live/${shortUrl}` : ""}
        </Snippet>
      </div>

      <footer className="fixed bottom-0 w-full text-center py-3 sm:px-8 px-3 text-white">
        <Divider className="mb-2 bg-white" />
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
                className=" text-white rotate-12 hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
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
                className=" text-white hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
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
                className=" text-white font-extralight text-lg hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
              >
                in
              </Link>
            </Tooltip>
          </div>
          <p className="font-light">
            Designed and Developed with 🤍 by{" "}
            <span className="font-semibold">Rohit</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
