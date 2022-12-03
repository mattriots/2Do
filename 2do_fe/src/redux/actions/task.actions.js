import * as types from "../constants/task.constants";
import api from "../../api";
import { toast } from "react-toastify";

//Being used
const getAllTasks = (status, dueDate) => async (dispatch) => {
  dispatch({ type: types.GET_ALL_TASKS_REQUEST });
  try {
    let url = "";
    if (status === undefined && dueDate === undefined) {
      url = `/tasks`;
    } else if (status !== undefined && dueDate === undefined) {
      url = `/tasks?status=${status}`;
    } else {
      url = `/tasks?status=${status}&dueDate=${dueDate}`;
    }
    const res = await api.get(url);
    dispatch({
      type: types.GET_ALL_TASKS_SUCCESS,
      payload: res.data.task_list,
    });
  } catch (error) {
    dispatch({ type: types.GET_ALL_TASKS_FAILURE, payload: error });
  }
};

//Being used
const addTask = (taskData) => async (dispatch) => {
  dispatch({ type: types.ADD_TASKS_REQUEST, payload: null });
  try {
    const res = await api.post(`/tasks`, {
      status: taskData.status,
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
    });

    dispatch({
      type: types.ADD_TASKS_SUCCESS,
      payload: res.data,
    });
    toast.success(" Add Task Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } catch (error) {
    dispatch({ type: types.ADD_TASKS_FAILURE, payload: error });
    toast.error("Add Task Failed!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

//Being used
const deleteTask = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_TASKS_REQUEST });
  try {
    let url = "";
    url = `/tasks/${id}`;

    await api.delete(url);
    dispatch({
      type: types.DELETE_TASKS_SUCCESS,
      id: id,
    });
    toast.success(" Delete Task Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } catch (error) {
    dispatch({ type: types.DELETE_TASKS_FAILURE, payload: error });
    toast.error("Delete Task Failed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

//Being used
const getTaskById = (id) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_TASKS_REQUEST });
  try {
    let url = "";
    url = `/tasks/${id}`;
    const res = await api.get(url);
    dispatch({
      type: types.GET_SINGLE_TASKS_SUCCESS,
      payload: res.data.single_task,
    });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_TASKS_FAILURE, payload: error });
  }
};

//Being used
const updateTaskById = (taskData, id) => async (dispatch) => {
  dispatch({ type: types.UPDATE_TASKS_REQUEST });
  try {
    let url = "";
    url = `/tasks/${id}`;

    const res = await api.put(url, {
      status: taskData.status,
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
    });

    dispatch({
      type: types.UPDATE_TASKS_SUCCESS,
      payload: res.data.single_task,
    });

    toast.success(" Update Task Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } catch (error) {
    dispatch({ type: types.UPDATE_TASKS_FAILURE, payload: error });
    toast.error("Update Task Failed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

const taskActions = {
  updateTaskById,
  getAllTasks,
  addTask,
  getTaskById,
  deleteTask,
};
export default taskActions;
