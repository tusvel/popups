"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { ErrorModal } from "@/src/features/ErrorModal";

interface ModalContextType {
  modalOpen: boolean;
  openModal: (
    message: string,
    title: string,
    showOkButton?: boolean,
    refreshAfterOk?: boolean,
  ) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [title, setTitle] = useState<string | null>(null);
  const [showOkButton, setShowOkButton] = useState<boolean>(true);
  const [refreshAfterOk, setRefreshAfterOk] = useState<boolean>(false);
  const [content, setContent] = useState<string | null>(null);

  const openModal = (
    message: string,
    title: string,
    showOkButton = true,
    refreshAfterOk = false,
  ) => {
    setTitle(title);
    setContent(message);
    setShowOkButton(showOkButton);
    setRefreshAfterOk(refreshAfterOk);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTitle(null);
    setContent(null);
    if (refreshAfterOk) {
      window.location.reload();
    }
  };

  return (
    <ModalContext.Provider value={{ modalOpen, openModal, closeModal }}>
      {children}
      {modalOpen && <ErrorModal />}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
