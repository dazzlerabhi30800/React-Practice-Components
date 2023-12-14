import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store";

interface ButtonProps {
  dispatch: AppDispatch;
  reset: ActionCreatorWithPayload<number, "counter/reset">;
  payload: number;
}
export default function ResetButton({ dispatch, reset, payload }: ButtonProps) {
  return (
    <button onClick={() => dispatch(reset(payload))}>Reset to {payload}</button>
  );
}
