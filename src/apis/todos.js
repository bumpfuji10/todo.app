import axios from "axios";
const todoDataUrl = "http://localhost:3100/todos";
// サーバー上の全てのTODO(todos)を取得するgetAllTodosData関数を宣言
// 他ファイルでgetAllTodosData()を使用できるようにするためexportしておく
export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};

// axios.post()で新規TODOを追加する
// TODOを追加するaddTodoData関数を宣言
// 他ファイルでaddTodoData()を利用できるようにするためexportしておく
export const addTodoData = async (todo) => {

  // 第二引数に、送信したいデータを指定してPOST送信
  // サーバーに転送することで新規のデータを追加
  const response = await axios.post(todoDataUrl, todo);
  // 通信後、response.dataでレスポンスデータを返す
  return response.data;
};

export const deleteTodoData = async (id) => {
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
};

export const updateTodoData = async (id, todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
};
