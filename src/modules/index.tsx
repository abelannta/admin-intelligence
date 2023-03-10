import Link from "next/link";

export const HomepageAdmin = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
        <p className="text-xl font-semibold">Admin</p>
        <h2 className="text-4xl font-bold">
          Nine<span className="text-bold">Intelligence</span>
        </h2>
        <Link href="/auth/login">
          <button className="btn btn-primary mt-5 w-32">Login</button>
        </Link>
      </div>
    </>
  );
};
