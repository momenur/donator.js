import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen mx-auto text-white bg-cover bg-login-gradient max-w-7xl">
      <form className="px-6 py-4 bg-black rounded-md shadow-2xl h-1/2">
        <h1 className="py-8 text-2xl font-semibold text-color-text ">
          Please Login Here...!!!
        </h1>
        <div>
          <label className="block" htmlFor="email">
            Your Email
          </label>
          <input
            className="w-full bg-gray-200"
            type="email"
            name=""
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="w-full mt-6">
          <label className="block" htmlFor="email">
            Your Password
          </label>
          <input
            className="w-full bg-gray-200"
            type="Password"
            name=""
            id="email"
            placeholder="Enter Your Password"
          />
        </div>
        <Button className="w-full mt-6">Login</Button>
      </form>
    </div>
  );
};

export default Login;
