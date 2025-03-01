import { create, StateCreator } from 'zustand';

type CounterState = {
  counter: number;
};

type CounterActions = {
  decrement: () => void;
  increment: () => void;
  changeByAmount: (value: number) => void;
};

const counterSlice: StateCreator<CounterState & CounterActions> = (
  set,
  get
) => ({
  counter: 0,
  decrement: () => {
    const { counter } = get();
    set({ counter: counter - 1 });
  },
  increment: () => {
    const { counter } = get();
    set({ counter: counter + 1 });
  },
  changeByAmount: (value: number) => {
    const { counter } = get();
    set({ counter: counter + value });
  }
});

export const useCounterStore = create<CounterState & CounterActions>(
  counterSlice
);

export const changeByAmount = (value: number) =>
  useCounterStore.getState().changeByAmount(value);
export const getCounter = () => useCounterStore.getState().counter;
