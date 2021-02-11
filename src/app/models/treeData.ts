export interface InfoNode {
  name: string;
  link: string[];
  children?: InfoNode[];
}
export const TREE_ENFERMEDADES: InfoNode[] = [
  {name: 'Gaucher', link: ['gaucher']},
  {name: 'Pompe', link: ['pompe']},
  {name: 'Fabry', link: ['fabry']},
  {name: 'MPSI', link: ['mps1']}
  ];
export const TREE_DIAGNOSTIC: InfoNode[] = [
  {
    name: 'Tipos',
    link: [''],
    children: [
      {name: 'tipo1', link: ['']},
      {name: 'tipo2', link: ['']},
    ]
  }, {
    name: 'Procesos',
    link: [''],
    children: [
      {name: 'Proceso1', link: ['']},
      {name: 'proceso2', link: ['']},
    ]
  }
];
