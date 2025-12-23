// src/Pages/Contact/Contact.jsx
import React, { useMemo, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const mailtoHref = useMemo(() => {
    // Definí el correo destino en .env para no hardcodearlo
    const to = import.meta.env.VITE_CONTACT_EMAIL;
    if (!to) return null;

    const subject = `Consulta desde la web - ${form.name || "Sin nombre"}`;
    const bodyLines = [
      `Nombre: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Teléfono: ${form.phone || "-"}`,
      "",
      "Mensaje:",
      form.message || "-",
    ];

    const body = bodyLines.join("\n");
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const canSend = form.email.trim() && form.message.trim() && mailtoHref;

  return (
    <section className="contactPage">
      <div className="contactPage__container">
        <header className="contactPage__header">
          <h1 className="contactPage__title">Contacto</h1>
          <p className="contactPage__subtitle">
            Contanos qué necesitás y te respondemos a la brevedad. También podés escribirnos por WhatsApp.
          </p>
        </header>

        <div className="contactGrid">
          {/* FORM */}
          <div className="contactGlass">
            <h2 className="contactGlass__title">Enviar consulta</h2>

            <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
              <div className="contactRow">
                <div className="field">
                  <div className="field__label">Nombre</div>
                  <input
                    className="contactInput"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                </div>

                <div className="field">
                  <div className="field__label">
                    Email <span className="contactReq"></span>
                  </div>
                  <input
                    className="contactInput"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="tu@email.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <label className="contactLabel">
                Teléfono (opcional)
                <input
                  className="contactInput"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="Ej: 261 555 1234"
                  autoComplete="tel"
                />
              </label>

              <label className="contactLabel">
                Mensaje <span className="contactReq"></span>
                <textarea
                  className="contactTextarea"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Contanos qué estás buscando (tipología, medidas, ubicación, plazos, etc.)"
                  rows={6}
                  required
                />
              </label>

              <div className="contactActions">
                {mailtoHref ? (
                  <button
                    type="button"
                    className={`contactBtn ${canSend ? "" : "is-disabled"}`}
                    disabled={!canSend}
                    onClick={() => {
                      if (!mailtoHref) return;
                      window.location.href = mailtoHref;
                    }}
                  >
                    Enviar por correo
                  </button>
                ) : (
                  <div className="contactHint">
                    Configurá <code>VITE_CONTACT_EMAIL</code> para habilitar el envío por correo.
                  </div>
                )}
              </div>
              <p className="contactSmall">
                * Este formulario abre tu cliente de correo y envía el mensaje directamente al equipo de FAST.
                Si preferís una respuesta inmediata, podés contactarnos por WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
