import { FieldValues, useForm } from "react-hook-form";
import { useMemo } from "react";

const useInput = <T extends FieldValues>() => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<T>();

  // Memoize the returned object to prevent unnecessary re-renders
  return useMemo(() => ({
    register,
    handleSubmit,
    watch,
    errors,
    reset,
  }), [register, handleSubmit, watch, errors, reset]);
};

export default useInput;