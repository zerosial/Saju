"use client";

import Image from "next/image";
import SpeechBubble from "../components/SpeechBubble";
import SajuTable from "../components/SajuTable";
import React, { useRef, useEffect, useState } from "react";
import { useStore } from "../store/useStore";

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [bgHeight, setBgHeight] = useState<number>(0);
  const { sajuData } = useStore();

  useEffect(() => {
    if (!bgRef.current) return;

    const updateHeight = () => {
      if (bgRef.current) {
        setBgHeight(bgRef.current.offsetHeight);
      }
    };

    // 최초 실행
    updateHeight();

    // ResizeObserver로 반응형 대응
    const resizeObserver = new window.ResizeObserver(() => {
      updateHeight();
    });
    resizeObserver.observe(bgRef.current);

    // window resize에도 대응
    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // 말풍선 위치: 배경 이미지 높이의 %로 계산
  const leftBubbleTop = bgHeight ? bgHeight * 0.32 : 0; // 예: 32%
  const rightBubbleTop = bgHeight ? bgHeight * 0.495 : 0; // 예: 52%
  const tableBottom = bgHeight ? bgHeight * 0.68 : 0; // 하단에서 10% 위

  return (
    <div className="w-full flex justify-center bg-neutral-100 relative">
      {/* 배경 이미지 */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-0"
        ref={bgRef}
        style={{ pointerEvents: "none" }}
      >
        <Image
          src="/bg-main.jpg"
          alt="배경"
          width={448}
          height={1800}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </div>
      {/* 컨텐츠 */}
      <div
        className="relative w-full max-w-md mx-auto z-10"
        style={{ minHeight: bgHeight ? `${bgHeight}px` : undefined }}
      >
        <div
          className="absolute left-12 px-4"
          style={{ top: leftBubbleTop, width: "50%" }}
        >
          <SpeechBubble>
            <span>
              이제 본격적으로 {sajuData.name}님의 사주팔자를 분석해볼 차례네요.
            </span>
          </SpeechBubble>
        </div>
        <div
          className="absolute left-12 px-4"
          style={{ top: rightBubbleTop, width: "60%" }}
        >
          <SpeechBubble>
            <span>
              제가 {sajuData.name}님의 사주를 보기 쉽게 표로 정리했어요
            </span>
          </SpeechBubble>
        </div>
        <div
          className="absolute left-0 w-full px-2"
          style={{ top: tableBottom }}
        >
          <SajuTable />
        </div>
      </div>
    </div>
  );
}
