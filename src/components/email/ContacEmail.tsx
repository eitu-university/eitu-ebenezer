import * as React from 'react';

interface Props {
  fullName: string;
  email: string;
  message: string
}

export function ContactEmail({
  fullName,
  email,
  message
}: Props) {
  return (
    <div>
      {/* <img
        src="http://localhost:3000/images/text-logo1.png"
        alt="Nuclea logo"
        width={40}
        height={40}
        className="h-8 w-28"
      /> */}
      <h1>Nuevo mensaje de {fullName}</h1>
      <p>Email: {email}</p>
      <p>Mensaje: {message}</p>
    </div>
  );
}
