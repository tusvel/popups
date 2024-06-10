"use client";
import { Modal } from "@/shared/ui/Modal";
import { ModalTheme } from "@/shared/ui/Modal/Modal";
import { useState } from "react";
import Image from "next/image";
import BackgroundImage from "@/shared/assets/WaitBg.png";

export const WaitingTransactionModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Modal open={open} setOpen={setOpen} theme={ModalTheme.SUCCESS}>
      <div
        className={"relative overflow-hidden min-h-[320px] mb-3 flex flex-col"}
      >
        <div className="relative text-white text-3xl font-chakra font-semibold z-10 flex-auto flex flex-col justify-center items-center pl-10 pr-10 text-center">
          <div className="loader"></div>
          <span>Waiting for transaction confirmation</span>
        </div>
        <Image
          className={
            "absolute top-0 left-0 w-full h-full cover-center opacity-20"
          }
          src={BackgroundImage}
          alt="background"
        />
      </div>
    </Modal>
  );
};
