import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions';
import Link from 'next/link';
interface props{
  params:{
    id:string
  }
}
const SingleTaskPage = async ({ params }:props) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent'>
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};
export default SingleTaskPage;