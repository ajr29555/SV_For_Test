import { NavLink } from "react-router-dom";
import { Film, Plus, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/all-movies", label: "All Movies", icon: Film },
  { to: "/add-movie", label: "Add New Movie", icon: Plus },
  { to: "/search-movies", label: "Search Movie", icon: Search },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-black text-white">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
          <Film className="h-5 w-5" />
        </div>
        <span className="text-lg font-bold">Watchlist</span>
      </div>

      <nav className="flex-1 px-3 py-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-900"
              )
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-zinc-800 px-6 py-4 text-xs text-zinc-500">
        Your personal movie tracker
      </div>
    </aside>
  );
}
