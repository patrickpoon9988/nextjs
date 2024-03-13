"use client";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { uuid } from "../../../types";

const Users = () => {
  const uuid = uuidv4();
  console.log(uuid);

  let uuidList: uuid[] = [];

  const insertUsers = () => {
    const params = new URLSearchParams({
        uuid: uuid
    });

    axios.post('http://localhost:8080/userInsert', params)
    .then((res => {
        console.log(res);
    }))
  }

  const insertUsersFetch = () => {
    const uuid2 = uuidv4();
    const params2 = new URLSearchParams({
        uuid: uuid2
    });

    fetch('http://localhost:8080/userInsert?' + params2, {
        method: 'post',
    }).then((res) => {
        if (res && res.ok) {
            return res;
        } else {
            throw res;
        }
    }).then(res => {
        res.json().then(s => s as uuid[]).then(y => uuidList = y)
    }).catch((exception) => {
        console.log(exception)
    })
  }

  return (
    <div>
      <h2>Hello Users</h2>
      <button className="bg-amber-500" onClick={insertUsers}>Insert new uuid</button>


    </div>
  );
};

export default Users;
