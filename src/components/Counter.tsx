import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import {
  decrement,
  increment,
  incrementAsync,
} from '../state/counter/counterSlice';
import { useAppDispatch } from '../hooks/redux';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
