import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getUserById } from "../../../utils/users";
import Profile from "../../components/Profile";

const ProfilePage = ({}) => {
  const router = useRouter();
  const { profileId } = router.query;
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserById(profileId).then((user) => setUser(user));
  }, [profileId]);
  return <Profile user={user} />;
};

export default ProfilePage;
