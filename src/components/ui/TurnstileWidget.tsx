"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type TurnstileOptions = {
  sitekey: string;
  action?: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact" | "flexible";
  language?: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
};

export default function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const renderWidget = useCallback(() => {
    if (
      !siteKey ||
      !containerRef.current ||
      !window.turnstile ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action: "portfolio_contact",
      theme: "auto",
      size: "flexible",
      language: "pt-br",
      callback: onVerify,
      "expired-callback": onExpire,
      "error-callback": onError,
    });
  }, [onError, onExpire, onVerify, siteKey]);

  useEffect(() => {
    if (scriptReady || window.turnstile) {
      renderWidget();
    }
  }, [renderWidget, scriptReady]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  if (!siteKey) {
    return (
      <div className="rounded-2xl border border-red-400/35 bg-red-400/10 p-4 text-sm leading-6 text-[color:var(--text)]">
        A verificação de segurança não está configurada.
      </div>
    );
  }

  return (
    <>
      <Script
        id="cloudflare-turnstile-script"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onReady={() => setScriptReady(true)}
      />

      <div
        ref={containerRef}
        className="min-h-[65px] w-full overflow-hidden rounded-2xl"
      />
    </>
  );
}
