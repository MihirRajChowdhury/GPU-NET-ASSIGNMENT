// src/components/layout/RightFeed.tsx
import React, { useState } from "react";

interface Post {
  id: number; user: string; username: string;
  text: string; time: string; likes: string;
  comments: string; views?: string; boosts?: string;
  image?: string; reactions?: string[];
}

const initPosts: Post[] = [
  {
    id: 1, user: "Stephen Smith", username: "@smith",
    text: "Just conquered algorithms! 🎉 Suggestions for shows? #StudyBreak",
    time: "20m", likes: "401K", comments: "200", views: "401K",
    reactions: ["🔥","👏","😄","❤️"]
  },
  {
    id: 2, user: "Suraj Chawla", username: "@surajc",
    text: "2108.25 SGPU bought at $0.17! Ten years of grinding paid off.",
    time: "17m", likes: "401K", comments: "300", views: "2108",
    image: "https://via.placeholder.com/800x500", reactions: ["🚀","🎉","💯"]
  }
];

export default function RightFeed() {
  const [tab, setTab] = useState<"feed"|"profile">("feed");
  const [posts,setPosts]=useState(initPosts); const [text,setText]=useState("");
  const wallet="0x78..0478";

  const postNow=()=>{
    if(!text.trim())return;
    setPosts([{id:Date.now(),user:"You",username:"@you",text,time:"now",likes:"0",comments:"0",views:"0",reactions:["👍"]},...posts]);
    setText(""); setTab("feed");
  };

  return (
  <aside className="hidden xl:block fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-black border-l border-gray-800 overflow-y-auto">
    {/* profile + tabs */}
    <div className="px-3 py-3 border-b border-gray-800 sticky top-0 bg-black z-20">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">P</div>
          <div>
            <div className="text-sm text-white font-medium">Profile</div>
            <div className="text-xs text-gray-400">{wallet}</div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white">⋮</button>
      </div>
      <div className="flex gap-2">
        {["Profile","Feed"].map(k=>
          <button key={k} onClick={()=>setTab(k.toLowerCase() as "feed" | "profile")}
            className={`text-sm px-3 cursor-pointer py-1 rounded-full ${tab===k.toLowerCase()?"bg-white text-black":"text-gray-400 hover:text-white"}`}>
            {k}
          </button>)}
      </div>
    </div>

    {/* composer */}
    {tab==="feed"&&<div className="px-3 py-3 border-b border-gray-800 flex gap-3">
      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">Y</div>
      <div className="flex-1">
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={2}
          placeholder="What's happening?" className="w-full bg-transparent text-sm text-white placeholder-gray-500 resize-none outline-none"/>
        <div className="flex justify-between mt-2">
          <button className="text-xs text-gray-400 cursor-pointer">GIF</button>
          <button onClick={postNow} className="bg-white cursor-pointer text-black text-xs font-semibold px-3 py-1 rounded-full">Post</button>
        </div>
      </div>
    </div>}

    {/* profile tab */}
    {tab==="profile"&&<div className="px-3 py-3 text-sm text-gray-300 border-b border-gray-800">
      <div className="text-white font-semibold mb-1">Mihir Raj Chowdhury</div>
      <div className="text-xs text-gray-400">{wallet}</div>
    </div>}

    {/* posts */}
    {posts.map(p=>
      <article key={p.id} className="p-3 border-b border-gray-800">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
            {p.user[0]}
          </div>
          <div className="flex-1">
            <div className="text-sm text-white font-semibold">{p.user} <span className="text-xs text-gray-500">{p.username} • {p.time}</span></div>
            <p className="text-sm text-gray-300 mt-1 mb-2">{p.text}</p>
            {p.image&&<img src={p.image} className="w-full h-auto rounded-lg mb-2"/>}
            {p.boosts&&<div className="text-xs text-orange-500 mb-2">Boost received {p.boosts} votes</div>}
            <div className="flex justify-between text-xs text-gray-400">
              <div className="flex gap-4">
                <span>💬 {p.comments}</span>
                <span className="text-red-500 cursor-pointer">❤ {p.likes}</span>
                <span>👁 {p.views}</span>
              </div>
            </div>
            {p.reactions&&<div className="flex gap-2 mt-2">
              {p.reactions.map((e,i)=><span key={i} className="bg-gray-800 rounded-full px-2 py-0.5 text-sm">{e}</span>)}
            </div>}
          </div>
        </div>
      </article>)}
  </aside>);
}
