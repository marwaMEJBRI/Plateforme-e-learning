import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetAllProfile, deleteProfile } from "../slices/userSlice";
import meetinImg from "./meetinImg.jpg";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProfile());
  }, []);
  const { userList } = useSelector((state) => state.user);
  const { isAuth, role } = useSelector((state) => state.user);

  return (
    <div className="meetingPage">
      <div
        className="meetinImgBag"
        style={{ backgroundImage: `url(${meetinImg})` }}
      ></div>
      <div className="bg-text">
        {userList &&
          userList.map((user) => (
            <div className="meetingBox">
              <div className="dashBox">
                <img className="" src={user.profilePic} alt="" />
                
                {user.role === "admin" ? (
                  <>
                    <Link to="/Profile">
                      {" "}
                      <h3>My Profile</h3>
                    </Link>
                  </>
                ) : user.role === "learner" ? (
                  <>
                    <Link to="/InfoLearner">
                      
                      <h3>All user</h3>
                    </Link>
                  </>
                ) : user.role === "instructor" ? (
                  <>
                    <Link to="/AllCoursAdmin">
                   
                      <h3>All cours</h3>
                    </Link>
                  </>
                ) : null}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
