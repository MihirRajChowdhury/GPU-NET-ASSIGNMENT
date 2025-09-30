// src/components/layout/RightFeed.tsx
import { useState } from "react";

import { FiRss } from "react-icons/fi";

interface Post {
  id: number; user: string; username: string; text: string; time: string;
  likes: string; comments: string; views: string; image?: string;
  reactions: string[]; boost?: { votes: string; from: string };
}

const initPosts: Post[] = [
  {
    id: 1, user: "Stephen Smith", username: "@smith",
    text: "Just conquered algorithms & data structures! 🎉 Time for a breather. Suggestions for a binge-worthy shows? 🔥",
    time: "20 min", likes: "18.5", comments: "500", views: "401K",
    reactions: ["🧡","💬","👁","😊","😮","😍"],
    boost: { votes: "178 votes", from: "Fiaco Moon" }
  },
  {
    id: 2, user: "Suraj Chawla", username: "@surajc",
    text: "2108.25 SGPU bought at $0.17 - fun",
    time: "20 min", likes: "18.5", comments: "500", views: "401K",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=500&fit=crop",
    reactions: ["🧡","💬","👁","😊","😮","😍"]
  },
  {
    id: 3, user: "Stephen Smith", username: "@smith",
    text: "Just conquered algorithms & data structures! 🎉 Time for a breather. Suggestions for a binge-worthy shows? 🔥",
    time: "20 min", likes: "18.5", comments: "500", views: "401K",
    reactions: ["🧡","💬","👁","😊","😮","😍"]
  }
];

export default function RightFeed() {
  const [tab, setTab] = useState<"profile" | "feed">("feed");
  const [posts, setPosts] = useState(initPosts);
  const [text, setText] = useState("");
  const wallet = "0x78...0478";

  const postNow = () => {
    if (!text.trim()) return;
    setPosts([{
      id: Date.now(), user: "You", username: "@you", text,
      time: "now", likes: "0", comments: "0", views: "0",
      reactions: ["👍"]
    }, ...posts]);
    setText("");
  };

  return (
    <aside className="hidden xl:block fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-[#0a0a0a] border-l border-gray-800 overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-800 sticky top-0 bg-[#0a0a0a] z-20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-[#0a0a0a] flex items-center justify-center text-white text-xs font-bold">P</div>
            </div>
            <div>
              <div className="text-xs text-white font-medium">{wallet}</div>
            </div>
          </div>
          <button className="text-gray-500 hover:text-white text-lg">⋮</button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setTab("profile")}
            className={`flex-1 text-xs font-semibold py-2 rounded transition-colors ${
              tab === "profile"
                ? "bg-white text-black"
                : "bg-transparent text-gray-500 hover:text-white border border-gray-700"
            }`}
          >
            Profile
          </button>
<button
  onClick={() => setTab("feed")}
  className={`flex items-center gap-1 px-3 py-2 rounded-lg border transition-colors 
    ${tab === "feed" 
      ? "bg-white text-black border-white" 
      : "bg-[#111111] text-gray-400 border-gray-800 hover:bg-gray-800 hover:text-white"
    }`}
>
  <FiRss className={`text-sm ${tab === "feed" ? "text-black" : "text-gray-400 group-hover:text-white"}`} />
  <span className="text-sm font-medium">Feed</span>
</button>
        </div>
      </div>

      {/* Composer */}
      {tab === "feed" && (
        <div className="px-4 py-3 border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
              <div className="text-white text-xs font-bold">Y</div>
            </div>
            <div className="flex-1">
              <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="What's happening?"
                className="w-full bg-transparent text-xs text-white placeholder-gray-600 outline-none mb-2"
              />
              <div className="flex justify-between items-center">
                <div className="flex gap-3 text-xs text-gray-600">
                  <button className="hover:text-gray-400">GIF</button>
                </div>
                <button
                  onClick={postNow}
                  className="bg-white text-black text-xs font-semibold px-4 py-1 rounded hover:bg-gray-200"
                >
                  Post Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Tab */}
      {tab === "profile" && (
        <div className="px-4 py-4 border-b border-gray-800">
          <div className="text-white font-semibold text-sm mb-1">Mihir Raj Chowdhury</div>
          <div className="text-xs text-gray-500 mb-3">{wallet}</div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-white font-bold text-sm">0</div>
              <div className="text-gray-500 text-xs">Posts</div>
            </div>
            <div>
              <div className="text-white font-bold text-sm">0</div>
              <div className="text-gray-500 text-xs">Following</div>
            </div>
            <div>
              <div className="text-white font-bold text-sm">0</div>
              <div className="text-gray-500 text-xs">Followers</div>
            </div>
          </div>
        </div>
      )}

      {/* Posts */}
      {tab === "feed" && posts.map(p => (
        <article key={p.id} className="px-4 py-3 border-b border-gray-800 hover:bg-gray-900/30">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex-shrink-0 flex items-center justify-center">
              <div className="text-white text-xs font-bold">{p.user[0]}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-white text-xs font-semibold">{p.user}</span>
                <span className="text-gray-600 text-xs">•</span>
                <span className="text-gray-500 text-xs">{p.time}</span>
                <button className="ml-auto text-gray-600 hover:text-white text-sm">⋮</button>
              </div>
              
              <p className="text-gray-300 text-xs leading-relaxed mb-2">{p.text}</p>
              
              {p.image && (
                <img src={p.image} alt="" className="w-full rounded-lg mb-2" />
              )}

              <div className="flex items-center gap-3 text-xs mb-2">
                <span className="text-orange-500 flex items-center gap-1">
                  <span>🧡</span> {p.likes}
                </span>
                <span className="text-gray-500 flex items-center gap-1">
                  <span>💬</span> {p.comments}
                </span>
                <div className="flex gap-1">
                  {p.reactions.map((e, i) => (
                    <span key={i} className="text-sm">{e}</span>
                  ))}
                </div>
                <span className="text-gray-500 flex items-center gap-1 ml-auto">
                  <span>👁</span> {p.views}
                </span>
              </div>

              {p.boost && (
                <div className="bg-gradient-to-r from-orange-500/10 to-transparent border-l-2 border-orange-500 pl-2 py-1">
                  <div className="text-orange-500 text-xs font-medium">
                    Boost received {p.boost.votes} from {p.boost.from}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </aside>
  );
}