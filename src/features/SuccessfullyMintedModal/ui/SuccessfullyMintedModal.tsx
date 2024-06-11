"use client";
import { Modal } from "../../../shared/ui/Modal";
import { ModalTheme } from "../../../shared/ui/Modal/Modal";
import { useState } from "react";
import Image from "next/image";
import BackgroundImage from "../../../shared/assets/SuccessBg.jpeg";
import GotItIcon from "../../../shared/assets/icons/gotit.svg";

export const SuccessfullyMintedModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Modal open={open} setOpen={setOpen} theme={ModalTheme.SUCCESS}>
      <div
        className={"relative overflow-hidden min-h-[320px] mb-3 flex flex-col"}
      >
        <div className="relative text-success text-4xl font-chakra font-bold z-10 flex-auto flex justify-center items-center pl-10 pr-10 text-center">
          <span style={{ textShadow: "0px 0px 12px #ABFF00" }}>
            Successfully minted
          </span>
        </div>
        <Image
          className={"absolute top-0 left-0 w-full h-full cover-center"}
          src={BackgroundImage}
          alt="background"
        />
      </div>
      <div className="flex justify-center w-full">
        <button onClick={() => setOpen(false)}>
          <Image src={GotItIcon} alt={"try again"} />
        </button>
      </div>
    </Modal>
  );
};
