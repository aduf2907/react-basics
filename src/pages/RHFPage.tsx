import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// type RegisterFormSchema = {
//   password: string;
//   username: string;
// };

const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Minimal 3 karakter cuy" })
      .max(10, { message: "Maksimal 10 karakter cuy" }),
    password: z.string().min(8),
    repeatPassword: z.string(),
    age: z.number().min(18),
    dob: z.date().min(new Date()),
  })
  .superRefine((arg, ctx) => {
    if (arg.password !== arg.repeatPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["repeatPassword"],
        message: "Password tidak sama",
      });
    }
  });

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const RHFPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterUser = (values: RegisterFormSchema) => {
    alert("Form submmited");
    console.log(values);
  };

  return (
    <div>
      <h1>React Hook Form</h1>

      <form
        onSubmit={form.handleSubmit(handleRegisterUser)}
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <label>
          Username:
          <input type="text" {...form.register("username")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.username?.message}
        </span>

        <label>
          Password:
          <input
            type={showPassword ? "text" : "password"}
            {...form.register("password")}
          />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.password?.message}
        </span>

        <label>
          Repeat Password:
          <input
            type={showPassword ? "text" : "password"}
            {...form.register("repeatPassword")}
          />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.repeatPassword?.message}
        </span>

        <label>
          <input
            type="checkbox"
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          Show password
        </label>

        <label>
          Age:
          <input
            type="number"
            {...form.register("age", { valueAsNumber: true })}
          />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.age?.message}
        </span>

        <label>
          Dob:
          <input type="date" {...form.register("dob", { valueAsDate: true })} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.dob?.message}
        </span>

        <button style={{ width: "fit-content" }}>Register User</button>
      </form>
    </div>
  );
};

export default RHFPage;
