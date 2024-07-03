import { useForm } from "react-hook-form";
type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-8 rounded-md bg-slate-800 w-1/3"
      >
        <h1 className="text-white text-3xl p-4 text-center font-medium">
          Bienvenido
        </h1>

        <div className="mb-10 flex flex-col">
          <label htmlFor="email" className="text-white my-1 font-normal">
            Correo
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese correo electronico"
            className="outline-none bg-slate-600 p-2 rounded-md hover:bg-slate-500"
            {...register("email", { required: "El correo es requerido" })}
          />
          {errors.email && (
            <p className="text-red-700 text-center my-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-10 flex flex-col">
          <label htmlFor="pass" className="text-white my-1 font-normal">
            Contraseña
          </label>
          <input
            type="password"
            id="pass"
            placeholder="Ingrese contraseña"
            className="outline-none bg-slate-600 p-2 rounded-md hover:bg-slate-500"
            {...register("password", {
              required: "La contraseña es requerida",
            })}
          />
          {errors.password && (
            <p className="text-red-700 text-center my-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <input
          className="p-2 text-white bg-green-600 rounded-md hover:bg-green-700"
          type="submit"
          value="Ingresar"
        />
      </form>
    </div>
  );
}
