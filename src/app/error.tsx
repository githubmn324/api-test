'use client';

import Link from 'next/link';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <>
      <div className="mx-auto mt-20 flex w-4/5 flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-semibold">エラーが発生しました</h1>
        <h4 className="py-10 text-lg font-semibold capitalize text-red-500">
          システム管理者に連絡してください。{error ? error.message : ''}
        </h4>

        <div className="space-x-4">
          <button onClick={reset}>再試行</button>
          <Link className="text-blue-600 underline duration-300 hover:text-red-500" href="/">
            ホームへ戻る
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
