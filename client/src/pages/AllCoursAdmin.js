import React, { useEffect } from "react";
import { useDispatch, useSelector , updateCoursList} from "react-redux";
import { Link } from "react-router-dom";
import { getCours, remouveCours } from "../slices/CoursSlice";
import { loadUserInfo } from "../slices/userSlice";

const AllCoursAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCours());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const { userInfo } = useSelector((state) => state.user);
  const { coursList } = useSelector((state) => state.cours);
  return (
    <div>
      {coursList &&
        coursList.map((cours) => (
          <div key={cours._id} className="coursePage">
            
              <div className="courseGroup">
                <div className="ownerCrs">
                  <h1>{cours.owner.firstName}</h1>
                  <h1>{cours.owner.lastName}</h1>
                </div>
                <h1 className="title">{cours.title}</h1>
                <p className="coursText">{cours.coursPdf}</p>
                <iframe
                  width="420"
                  height="345"
                  src={cours.coursVideo}
                ></iframe>{" "}
                <br />
                <Link to={cours.LinkMeeting}>LinkMeeting</Link>
                <br />
                <p>{cours.dateMeeting}</p>
               
              </div>
          
          </div>
        ))}
    </div>
  );
};

export default AllCoursAdmin;
