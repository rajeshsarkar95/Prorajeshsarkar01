"use client";
import { useState } from "react";
import { Play, Square, Volume2, VolumeX, Disc, Music } from "lucide-react";

type Track = {
    id: string;
    title: string;
    genre: string;
    videoId: string;
};
type PlayerCardProps = Track & {
    isActive: boolean;
    onPlay: () => void;
    onStop: () => void;
};

const TRACKS: Track[] = [
    {
        id: "1",
        title: "YouTube Radio Mix",
        genre: "Radio",
        videoId: "QQEu7GTa6zk",
    },
    {
        id: "2",
        title: "Lo-Fi Chill",
        genre: "Lo-Fi",
        videoId: "3oOXPPRRbt0",
    },
    {
        id: "3",
        title: "Relaxing Music",
        genre: "Ambient",
        videoId: "VG7dWSrA3Pg",
    },
    {
        id: "4",
        title: "Jazz Vibes",
        genre: "Jazz",
        videoId: "pvAsrsjtqi4",
    },
    {
        id: "5",
        title: "galat fehmi",
        genre: "Radio",
        videoId: "OzA5H9I95ng",
    },
    {
        id: "6",
        title: "Dard",
        genre: "Radio",
        videoId: "AyLTRvvCjAo",
    },
    {
        id: "7",
        title: "your title here",
        genre: "Radio",
        videoId: "Pm5JZvGFpeQ",
    },
    {
        id: "8",
        title: "your title here",
        genre: "Radio",
        videoId: "7NORZaLoc3Y",
    }
];

const GENRE_COLORS: Record<string, string> = {
    Radio: "from-rose-500 to-pink-600",
    "Lo-Fi": "from-violet-500 to-purple-600",
    Ambient: "from-teal-400 to-cyan-600",
    Jazz: "from-amber-400 to-orange-500",
};

function getColor(genre: string) {
    return GENRE_COLORS[genre] ?? "from-blue-500 to-indigo-600";
}

// Animated sound bars
function SoundBars() {
    return (
        <div className="flex items-end gap-[3px] h-5">
            {[1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className="w-[3px] bg-white rounded-full animate-pulse"
                    style={{
                        height: `${[60, 100, 75, 45][i - 1]}%`,
                        animationDuration: `${0.6 + i * 0.15}s`,
                        animationDelay: `${i * 0.1}s`,
                    }}
                />
            ))}
        </div>
    );
}

function PlayerCard({ title, genre, videoId, isActive, onPlay, onStop }: PlayerCardProps) {
    const color = getColor(genre);

    return (
        <div
            className={`relative rounded-2xl p-5 border transition-all duration-300 cursor-pointer group
                ${isActive
                    ? "bg-slate-800 border-white/20 shadow-2xl scale-[1.02]"
                    : "bg-slate-900 border-white/5 hover:border-white/15 hover:-translate-y-1"
                }`}
        >
            {/* Hidden audio-only iframe */}
            {isActive && (
                <iframe
                    className="absolute opacity-0 pointer-events-none w-0 h-0"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0`}
                    title={title}
                    allow="autoplay; encrypted-media"
                />
            )}

            {/* Gradient disc art */}
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}>
                {isActive ? (
                    <SoundBars />
                ) : (
                    <Music size={22} className="text-white/90" />
                )}
            </div>

            {/* Info */}
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{genre}</p>
            <h3 className="text-white font-semibold text-sm leading-tight mb-4 truncate">{title}</h3>

            {/* Controls */}
            <div className="flex items-center gap-2">
                {isActive ? (
                    <button
                        onClick={onStop}
                        className="flex items-center gap-2 text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-full transition"
                    >
                        <VolumeX size={13} /> Stop
                    </button>
                ) : (
                    <button
                        onClick={onPlay}
                        className={`flex items-center gap-2 text-xs text-white bg-gradient-to-r ${color} px-3 py-1.5 rounded-full hover:opacity-90 transition shadow`}
                    >
                        <Volume2 size={13} /> Play Audio
                    </button>
                )}
            </div>

            {/* Active glow */}
            {isActive && (
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-5 pointer-events-none`} />
            )}
        </div>
    );
}

export default function MusicGrid() {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-slate-950 p-8 flex flex-col items-center">
            <div className="max-w-4xl w-full">
                <header className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4">
                        <Disc size={13} className="text-blue-400" />
                        <span className="text-xs text-slate-400 tracking-wider uppercase">Audio Only</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">🎵 currently favorite music</h1>
                    <p className="text-slate-500 text-sm">
                        {activeId
                            ? `Now playing: ${TRACKS.find((t) => t.id === activeId)?.title}`
                            : "Select a track to start listening"}
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {TRACKS.map((track) => (
                        <PlayerCard
                            key={track.id}
                            {...track}
                            isActive={activeId === track.id}
                            onPlay={() => setActiveId(track.id)}
                            onStop={() => setActiveId(null)}
                        />
                    ))}
                </div>

                <p className="text-center text-slate-700 text-xs mt-10">
                    Audio streams via YouTube · Only one track plays at a time
                </p>
            </div>
        </main>
    );
}