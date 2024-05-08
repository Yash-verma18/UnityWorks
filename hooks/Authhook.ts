"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const authString = localStorage.getItem("auth");
    const auth = authString ? JSON.parse(authString) : null;

    if (!auth || !auth.accessToken) {
      router.push("/login?showToast=true");
    } else {
      setLoading(false);
    }
  }, [router]);
  return { loading };
};

export default useAuth;
