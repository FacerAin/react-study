import React, { useState, useEffect, useReducer } from "react";
import useInputs from "./useInputs";
/*
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}
*/

const Info = () => {
  /*
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  */
  const [state, onChange] = useInputs({
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;
  /*
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };
*/
  /*
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log({
      name,
      nickname
    });
  });
  */

  /*
  useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
  }, []);
  */
  /*
  useEffect(() => {
    console.log(name);
  }, [name]);
  */
  /*
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });
  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNickName = e => {
    setNickname(e.target.value);
  };
  */
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
