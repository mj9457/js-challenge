import React, { useEffect, useState } from "react";

const C1 = () => {
  const [inputText, setInputText] = useState(""); // 할일 인풋 값
  const [todoList, setTodoList] = useState([]); // 전체 리스트

  const [mainBtnName, setMainBtnName] = useState(false); // 메인 버튼 기본값은 추가

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  // 추가
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const addList = () => {
    if (inputText === "") {
      alert("할 일을 입력해주세요");
      return;
    } else if (todoList.some((x) => x.text === inputText)) {
      alert("동일한 목록이 이미 존재합니다.");
      return;
    }
    setTodoList([...todoList, { text: inputText, isCompleted: false }]);
    setInputText("");
  };
  // 수정
  const modifiList = (list) => {
    console.log(list);
    // setMainBtnName(true);
    // setInputText("");
    // setInputText(list.text);
  };
  // 삭제
  const deleteList = (list) => {
    setTodoList(todoList.filter((x) => x.text !== list.text));
  };
  // 완료
  const completeList = (isCompleted) => {
    console.log(isCompleted);
  };
  return (
    <div>
      <p className="text-2xl font-[600]">TO-DO</p>
      <input
        placeholder="할 일을 입력해주세요."
        onChange={handleInputChange}
        value={inputText}
      />
      <button onClick={mainBtnName ? addList : addList}>
        {mainBtnName ? "수정" : "추가"}
      </button>
      {todoList.map((x, i) => (
        <div className="flex" key={i}>
          <p>{x.text}</p>
          <button onClick={() => modifiList(x)}>수정</button>
          <button onClick={() => deleteList(x)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default C1;
