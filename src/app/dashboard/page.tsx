'use client';
import { useErrorFunc } from './errorutil';

const DashBoardPage = () => {
  const { error, errorFunc } = useErrorFunc();
  if (error) {
    throw new Error('dummy error test');
  }
  return (
    <div>
      <h1>Dashboard</h1>
      {/* <button>button</button> */}
      <button
        className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-300"
        onClick={errorFunc}
      >
        エラー
      </button>
    </div>
  );
};
export default DashBoardPage;
