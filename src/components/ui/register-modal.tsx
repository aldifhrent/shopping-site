"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./modals";
import { useRegisterModal } from "@/app/hooks/registerModal";
import Heading from "./heading";
import CustomInput from "./custom-input";
import { Separator } from "./separator";
import Button from "../button";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
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

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setIsLoading(true);

    axios
      .post("/api/auth/account/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log({ error });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = async (provider: "google" | "github") => {
    try {
      ("user server");
      await signIn(provider);
    } catch (error) {
      console.log(error);
    }
  };
  const bodyContent = (
    <div className="flex flex-col gap-y-4">
      <Heading title="Welcome to fashion" subtitle="Create an account" />
      <CustomInput
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CustomInput
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Separator className="mt-2" />
      <div className="space-y-2">
        <Button
          label="Sign up with github"
          outline
          onClick={() => handleLogin("github")}
          icon={AiFillGithub}
        />
        <Button
          label="Sign up with google"
          outline
          onClick={() => handleLogin("google")}
          icon={FcGoogle}
        />
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
