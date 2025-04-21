import { useContext } from "react";
import { SlideshowContext } from "../providers/SlideshowProvider";

export const useSlideshow = () => {
  const context = useContext(SlideshowContext);
  if (!context) {
    throw new Error("useSlideshow must be used within a SlideshowProvider");
  }
  return context;
};