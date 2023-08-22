'use client';

export default function Home() {
  const test = () => {
    console.log('#####test');
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">テスト</h1>
      <div>
        <h1>テスト2</h1>
      </div>

      <p>
        <button
          className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-300"
          onClick={test}
        >
          Delete Todo
        </button>
      </p>
      <br></br>
      <p>{/* <Button label="test" onClick={test2}></Button> */}</p>
    </>
  );
}
