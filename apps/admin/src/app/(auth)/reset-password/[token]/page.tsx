import { Metadata } from 'next';

import ResetPasswordForm from './components/ResetPasswordForm';
import ResetPasswordIcon from '@app/components/icons/reset-pw-icon';

export const metadata: Metadata = {
  title: 'Reset Password',
};

const ResetPassword = () => {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="bg-primary flex flex-col items-center justify-center px-4 py-8">
        <p className="text-heading text-center font-medium text-white lg:text-lg">
          Let&apos;s make your <br /> online business thrive together!
        </p>
        <ResetPasswordIcon className="size-56 lg:size-96" />
      </div>
      <div className="flex min-h-[calc(100vh-342px)] flex-col items-center justify-center space-y-5 p-4 lg:mx-auto lg:w-full lg:max-w-md lg:rounded-xl">
        <div className="space-y-2.5">
          <h2 className="text-center text-xl font-semibold leading-9 tracking-tight text-neutral-700">
            Reset Password
          </h2>
          <p className="text-center text-base text-neutral-400">
            Your new password must be different from previously used passwords.
          </p>
        </div>
        <ResetPasswordForm />
      </div>
    </main>
  );
};

export default ResetPassword;
