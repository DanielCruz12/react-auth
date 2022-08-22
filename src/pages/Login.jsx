import { LockClosedIcon } from "@heroicons/react/solid";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Logo from "../assets/img/logo.png";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, signInWithGoogle, resetPass } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const resetPassword = async () => {
    if (!user.email) return setError("Porfavor ingresa tu correo");
    try {
      await resetPass(user.email); 
      setError('hemos enviado un link a tu correo para restablecer tu contraseña')
    } catch (error) {
      setError(error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      swal("Good job!", "login succesfully!", "success", {
        button: "login!",
      });
      navigate("/");
    } catch (error) {
      setError(error.message);

      switch (error.code) {
        case "auth/invalid-email":
          setError("Correo invalido");
          break;

        case "auth/wrong-password":
          setError("Contraseña incorrecta");
          break;

        case "auth/email-already-in-use":
          setError("El correo actual ya esta en uso");
          break;

        case "auth/user-not-found":
          setError("Usuario no encontrado");
          break;

        case "auth/internal-error":
          setError("Error interno");
          break;
      }
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithGoogle();
      swal("Good job!", "login with google succesfully!", "success", {
        button: "login!",
      });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg">
      {error && (
        <div className=" text-blue-800 text-sm p-4 flex justify-center">
          <div className="bg-red-50 border-b border-red-400 text-red-800 text-sm p-4 flex justify-between">
            <div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>
                  <span className="font-bold">Info: </span>
                  {error}
                </p>
              </div>
            </div>
            <div>
              <button onClick={() => setError(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="text-dark min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-white">
                Iniciar sesión
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                and{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  register to see different projects!!
                </a>
              </p>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="p-2 m-2">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    onChange={handleChange}
                  />
                </div>
                <div className="p-2 m-2">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-white"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <button className="font-medium text-indigo-600 hover:text-indigo-500" onClick={resetPassword}>
                      Forgot your password?
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400 pr-2"
                      aria-hidden="true"
                    />
                  </span>
                  Login
                </button>
              </div>

              <div>
                <Link
                  to="/register"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registrarse
                </Link>
              </div>
            </form>

            <div>
              <div>
                <p>or continue with: </p>
              </div>
              <div className="flex justify-center pb-3">
                <button className="btn btn primary m-2" onClick={handleGoogle}>
                  <a className="mx-auto h-12 w-auto">
                    <FcGoogle />
                  </a>
                </button>
                <button className="btn btn primary m-2">
                  <BsFacebook />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
