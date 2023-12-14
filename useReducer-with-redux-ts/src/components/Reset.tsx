import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store";

interface ButtonProps {
  dispatch: AppDispatch;
  reset: ActionCreatorWithPayload<number, "counter/reset">;
}
export default function ResetButton({ dispatch, reset }: ButtonProps) {
  return <button onClick={() => dispatch(reset(4))}>Reset</button>;
}
