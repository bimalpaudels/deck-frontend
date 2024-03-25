import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { CardStackMinusIcon } from "@radix-ui/react-icons";
import { login } from "./actions";

export default function LoginForm() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/4">
        <form action={login}>
          <div className="flex items-center justify-center text-slate-900 font-bold gap-2 text-lg">
            <CardStackMinusIcon width="40" height="40" />
            BMlDeck
          </div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900 mb-4">
            Login to your account
          </h2>
          <p className="text-center text-sm text-gray-400 mb-4">
            Don't have an account yet?{" "}
            <Link href="#" className="text-green-500">
              Signup
            </Link>
          </p>

          <Input
            className="p-4 mb-4 rounded-md"
            placeholder="example@example.com"
            name="email"
          ></Input>
          <Input
            className="p-4 mb-4 rounded-md"
            type="password"
            placeholder="password"
            name="password"
          ></Input>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Input
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
              <Label className="ml-2 block text-sm text-gray-400">
                Remember Me
              </Label>
            </div>
            <div className="text-sm text-green-500">
              <Link href="/forgot-password">Forgot password?</Link>
            </div>
          </div>
          <Button type="submit" className="w-full h-10">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
