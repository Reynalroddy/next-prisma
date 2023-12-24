import TaskForm from '@/components/TaskForm';
// import TaskFormCustom from '@/components/TaskFormCustom';
import TaskList from '@/components/TaskList';
export const dynamic = 'force-dynamic';
const TasksPage = () => {
  return (
    <div className='max-w-lg px-8'>
      <TaskForm />
      <TaskList />
    </div>
  );
};
export default TasksPage;