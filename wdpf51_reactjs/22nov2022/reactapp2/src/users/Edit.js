import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Edituser from "./Edituser";

const Edit = () => {
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    edituserlist(params.uid);
  }, []);

  const [isuser, setuser] = useState([]);
  const [isloaduser, setloaduser] = useState(false);
  const edituserlist = async (ids) => {
    try {
      axios
        .post(
          `http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/getuser.php`,
          {
            userids: ids,
          }
        )
        .then((res) => {
          console.log(res.data.userlist.userdata[0]);
          setuser(res.data.userlist.userdata[0]);
          setloaduser(true);
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="col-sm-8">{isloaduser && <Edituser list={isuser} />}</div>
  );
};

export default Edit;
