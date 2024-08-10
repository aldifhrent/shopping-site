"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form";
import Modal from "./modals";
import { useLoginModal } from "@/app/hooks/loginModal";
import Heading from "./heading";
import { Input } from "./input";
import CustomInput from "./custom-input";
import { DropdownMenuSeparator } from "./dropdown-menu";
import { Separator } from "./separator";
import Button from "../button";

const SignInModal = () => {
  const signInModal = useLoginModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        signInModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-y-4">
      <Heading title="Welcome to fashion" subtitle="Create an account" />
      <CustomInput
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CustomInput
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Separator className="mt-2" />
      <div className="space-y-2">
        <Button
          label="Sign with github"
          outline
          onClick={() => {}}
          icon={AiFillGithub}
        />
        <Button
          label="Sign with google"
          outline
          onClick={() => {}}
          icon={FcGoogle}
        />
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={signInModal.isOpen}
      title="Sign In"
      actionLabel="Sign In"
      onClose={signInModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default SignInModal;
