import React from 'react';

export const linkSent = (email) => {
  const makeHref = (srv) => `https://${srv}`;
  const mailer = /gmail/.test(email)
    ? 'mail.google.com'
    : `${email.split('@')[1]}/login`;
  const link = (
    <a href={makeHref(mailer)} target="blank">
      {email}
    </a>
  );
  return (
    <p>
      A reset link has been sent to
      {' '}
      {link}
. Please check your inbox and follow
      instructions to reset your password
    </p>
  );
};

export const resetSuccess = (
  <p>
    Your password has been successfully reset,
    {' '}
    <a href="/login">login?</a>
  </p>
);
