import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

function EventContent({ eventInfo }) {
  const platform = eventInfo.event.extendedProps.platform;
  const logoUrl = platform
    ? `https://www.google.com/s2/favicons?domain=${platform}&sz=32`
    : null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "2px 4px",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {logoUrl && (
        <img
          src={logoUrl}
          alt={platform}
          style={{ width: 14, height: 14, flexShrink: 0, borderRadius: "50%" }}
        />
      )}
      <span
        style={{
          fontSize: "12px",
          fontWeight: 500,
          color: "#e0e0e0",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {eventInfo.event.title}
      </span>
    </div>
  );
}

const formatPlatformName = (domain) => {
  if (!domain) return "Unknown";
  if (domain.includes("codeforces")) return "Codeforces";
  if (domain.includes("leetcode")) return "LeetCode";
  if (domain.includes("codechef")) return "CodeChef";
  if (domain.includes("atcoder")) return "AtCoder";
  if (domain.includes("hackerrank")) return "HackerRank";
  if (domain.includes("hackerearth")) return "HackerEarth";
  if (domain.includes("geeksforgeeks")) return "GeeksforGeeks";
  if (domain.includes("topcoder")) return "TopCoder";
  const name = domain.split(".")[0];
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export default function Calendar({ eventInfo }) {
  const events = (eventInfo || []).map((c) => ({
    title: formatPlatformName(c.host),
    start: c.start,
    end: c.end,
    url: c.href,
    backgroundColor: "#282828",
    borderColor: "#3a3a3a",
    extendedProps: {
      platform: c.host,
    },
  }));

  return (
    <div className="w-full h-full relative z-10">
      <style>{`
        .fc {
          --fc-page-bg-color: transparent;
          --fc-neutral-bg-color: transparent;
          --fc-border-color: #2e2e2e;
          
          --fc-button-text-color: #888;
          --fc-button-bg-color: transparent;
          --fc-button-border-color: #2e2e2e;
          --fc-button-hover-bg-color: #222;
          --fc-button-hover-border-color: #3a3a3a;
          --fc-button-active-bg-color: #222;
          --fc-button-active-border-color: #3a3a3a;
          
          --fc-today-bg-color: #2a3545; /* subtle dark blue/grey for today */
          font-family: inherit;
        }
        
        .fc-theme-standard .fc-scrollgrid {
          border-color: #2e2e2e;
          border-radius: 4px;
        }

        .fc-theme-standard th {
          border-color: #2e2e2e;
          padding: 8px 0;
        }

        .fc-theme-standard td {
          border-color: #2e2e2e;
        }

        /* Toolbar adjustments */
        .fc .fc-toolbar {
          margin-bottom: 1.5rem !important;
        }
        
        .fc .fc-toolbar-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
        }

        .fc .fc-button {
          border-radius: 4px;
          padding: 0.3rem 0.5rem;
          font-weight: 500;
          text-transform: capitalize;
          box-shadow: none;
          transition: all 0.2s;
        }
        
        .fc .fc-button-primary:not(:disabled):hover {
          color: #fff;
        }

        .fc .fc-button-primary:not(:disabled).fc-button-active, 
        .fc .fc-button-primary:not(:disabled):active {
          color: #fff;
        }

        .fc .fc-icon {
          font-size: 1.2em;
        }

        /* Header cells (Sun, Mon...) */
        .fc .fc-col-header-cell-cushion {
          color: #888;
          font-weight: 500;
          font-size: 0.85rem;
        }

        /* Day cells */
        .fc .fc-daygrid-day-number {
          color: #6b6b6b;
          font-size: 0.8rem;
          padding: 6px 8px;
        }

        /* Events */
        .fc .fc-event {
          border-radius: 12px;
          margin: 1px 4px;
          box-shadow: none;
          transition: background-color 0.2s, border-color 0.2s;
        }
        
        .fc .fc-event:hover {
          background-color: #333 !important;
          border-color: #444 !important;
          cursor: pointer;
          transform: none;
          z-index: 5;
        }

        .fc-h-event {
          background-color: #282828;
          border: 1px solid #3a3a3a;
        }
      `}</style>

      <div className="bg-[#141414] border border-[#2e2e2e] rounded-xl p-4 md:p-6 shadow-xl h-full flex flex-col">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "title",
            center: "",
            right: "prev,next",
          }}
          events={events}
          eventContent={(info) => <EventContent eventInfo={info} />}
          height="100%"
          eventClick={(info) => {
            info.jsEvent.preventDefault();
            if (info.event.url) {
              window.open(info.event.url, "_blank");
            }
          }}
        />
      </div>
    </div>
  );
}
