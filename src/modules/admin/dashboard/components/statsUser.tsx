import fotoProfil from "@/public/assets/pepe.webp";
import Image from "next/legacy/image";

export const StatsUserDashboardAdmin = () => {
  return (
    <>
      <div className="stats stats-vertical shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Tryout Saya</div>
          <div className="stat-value text-primary">15</div>
          <div className="stat-desc">All time</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Soal</div>
          <div className="stat-value text-secondary">530</div>
          <div className="stat-desc">All time</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <Image src={fotoProfil} />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Kontribusi</div>
          <div className="stat-desc text-secondary">pembuatan tryout</div>
        </div>
      </div>
    </>
  );
};
