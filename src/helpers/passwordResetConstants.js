import React from 'react';

export const sent = (email) => {
  const makeHref = (srv) => `https://${srv}`;
  const mailer = /gmail/.test(email)
    ? 'mail.google.com'
    : `${email.slice(email.indexOf('@'))}/login`;
  const link = (
    <a href={makeHref(mailer)} target="new">
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

export const passwordReset = (
  <p>
      Your password has been successfully reset,
    {' '}
    <a href="/login">login?</a>
  </p>
);
