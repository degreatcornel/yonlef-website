import { useState } from "react";
import { opportunities } from "./data";
import OpportunityCard from "./OpportunityCard";
import { styles } from "../utils/styles";

const OpportunityBoard = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = opportunities.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || item.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="py-20">
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Opportunity Board
        </h2>

        {/* 🔍 Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">

          <input
            type="text"
            placeholder="Search opportunities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded w-full"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-3 rounded"
          >
            <option>All</option>
            <option>Job</option>
            <option>Internship</option>
            <option>Scholarship</option>
          </select>

        </div>

        {/* 📋 Results */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <OpportunityCard key={item.id} item={item} />
            ))
          ) : (
            <p>No opportunities found.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default OpportunityBoard;