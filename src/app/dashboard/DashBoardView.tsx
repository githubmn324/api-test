type Props = {
  errorFunc: () => void;
};
const DashBoardView = ({ errorFunc }: Props) => {
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

export default DashBoardView;
