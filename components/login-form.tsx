import { cn } from 'cn';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { UserRoundKeyIcon } from 'lucide-react';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-start gap-1 text-center">
          <h1 className="text-2xl font-bold">Let&apos;s get started! 👋</h1>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="someone@example.com"
            required
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ms-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••••••"
            required
          />
        </Field>
        <Field>
          <Button type="submit">Continue</Button>
        </Field>
        <FieldSeparator>Quick Sign-in Options</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <UserRoundKeyIcon className="size-5" />
            Sign-in with your Passkey
          </Button>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{' '}
            <a href="#" className="underline underline-offset-4">
              Sign up.
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
