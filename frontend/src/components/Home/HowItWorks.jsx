import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>Getting Started: How It Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Sign up, personalize your profile, and unlock exclusive job listings.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Explore job opportunities or post job listings effortlessly. Instantly connect job seekers and employers.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply for Job/Recruit Candidates</p>
              <p>
              Get hired or hire with ease. Simplified application and recruitment process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
