# Atualização de segurança e páginas legais

## Arquivos incluídos

- `src/components/ui/TurnstileWidget.tsx`
- `src/components/ui/Footer.tsx`
- `src/components/sections/Contact.tsx`
- `src/app/api/contact/route.ts`
- `src/app/privacidade/page.tsx`
- `src/app/termos/page.tsx`
- `src/app/layout.tsx`

## Como aplicar

1. Extraia o ZIP.
2. Copie a pasta `src` para a raiz do projeto correto:
   `C:\Users\u s u á r i o\Documents\Portf-lio`
3. Confirme a substituição dos arquivos existentes.
4. Não copie ou publique `.env.local`.

## Variáveis necessárias

No `.env.local` e na Vercel:

```env
RESEND_API_KEY=...
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
```

## Ajuste recomendado no Header

Para que o menu também funcione nas páginas `/privacidade` e `/termos`, altere em
`src/components/ui/Header.tsx`:

- `href: "#inicio"` para `href: "/#inicio"`
- `href: "#sobre"` para `href: "/#sobre"`
- `href: "#projetos"` para `href: "/#projetos"`
- `href: "#solucoes"` para `href: "/#solucoes"`
- `href: "#contato"` para `href: "/#contato"`
- o `href="#inicio"` do logo para `href="/#inicio"`
- todas as ocorrências de `link.href.replace("#", "")` para:
  `link.href.split("#")[1] ?? "inicio"`

## Teste

```powershell
cd "C:\Users\u s u á r i o\Documents\Portf-lio"
npm install
npm run build
npm run dev
```

Teste:

- envio normal;
- envio sem marcar a política;
- expiração do Turnstile;
- páginas `/privacidade` e `/termos`;
- links do rodapé.

## Commit

```powershell
git add .
git commit -m "feat: adiciona Turnstile, política de privacidade e termos"
git push origin main
```
