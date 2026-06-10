//C:\Users\u s u á r i o\Documents\Portfólio\src\core\types\index.ts
// O que é: Definição rigorosa das entidades do seu portfólio.
// Por que escolhi assim: Tipagem forte garante previsibilidade e previne erros na UI.
export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  featured: boolean;
}