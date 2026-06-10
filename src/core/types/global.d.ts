// C:\Users\u s u á r i o\Documents\Portfólio\src\core\types\global.d.ts
// O que é: Declaração de módulos globais para o compilador do TypeScript.
// Por que escolhi assim: Garante que importações de arquivos não-TS (como CSS ou imagens) não gerem falsos positivos no VS Code, mantendo o ambiente limpo.

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}