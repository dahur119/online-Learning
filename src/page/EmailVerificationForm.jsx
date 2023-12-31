import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const EmailVerificationForm = () => {
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    // Make a GET request to your backend API to check if the email is verified
    axios
      .get("/api/checkEmailVerification")
      .then((response) => {
        setEmailVerified(response.data.verified);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (emailVerified) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <div className="custom-course-background min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <p className="text-lg font-semibold mb-4">Verification Link Sent</p>
        <p className="text-gray-600 mb-4">
          A verification link has been sent to your email. Kindly check your
          inbox/spam folder to verify your account.
        </p>
        <button className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full w-full">
          Resend Verification
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationForm;
