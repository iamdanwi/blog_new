import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Login = () => (
  <div className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-3 font-dm-serif tracking-wide">
          Welcome back
        </h1>
        <p className="text-muted-foreground text-sm">
          Sign in to continue to your account
        </p>
      </div>

      {/* Form Card */}
      <div>
        <form className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-11 bg-background/50 border-border/60 focus:border-primary/60 focus:ring-primary/20"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-foreground"
              >
                Password
              </Label>
              <button
                type="button"
                className="text-xs text-primary hover:text-primary/80 font-medium"
              >
                Forgot password?
              </button>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="h-11 bg-background/50 border-border/60 focus:border-primary/60 focus:ring-primary/20"
            />
          </div>

          {/* Remember Me */}
          {/* <div className="flex items-center space-x-2">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-border/60 text-primary focus:ring-primary/20"
            />
            <Label
              htmlFor="remember"
              className="text-sm text-muted-foreground cursor-pointer"
            >
              Remember me for 30 days
            </Label>
          </div> */}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign in
          </Button>
        </form>

        {/* Divider */}
        {/* <div className="flex items-center my-6">
          <div className="flex-1 border-t border-border/40"></div>
          <span className="px-4 text-xs text-muted-foreground bg-card">
            or continue with
          </span>
          <div className="flex-1 border-t border-border/40"></div>
        </div> */}

        {/* Social Login */}
        {/* <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            type="button"
            className="h-11 border-border/60 hover:border-border hover:bg-muted/50"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>
          <Button
            variant="outline"
            type="button"
            className="h-11 border-border/60 hover:border-border hover:bg-muted/50"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </Button>
        </div> */}

        {/* Sign Up Link */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary hover:text-primary/80 font-medium"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Login;
