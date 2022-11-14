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

//delete a task
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
  getTaskById,
  deleteTask,
};
export default taskActions;
