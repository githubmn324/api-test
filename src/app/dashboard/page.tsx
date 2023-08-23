'use client';
import DashBoardView from './DashBoardView';
import { useErrorFunc } from './errorutil';

const DashBoardPage = () => {
  const { error, errorFunc } = useErrorFunc();
  if (error) {
    throw new Error('dummy error test');
  }
  return (
    <ErrorBoundary>
      <DashBoardView errorFunc={errorFunc}></DashBoardView>
    </ErrorBoundary>
  );
};
export default DashBoardPage;
