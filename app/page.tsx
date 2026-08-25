"use client";
import { useState } from "react";
import Quote from "./components/qoute";
interface Data {
  text: string;
  author: string;
}

export default function Home() {
  const [apis, setApis] = useState<string[]>(["https://thequoteshub.com/api/"]);
  const [api, setApi] = useState("");
  const addApi = (e: any) => {
    e.preventDefault();
    if (/(http: | https:)*/.test(api)) setApis((prev) => [api, ...prev]);
  };
  return (
    <div className="flex justify-center flex-col gap-8 m-8 items-center">
      <form
        className="flex flex-col text-center items-center"
        onSubmit={(e) => addApi(e)}
      >
        <label>Your own api</label>
        <input
          type="text"
          placeholder="http://..."
          value={api}
          onChange={(e) => setApi(e.target.value)}
        />
      </form>
      <h1 className="text-center">Qoutes</h1>
      <div className="w-[80%]">
        {apis.map((url, i) => (
          <Quote api={url} key={i} setApis={setApis} />
        ))}
      </div>
    </div>
  );
}
