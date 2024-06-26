"use client";

import clsx from "clsx";
import { useConversation } from "../hooks";
import { EmptyState } from "../components";

const Conversations = () => {
  const { isOpen } = useConversation();
  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default Conversations;
