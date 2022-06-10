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
  const { isAuth , role} = useSelector((state) => state.user);

  return (
    

    <div className="meetingPage">
      <div
        className="meetinImgBag"
        style={{ backgroundImage: `url(${meetinImg})` }}
      ></div>
      <div className="bg-text">
      {userList &&
            userList.map((user) =>  (
            <div className="meetingBox">

                     <div className="dashBox">
                       <img className="" src={user.profilePic} alt="" />
                       { user.role === "learner" ? 
                        (<Link to ='/InfoLearner'> <h3>All user</h3></Link>)
                        :                    
                        (<Link to ='/AllCoursAdmin'> <h3>{user.role} : {user.firstName}</h3></Link> ) 
                      }
                     </div>
            </div>
          ))}
      </div>
    </div>
         
  );
};

export default Dashboard;
