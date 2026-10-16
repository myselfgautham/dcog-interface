// TODO: Add form submit handlers

import { cn } from 'cn';

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// TODO: Add a better passkey icon
import { UserRoundKeyIcon } from 'lucide-react';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <FieldGroup>
        {/* Large welcome text shown in bold */}
        <div className="flex flex-col items-start gap-1 text-center">
          <h1 className="text-2xl font-bold">Let&apos;s get started! 👋</h1>
        </div>
        {/* Email address input field */}
        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="someone@example.com"
            required
          />
        </Field>
        {/* Password input field */}
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            {/* TODO: Add forgot password mechanism */}
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
        {/* Primary form submit button */}
        <Field>
          <Button type="submit">Continue</Button>
        </Field>
        {/* Additional elements shown on screen */}
        <FieldSeparator>Quick Sign-in Options</FieldSeparator>
        <Field>
          {/* TODO: Sign-in with passkey option */}
          <Button variant="outline" type="button">
            <UserRoundKeyIcon className="size-5" />
            Sign-in with your Passkey
          </Button>
          {/* TODO: Add a proper sign-up option */}
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
