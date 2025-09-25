import { Clock, Columns3, Eclipse, Heart} from "lucide-react";
import Link from "next/link";

const Songs = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 1000);
  });

  const songs = [
    {
      id: 1,
      artist: "Dopesmoke",
      title: "(67) Dopesmoke - Smoking Kills",
      time: "2:19",
    },
    { id: 2, artist: "Eminem", title: "Lose Yourself", time: "5:20" },
    { id: 3, artist: "The Weeknd", title: "Blinding Lights", time: "3:22" },
    { id: 4, artist: "Drake", title: "God’s Plan", time: "3:18" },
    { id: 5, artist: "Linkin Park", title: "In the End", time: "3:36" },
    { id: 6, artist: "Kanye West", title: "Stronger", time: "5:11" },
    { id: 7, artist: "Imagine Dragons", title: "Believer", time: "3:24" },
    { id: 8, artist: "Post Malone", title: "Circles", time: "3:35" },
    { id: 9, artist: "Travis Scott", title: "SICKO MODE", time: "5:12" },
    { id: 10, artist: "Kendrick Lamar", title: "HUMBLE.", time: "2:57" },
  ];

  return (
    <div className="w-96% mx-auto px-4">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        Songs Collection
      </h2>

      <ul className="space-y-4">
        {songs.map((song) => (
          <Link key={song.id} href={`music/${song.id}`}>
            <li key={song.id}>
              <div className="flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-16 w-16 bg-gray-700 rounded-md flex-shrink-0"
                    alt=""
                  />
                  <div>
                    <p className="text-white font-medium">{song.artist}</p>
                    <p className="text-sm text-gray-400">{song.title}</p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-1 text-gray-400">
                  <Clock size={16} />
                  <span>{song.time}</span>
                  <Heart
                    size={16}
                    className="cursor-pointer hover:text-red-500 gap-5 mx-5"
                  />
                  <button className="text-lg font-bold">⋮</button>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
