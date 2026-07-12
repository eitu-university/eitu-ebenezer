export const testimonials = [
  { id: '1', name: 'María González', rating: 5 },
  { id: '2', name: 'Carlos Rodríguez', rating: 5 },
  { id: '3', name: 'Ana Patricia Silva', rating: 5 },
  { id: '4', name: 'David Morales', rating: 5 },
] as const satisfies {
  id: keyof IntlMessages['Testimonials']['items'];
  name: string;
  rating: number;
}[];
