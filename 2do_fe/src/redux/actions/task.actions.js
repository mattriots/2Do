import * as types from "../constants/task.constants";
import api from "../../api";

const getAllTasks = () => async (dispatch) => {
  dispatch({ type: types.GET_ALL_TASKS_REQUEST });
  try {
    const res = await api.get(`/tasks`);
    dispatch({
      type: types.GET_ALL_TASKS_SUCCESS,
      payload: res.data.task_list,
    });
  } catch (error) {
    dispatch({ type: types.GET_ALL_TASKS_FAILURE, payload: error });
  }
};

const taskActions = {
  getAllTasks,
};
export default taskActions;
