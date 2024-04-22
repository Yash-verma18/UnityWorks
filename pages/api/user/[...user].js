// pages/api/user/[...user].js
import axios from "axios";

// This is your backend server URL
const BACKEND_API_BASE_URL = "http://localhost:3000/api";

export default async function userHandler(req, res) {
  const {
    method, // "POST"
    query: { user }, // ["login"] or ["signup"]
    body, // Data sent from the client to be forwarded to the backend
  } = req;

  // Construct the full backend API endpoint URL
  const backendEndpoint = `${BACKEND_API_BASE_URL}/user/${user[0]}`;
  // Make sure we're dealing with a POST request
  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  try {
    // Forward the POST request to the backend API
    const backendResponse = await axios.post(backendEndpoint, body);
    // Send the backend API's response back to the client
    res.status(backendResponse.status).json(backendResponse.data);
  } catch (error) {
    // If there's an error with the request to the backend API,
    // forward the error response to the client
    res.status(error.response.status).json(error.response.data);
  }
}
