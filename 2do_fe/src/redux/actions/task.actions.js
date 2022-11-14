import * as types from "../constants/task.constants";
import api from "../../api";

//geta all task
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

const addTask = (taskData) => async (dispatch) => {
  dispatch({ type: types.ADD_TASKS_REQUEST, payload: null });
  try {
    console.log("Add Tasks", taskData);
    //>>>>ASK ABOUT POST ROUTE<<<<<//
    const res = await api.post(`/tasks`, {
      status: taskData.status,
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
    });

    dispatch({
      type: types.ADD_TASKS_SUCCESS,
      payload: res.data.task_list,
    });
  } catch (error) {
    dispatch({ type: types.ADD_TASKS_FAILURE, payload: error });
  }
};

const deleteTask = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_TASKS_REQUEST });
  try {
    let url = "";
    url = `/tasks/${id}`;

    const res = await api.delete(url);
    dispatch({
      type: types.DELETE_TASKS_SUCCESS,
      payload: res.data.task_list,
    });
  } catch (error) {
    dispatch({ type: types.DELETE_TASKS_FAILURE, payload: error });
  }
};

//get task by id
const getTaskById = (id) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_TASKS_REQUEST });
  try {
    let url = "";
    url = `/tasks/${id}`;

    const res = await api.get(url);
    console.log(id);
    dispatch({
      type: types.GET_SINGLE_TASKS_SUCCESS,
      payload: res.data.task_list,
    });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_TASKS_FAILURE, payload: error });
  }
};

const taskActions = {
  getAllTasks,
  addTask,
  getTaskById,
  deleteTask,
};
export default taskActions;
