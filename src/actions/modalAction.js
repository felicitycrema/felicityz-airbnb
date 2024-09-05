import { OPEN_MODAL } from "../types/modalTypes";

export const openModal = (openClose, content) => {
  return {
    type: OPEN_MODAL,
    payload: {
      openClose,
      content,
    },
  };
};

