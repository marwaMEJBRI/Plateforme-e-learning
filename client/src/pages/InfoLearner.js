import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProfile } from "../slices/userSlice";
const InfoLearner = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, role, profilePic } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(GetAllProfile());
  }, []);
  const { userList } = useSelector((state) => state.user);
  return (
    <div class="card shadow-lg">
    <div class="card-body">
      <div class="basis-member staff">
        <div class="container">
          <div class="row">
            {userList &&
              userList.map((user) => (
                <div class="col-lg-3 blockDash" ey={user._id}>
                  <div class="card member-box shadow-lg">
                    <span class="shape"></span>
                    
                    <img class="card-img-top" src={user.profilePic} alt="" />
                    <div class="card-body">
                      <span class="member-degignation">
                        <h3>{user.firstName}</h3>
                        <h3>{user.lastName}</h3>
                      </span>
                      <h4 class="member-title">{user.email}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default InfoLearner;
