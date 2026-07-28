import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      await emailjs.send(
        "service_ow297uy",
        "template_bgqqp18",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "CLtnkAudjL8Drdvrz"
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="page-bg">
      <section className="contactPage">
        <div className="contactPage__container">
          <header className="contactPage__header">
            <h1 className="contactPage__title">Contacto</h1>
            <p className="contactPage__subtitle">
              Contanos qué necesitás y te respondemos a la brevedad.
              También podés escribirnos por WhatsApp.
            </p>
          </header>

          <div className="contactGrid">
            <div className="contactGlass">
              <h2 className="contactGlass__title">Enviar consulta</h2>

              <form className="contactForm" onSubmit={handleSubmit}>
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
                    <div className="field__label">Email</div>
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
                  Mensaje
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
                  <button
                    type="submit"
                    className="contactBtn"
                    disabled={sending}
                  >
                    {sending ? "Enviando..." : "Enviar consulta"}
                  </button>
                </div>

                {status === "success" && (
                  <p className="contactSuccess">
                    ✓ Consulta enviada correctamente.
                  </p>
                )}

                {status === "error" && (
                  <p className="contactError">
                    ✕ Ocurrió un error al enviar la consulta.
                  </p>
                )}

                <p className="contactSmall">
                  Completá el formulario y nos pondremos en contacto a la brevedad.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}