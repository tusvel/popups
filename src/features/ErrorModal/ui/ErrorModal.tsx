"use client";
import { Modal } from "../../../shared/ui/Modal";
import { ModalTheme } from "../../../shared/ui/Modal/Modal";
import { useState } from "react";
import Image from "next/image";
import TryAgainIcon from "../../../shared/assets/icons/tryagain.svg";
import BackgroundImage from "../../../shared/assets/ErrorBg.jpeg";

export const ErrorModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Modal open={open} setOpen={setOpen} theme={ModalTheme.ERROR}>
      <div
        className={"relative overflow-hidden min-h-[320px] mb-3 flex flex-col"}
      >
        <div className="relative text-error text-4xl font-chakra font-bold z-10 flex-auto flex justify-center items-center md:pl-20 md:pr-20 text-center">
          <span style={{ textShadow: "0px 0px 12px #FF4545" }}>Error</span>
        </div>
        <Image
          className={"absolute top-0 left-0 w-full h-full cover-center"}
          src={BackgroundImage}
          alt="background"
        />
      </div>
      <div className="flex justify-center w-full">
        <button onClick={() => setOpen(false)}>
          <Image src={TryAgainIcon} alt={"try again"} />
        </button>
      </div>
    </Modal>
  );
};
