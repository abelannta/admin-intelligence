import { useState } from "react";
import { useRouter } from "next/router";
import { getToken, getProfile } from "@/lib/auth";
import { setCookie } from "nookies";
import { useGlobalContext } from "src/contexts";
import toast from "react-hot-toast";

export const LoginPage = () => {
  const router = useRouter();
  const { setUser } = useGlobalContext();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: any, username: string, password: string) => {
    e.preventDefault();
    const loginPromise = getToken(username, password)
      .then((res) => {
        setCookie(null, "accessToken", res.token, {
          maxAge: 3600,
          path: "/",
        });
        const setUserProfile = async () => {
          await getProfile(res.token)
            .then((res) => {
              setUser(res);
              router.replace("/admin/dashboard");
            })
            .catch((err) => console.error(err));
        };
        setUserProfile();
      })
      .catch((err) => {
        throw err;
      });
    toast.promise(loginPromise, {
      loading: "Loading...",
      success: "Login berhasil!",
      error: "Email atau Kata Sandi anda salah!",
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="card w-96 bg-base-100 drop-shadow-xl">
          <div className="card-body items-center text-center">
            <p className="text-xl normal-case font-bold mb-8">
              Nine<span className="text-bold">Intelligence</span>
            </p>
            <form
              onSubmit={(e) =>
                handleSubmit(e, loginData.username, loginData.password)
              }
              className="w-full"
            >
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setLoginData((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  onChange={(e) =>
                    setLoginData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="card-actions w-full mt-8">
                <button className="btn btn-primary w-full">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
