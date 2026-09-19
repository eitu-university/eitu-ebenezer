import * as React from 'react';

interface Props {
  firstName: string;
  lastName: string;
  birthDate: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  nationName: string;
}

export function NationRegistrationEmail({
  firstName,
  lastName,
  birthDate,
  phone,
  email,
  address,
  city,
  state,
  postalCode,
  nationName,
}: Props) {
  return (
    <div>
      <h1>Nuevo registro - {nationName}</h1>
      <p>
        Nombre: {firstName} {lastName}
      </p>
      <p>Fecha de nacimiento: {birthDate}</p>
      <p>Teléfono: {phone}</p>
      <p>Email: {email}</p>
      <p>Dirección: {address}</p>
      <p>Ciudad: {city}</p>
      <p>Estado/Provincia: {state}</p>
      <p>Código postal: {postalCode}</p>
    </div>
  );
}
