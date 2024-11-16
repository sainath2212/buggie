import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ScrollArea } from "../components/ui/scroll-area";

function Dashboard() {
  // States for tasks, form inputs, and filter data
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskAssignee, setTaskAssignee] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");
  const [taskDate, setTaskDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Filter states
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterDeadline, setFilterDeadline] = useState("");

  // To track if filters should be visible
  const [showFilters, setShowFilters] = useState(false);

  // Handle task creation or editing
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTasks = tasks.map((task, i) =>
        i === editIndex
          ? {
              title: taskTitle,
              description: taskDescription,
              priority: taskPriority,
              assignee: taskAssignee,
              status: taskStatus,
              date: taskDate,
            }
          : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const newTask = {
        title: taskTitle,
        description: taskDescription,
        priority: taskPriority,
        assignee: taskAssignee,
        status: taskStatus,
        date: taskDate,
      };
      setTasks([...tasks, newTask]);
      setShowFilters(true); // Show filters after adding a task
    }
    resetForm();
  };

  // Reset form state
  const resetForm = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("Medium");
    setTaskAssignee("");
    setTaskStatus("Pending");
    setTaskDate("");
  };

  // Handle task editing
  const handleEdit = (index) => {
    const task = tasks[index];
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setTaskPriority(task.priority);
    setTaskAssignee(task.assignee);
    setTaskStatus(task.status);
    setTaskDate(task.date);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Handle completing a task
  const handleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: "Completed" } : task
    );
    setTasks(updatedTasks);
  };

  // Handle deleting a task
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Filter tasks based on the selected filters
  const filteredTasks = tasks.filter((task) => {
    let matchesPriority = filterPriority === "All" || task.priority === filterPriority;
    let matchesStatus = filterStatus === "All" || task.status === filterStatus;
    let matchesDeadline = !filterDeadline || new Date(task.date) <= new Date(filterDeadline);
    return matchesPriority && matchesStatus && matchesDeadline;
  });

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-screen-xl">
        {/* Task Creation/Editing Section */}
        <Card className=" w-fit sm:w-[420px] bg-white text-black shadow-xl p-6 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">
              {isEditing ? "Edit Task/Bug" : "Create Task/Bug"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTaskSubmit}>
              <div className="grid gap-6">
                {/* Task Title */}
                <div className="flex flex-col">
                  <Label htmlFor="title" className="text-sm text-gray-700 font-medium">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Task Title"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    required
                    className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Task Description */}
                <div className="flex flex-col">
                  <Label htmlFor="description" className="text-sm text-gray-700 font-medium">Description</Label>
                  <Input
                    id="description"
                    type="text"
                    placeholder="Task Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    required
                    className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Task Priority */}
                <div className="flex flex-col">
                  <Label htmlFor="priority" className="text-sm text-gray-700 font-medium">Priority</Label>
                  <select
                    id="priority"
                    value={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.value)}
                    className="p-3 border-2 border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                {/* Task Assignee */}
                <div className="flex flex-col">
                  <Label htmlFor="assignee" className="text-sm text-gray-700 font-medium">Assignee</Label>
                  <Input
                    id="assignee"
                    type="text"
                    placeholder="Assignee Name"
                    value={taskAssignee}
                    onChange={(e) => setTaskAssignee(e.target.value)}
                    required
                    className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Task Status */}
                <div className="flex flex-col">
                  <Label htmlFor="status" className="text-sm text-gray-700 font-medium">Status</Label>
                  <select
                    id="status"
                    value={taskStatus}
                    onChange={(e) => setTaskStatus(e.target.value)}
                    className="p-3 border-2 border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                {/* Task Deadline */}
                <div className="flex flex-col">
                  <Label htmlFor="date" className="text-sm text-gray-700 font-medium">Deadline</Label>
                  <Input
                    id="date"
                    type="datetime-local"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    required
                    className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <Button type="submit" className="w-full py-3 bg-green-400 hover:bg-green-700 text-white text-lg rounded-lg focus:ring-2 focus:ring-blue-400">
                  {isEditing ? "Save Changes" : "Add Task"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Task List Section */}
        <div className=" w-fit md:w-[760px] bg-white p-6 shadow-xl rounded-lg ">
          {/* Show Filters Only After Adding a Task */}
          {showFilters && (
            <div className="mb-6 flex justify-center flex-wrap items-center w-fit">
              {/* Filters */}
              <div className="flex gap-8 mb-4 w-64 md:w-full">
                {/* Priority Filter */}
                <div className="flex flex-col md:w-1/4 w-fit ">
                  <Label htmlFor="priorityFilter" className="text-sm text-gray-700 font-medium">Priority</Label>
                  <select
                    id="priorityFilter"
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    className="p-3 border-2 border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                {/* Status Filter */}
                <div className="flex flex-col md:w-1/4">
                  <Label htmlFor="statusFilter" className="text-sm text-gray-700 font-medium">Status</Label>
                  <select
                    id="statusFilter"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="p-3 border-2 border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                {/* Deadline Filter */}
                <div className="flex flex-col w-1/4 ">
                  <Label htmlFor="deadlineFilter" className="text-sm text-gray-700 font-medium">Deadline</Label>
                  <Input
                    id="deadlineFilter"
                    type="datetime-local"
                    value={filterDeadline}
                    onChange={(e) => setFilterDeadline(e.target.value)}
                    className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Filtered Task Cards */}
          <ScrollArea className="max-h-[500px] overflow-auto">
            {filteredTasks.length === 0 ? (
              <div className="text-center text-gray-500">No tasks match the filters.</div>
            ) : (
              filteredTasks.map((task, index) => (
                <Card key={index} className="mb-6 p-6 shadow-md rounded-lg border border-gray-200 bg-white hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">{task.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">Priority: <span className={`font-medium ${task.priority === "High" ? "text-red-600" : task.priority === "Medium" ? "text-yellow-500" : "text-green-600"}`}>{task.priority}</span></p>
                    <p className="text-sm text-gray-600">Status: <span className={`font-medium ${task.status === "Completed" ? "text-green-500" : task.status === "In Progress" ? "text-yellow-500" : "text-gray-600"}`}>{task.status}</span></p>
                    <p className="text-sm text-gray-600">Assignee: {task.assignee}</p>
                    <p className="text-sm text-gray-600">Deadline: {new Date(task.date).toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Description: {task.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-start gap-3">
                    <Button
                      className="bg-yellow-700 hover:bg-yellow-800 text-white py-2 px-4 rounded-lg"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                      onClick={() => handleComplete(index)}
                    >
                      Complete
                    </Button>
                    <Button
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
