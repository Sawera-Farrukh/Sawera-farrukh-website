import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { contactConfig, emailjsConfig } from "../config";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      toast.success("Message sent successfully! I'll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again or reach out directly.");
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#1a1a1a",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: "12px 16px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 16,
    color: "#ffffff",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'GeistMono', monospace",
    fontSize: 12,
    color: "#a1a1aa",
    marginBottom: 8,
    display: "block",
  };

  return (
    <div
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16,
        padding: "clamp(24px, 4vw, 40px)",
      }}
    >
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label style={labelStyle}>{contactConfig.form.nameLabel}</label>
            <input
              type="text"
              name="from_name"
              placeholder={contactConfig.form.namePlaceholder}
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "rgba(200,170,130,0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>
          <div>
            <label style={labelStyle}>{contactConfig.form.emailLabel}</label>
            <input
              type="email"
              name="from_email"
              placeholder={contactConfig.form.emailPlaceholder}
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "rgba(200,170,130,0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label style={labelStyle}>{contactConfig.form.subjectLabel}</label>
          <input
            type="text"
            name="subject"
            placeholder={contactConfig.form.subjectPlaceholder}
            required
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "rgba(200,170,130,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
          />
        </div>

        {/* Message */}
        <div>
          <label style={labelStyle}>{contactConfig.form.messageLabel}</label>
          <textarea
            name="message"
            placeholder={contactConfig.form.messagePlaceholder}
            required
            rows={5}
            style={{
              ...inputStyle,
              resize: "vertical",
              minHeight: 120,
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(200,170,130,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSending}
          className="btn-gradient"
          style={{
            width: "100%",
            justifyContent: "center",
            padding: 16,
            fontSize: 16,
            opacity: isSending ? 0.7 : 1,
            cursor: isSending ? "wait" : "pointer",
          }}
        >
          {isSending ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            contactConfig.form.submitText
          )}
        </button>
      </form>
    </div>
  );
}
