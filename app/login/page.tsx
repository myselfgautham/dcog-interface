import { LoginForm } from '@/components/login-form';
import { LucideActivity } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-start gap-2">
          <div className="flex items-center gap-2 text-lg font-medium">
            <div className="bg-primary text-primary-foreground flex size-7.5 items-center justify-center rounded-md">
              <LucideActivity className="size-5" />
            </div>
            D.Cog.
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
