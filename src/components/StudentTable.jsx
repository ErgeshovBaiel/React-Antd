import { Table, Input, Space, Button } from "antd";
import React, { useState, useEffect } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const StudentsTable = () => {
  const loadDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("Students");
    return storedData ? JSON.parse(storedData) : [];
  };

  const [data, setData] = useState(loadDataFromLocalStorage());
  const [user, setUser] = useState({
    key: "",
    name: "",
    age: null,
    address: "",
  });

  const onChange = (e, key) => {
    setUser({ ...user, [key]: e.target.value });
  };

  const onClick = () => {
    const updatedData = [...data, user];
    setData(updatedData);

    localStorage.setItem("Students", JSON.stringify(updatedData));

    setUser({
      key: "",
      name: "",
      age: null,
      address: "",
    });
  };

  return (
    <div>
      <Table dataSource={data} columns={columns} />
      <Space direction="vertical" size="large">
        <Input
          value={user.key}
          onChange={(e) => {
            onChange(e, "key");
          }}
          placeholder="key"
        />
        <Input
          value={user.name}
          onChange={(e) => {
            onChange(e, "name");
          }}
          placeholder="name"
        />
        <Input
          value={user.age}
          onChange={(e) => {
            onChange(e, "age");
          }}
          placeholder="age"
        />
        <Input
          value={user.address}
          onChange={(e) => {
            onChange(e, "address");
          }}
          placeholder="address"
        />
        <Button onClick={onClick}>Add User</Button>
      </Space>
    </div>
  );
};

export default StudentsTable;
