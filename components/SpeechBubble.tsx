import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SpeechBubble({ children }: Props) {
  return <span className="text-black text-base">{children}</span>;
}
