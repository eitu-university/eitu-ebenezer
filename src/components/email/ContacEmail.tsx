import * as React from 'react';

interface Props {
  fullName: string;
  email: string;
  ministryLabel: string;
  message: string;
}

const styles = {
  wrapper: {
    backgroundColor: '#f3f4f6',
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
    padding: '24px 32px',
    textAlign: 'center' as const,
    borderBottom: '1px solid #e5e7eb',
  },
  logo: {
    height: '48px',
    marginBottom: '12px',
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#111827',
    margin: 0,
  },
  headerSubtitle: {
    fontSize: '13px',
    color: '#6b7280',
    margin: '4px 0 0',
  },
  body: {
    padding: '28px 32px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #f3f4f6',
  },
  label: {
    fontSize: '14px',
    color: '#6b7280',
  },
  value: {
    fontSize: '14px',
    color: '#111827',
    fontWeight: 600,
    textAlign: 'right' as const,
  },
  messageLabel: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#6b7280',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    margin: '20px 0 8px',
  },
  messageBox: {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#111827',
    whiteSpace: 'pre-wrap' as const,
  },
  footer: {
    padding: '16px 32px',
    backgroundColor: '#f9fafb',
    fontSize: '12px',
    color: '#9ca3af',
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

export function ContactEmail({
  fullName,
  email,
  ministryLabel,
  message,
}: Props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img
            src="https://eituebenezer.com/images/logo-eituebenezer.jpg"
            alt="EITU Ebenezer"
            style={styles.logo}
          />
          <p style={styles.headerTitle}>Nuevo mensaje de contacto</p>
          <p style={styles.headerSubtitle}>
            Recibido a través del formulario de contacto del sitio web
          </p>
        </div>

        <div style={styles.body}>
          <Row label="Nombre" value={fullName} />
          <Row label="Email" value={email} />
          <Row label="Capellanía" value={ministryLabel} />

          <p style={styles.messageLabel}>Mensaje</p>
          <div style={styles.messageBox}>{message}</div>
        </div>

        <div style={styles.footer}>
          Este mensaje fue generado automáticamente desde el formulario de
          contacto en eituebenezer.com.
        </div>
      </div>
    </div>
  );
}
