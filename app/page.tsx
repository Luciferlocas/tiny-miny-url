import { Button, Divider, Input, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import Read from "./components/icons/Read";
import Git from "./components/icons/Git";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center relative">
      <Input
        placeholder="Enter the long URL"
        className="md:w-3/5 w-4/5"
        classNames={{
          inputWrapper: "pr-0 bg-[#fcfdf9] shadow-xl",
        }}
        endContent={
          <Button className="bg-[#bc6280] font-semibold">Generate</Button>
        }
      />
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
