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
  nationFlag: string;
}

const styles = {
  wrapper: {
    backgroundColor: '#ffffff',
    padding: '32px 16px',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  },
  card: {
    maxWidth: '560px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: '28px 32px',
    color: '#000000',
    textAlign: 'center' as const,
    borderBottom: '1px solid #e5e7eb',
  },
  headerFlag: {
    fontSize: '36px',
    lineHeight: '1',
    margin: '0 0 8px',
    display: 'block',
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: 700,
    margin: 0,
    color: '#000000',
  },
  headerSubtitle: {
    fontSize: '14px',
    margin: '6px 0 0',
    color: '#000000',
  },
  body: {
    padding: '28px 32px',
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#000000',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    margin: '0 0 12px',
  },
  section: {
    marginBottom: '24px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #e5e7eb',
  },
  label: {
    fontSize: '14px',
    color: '#000000',
  },
  value: {
    fontSize: '14px',
    color: '#000000',
    fontWeight: 600,
    textAlign: 'right' as const,
  },
  footer: {
    padding: '16px 32px',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e5e7eb',
    fontSize: '12px',
    color: '#000000',
    textAlign: 'center' as const,
  },
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.row}>
      <span style={styles.label}>{label}</span>
      <span style={styles.value}>{value}</span>
    </div>
  );
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
  nationFlag,
}: Props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.headerFlag}>{nationFlag}</span>
          <p style={styles.headerTitle}>Nuevo registro de asociado</p>
          <p style={styles.headerSubtitle}>País: {nationName}</p>
        </div>

        <div style={styles.body}>
          <div style={styles.section}>
            <p style={styles.sectionTitle}>Datos personales</p>
            <Row label="Nombre completo" value={`${firstName} ${lastName}`} />
            <Row label="Fecha de nacimiento" value={birthDate} />
          </div>

          <div style={styles.section}>
            <p style={styles.sectionTitle}>Contacto</p>
            <Row label="Teléfono" value={phone} />
            <Row label="Email" value={email} />
          </div>

          <div style={styles.section}>
            <p style={styles.sectionTitle}>Dirección</p>
            <Row label="Dirección" value={address} />
            <Row label="Ciudad" value={city} />
            <Row label="Estado / Provincia" value={state} />
            <Row label="Código postal" value={postalCode} />
          </div>
        </div>

        <div style={styles.footer}>
          Este mensaje fue generado automáticamente desde el formulario de
          registro de {nationName} en eituebenezer.
        </div>
      </div>
    </div>
  );
}
