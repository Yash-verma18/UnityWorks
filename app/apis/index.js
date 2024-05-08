import axios from "axios";

const BACKEND_API_BASE_URL =
  process.env.BACKEND_API_BASE_URL ||
  process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL;

export const loginApiCall = async (data) => {
  // Send a login request
  try {
    const response = await axios.post(
      `${BACKEND_API_BASE_URL}/api/user/login`,
      data
    );
    localStorage.setItem("auth", JSON.stringify(response.data.data));

    return {
      status: "success",
      message: response.data.message,
    };
  } catch (error) {
    // Handle any errors
    return { status: "fail", message: error.response.data };
  }
};

export const signupApiCall = async (data) => {
  // Send a signup request

  try {
    const response = await axios.post(
      `${BACKEND_API_BASE_URL}/api/user/signup`,
      data
    );

    localStorage.setItem("accessToken", response.data.accessToken);
    return {
      status: "success",
      message: response.data.message,
    };
  } catch (error) {
    // Handle any errors

    return { status: "fail", message: error.response.data };
  }
};

export const fetchRefreshToken = async () => {
  try {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const res = await axios({
      url: `${BACKEND_API_BASE_URL}/api/auth/refresh`,
      method: "POST",
      data: {
        refreshToken: `${auth.refreshToken}`,
      },
    });
    localStorage.setItem("auth", JSON.stringify(res.data));
    return res.data;
  } catch (err) {
    console.log("fetchRefreshToken err", err);
    localStorage.clear();
    window.location.replace("/?signup=true");
  }
};

export const reFetchTokenExpire = async (f1, f2) => {
  try {
    const res = await f1();

    if (res?.message === "Token has expired") {
      const token = await f2();

      if (token) {
        return f1();
      }
    } else {
      return res;
    }
  } catch (error) {
    return error;
  }
};

export const getEmployeeGraphData = async (accessToken) => {
  try {
    const f1 = async () => {
      const auth = JSON.parse(localStorage.getItem("auth"));

      const response = await axios.get(
        `${BACKEND_API_BASE_URL}/api/employee/protected`,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );

      if (response.data.message === "Token has expired") {
        return response.data;
      } else {
        return response.data.data;
      }
    };

    const res = await reFetchTokenExpire(f1, fetchRefreshToken);

    console.log("getEmployeeGraphData res", res);

    return res;
  } catch (error) {
    console.error("getEmployeeGraphData error", error);
    return { status: "fail", message: error.response.data };
  }
};
