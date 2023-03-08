import Image from "next/legacy/image";
import { parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/router";
import fotoProfil from "@/public/assets/pepe.webp";
import Link from "next/link";
import { useGlobalContext } from "src/contexts";

const UserNavbar = () => {
  const cookies = parseCookies();
  const router = useRouter();
  const { user } = useGlobalContext();

  const handleLogout = () => {
    destroyCookie(null, "accessToken");
    router.push("/auth/login");
  };

  return (
    <>
      {cookies.accessToken && (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            className="flex items-center cursor-pointer btn btn-ghost capitalize"
          >
            <div className="hidden md:block">
              <p className="text-base text-black">{user.user_name}</p>
            </div>
            <div className="rounded-full w-10 h-10 m-0 md:ml-3 overflow-hidden">
              <Image src={fotoProfil} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-bold text-lg py-3 px-2">Ruang Siswa</li>
            <li>
              <Link href="/profil">Profil</Link>
            </li>
            <li>
              <Link href="/profil?tabs=kegiatan">Kegiatanku</Link>
            </li>
            <li>
              <Link href="/profil?tabs=riwayat">Riwayat</Link>
            </li>
            <li>
              <Link href="/profil?tabs=progres">Progres</Link>
            </li>
            <li onClick={handleLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      )}
      {!cookies.accessToken && (
        <>
          <Link href="/auth/register">
            <button className="hidden md:flex btn rounded-xl bg-transparent text-black border-0 hover:text-bold">
              Sign Up
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="btn rounded-xl bg-background text-bold">
              Sign in
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default UserNavbar;
