"use client"
import Main from "@/components/template/main";
import { useState } from "react";

export default function Layout(props: any) {
  const [data] = useState(new Date());
  return (
    <Main>
      <div className="border-8 border-red-500 p-8">
        <span>{data.toLocaleTimeString()}</span>
        <main>{props.children}</main>
      </div>
    </Main>
  );
}
