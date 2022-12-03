import React from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import taskActions from "../../redux/actions/task.actions";

//Function to Filter task by status
function ViewTaskBy() {
  const dispatch = useDispatch();
  const [filter, setFilter] = React.useState("All Tasks");

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="text-left text-lg pl-5 pt-2 ">
      Show
      <Menu as="div" className="relative inline-block text-left ml-3">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            {filter}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* Display Drop down list of how user can view the task list */}
          {/* User will be able to view: All task, only completed task or tasks in progress */}
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() => {
                      setFilter("All Tasks");
                      dispatch(taskActions.getAllTasks());
                    }}
                  >
                    All Tasks
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() => {
                      setFilter("Completed");
                      dispatch(taskActions.getAllTasks("completed"));
                    }}
                  >
                    Completed
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() => {
                      setFilter("In Progress");
                      dispatch(taskActions.getAllTasks("in progress"));
                    }}
                  >
                    In Progress
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default ViewTaskBy;
