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
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const SignInModal = () => {
  const signInModal = useLoginModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (provider: "google" | "github") => {
    try {
      ("user server");
      await signIn(provider);
    } catch (error) {
      console.log(error);
    }
  };

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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        ...data,
        redirect: false,
      })

      if (result?.error) {
        toast.error(result?.error)
      } else {
        toast.success("Logged in successfully!")
      }

      signInModal.onClose();

      
      
    } catch (err) {
      console.log("An error occurred:", err);
    } finally {
      setIsLoading(false);
    }
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
        type="password"
        required
      />
      <Separator className="mt-2" />
      <div className="space-y-2">
        <Button
          label="Sign with github"
          outline
          onClick={() => handleLogin("github")}
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
