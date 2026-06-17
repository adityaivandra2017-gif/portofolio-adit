"use client";

import { useCallback, useState } from "react";
import type { DemoAccount } from "@/lib/constants/projects";

type ProjectDemoAccountsProps = {
  accounts: readonly DemoAccount[];
};

type CopyButtonProps = {
  value: string;
  label: string;
};

function CopyButton({ value, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard tidak tersedia */
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Salin ${label}`}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line/70 bg-bg-main/70 px-2.5 py-1.5 text-xs font-medium text-body transition-all duration-200 hover:border-primary/45 hover:bg-primary/10 hover:text-title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-3"
    >
      {copied ? (
        <>
          <CheckIcon />
          Tersalin
        </>
      ) : (
        <>
          <CopyIcon />
          Salin
        </>
      )}
    </button>
  );
}

function CopyIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CredentialRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg border border-line/50 bg-bg-main/50 px-3 py-2.5 sm:gap-3 sm:px-3.5">
      <div className="min-w-0 flex-1">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-body/55 sm:text-xs">
          {label}
        </p>
        <p className="mt-0.5 break-all font-mono text-sm text-title sm:text-[0.9375rem]">
          {value}
        </p>
      </div>
      <CopyButton value={value} label={label} />
    </div>
  );
}

function DemoAccountCard({ account }: { account: DemoAccount }) {
  const loginLabel = account.loginLabel ?? "Email";

  return (
    <div className="relative overflow-hidden rounded-xl border border-line/70 bg-bg-main/35 p-4 sm:p-5">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
        aria-hidden="true"
      />

      <div className="flex items-center gap-2">
        <span className="inline-flex rounded-md border border-primary/35 bg-primary/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          {account.role}
        </span>
      </div>

      {account.note ? (
        <p className="mt-3 text-sm leading-relaxed text-body/85 sm:text-[0.9375rem]">
          {account.note}
        </p>
      ) : (
        <div className="mt-3 space-y-2">
          {account.login && (
            <CredentialRow label={loginLabel} value={account.login} />
          )}
          {account.password && (
            <CredentialRow label="Password" value={account.password} />
          )}
        </div>
      )}
    </div>
  );
}

export function ProjectDemoAccounts({ accounts }: ProjectDemoAccountsProps) {
  if (accounts.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary/8 via-bg-main/40 to-bg-main/20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />

      <div className="border-b border-line/50 px-4 py-3.5 sm:px-5 sm:py-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-body/70">
          Akun Demo
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-body/75 sm:text-sm">
          Gunakan akun berikut untuk login dan melihat fitur lengkap proyek ini.
        </p>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-5">
        {accounts.map((account) => (
          <DemoAccountCard key={account.role} account={account} />
        ))}
      </div>
    </div>
  );
}
