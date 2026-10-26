// Dados inteiramente fictícios. Valores em centavos evitam erros monetários.
export const products = [
  {id:1,name:'Luminária Aurora',category:'Casa',price:18990,color:'#e1b785',symbol:'◉',description:'Luz suave para um ambiente de leitura.'},
  {id:2,name:'Fone Horizonte',category:'Tecnologia',price:34990,color:'#97acd3',symbol:'◖◗',description:'Som e conforto para acompanhar suas ideias.'},
  {id:3,name:'Caderno Traço',category:'Escritório',price:4990,color:'#acd0bb',symbol:'▤',description:'Um espaço para planos, notas e novos começos.'},
  {id:4,name:'Relógio Órbita',category:'Casa',price:12990,color:'#cdacd2',symbol:'◷',description:'Design simples, presença marcante.'},
  {id:5,name:'Teclado Nuvem',category:'Tecnologia',price:27990,color:'#b9c9d8',symbol:'▦',description:'Mais leveza na sua mesa de trabalho.'},
  {id:6,name:'Organizador Linha',category:'Escritório',price:7990,color:'#d0bd9f',symbol:'▥',description:'Tudo em seu lugar, com personalidade.'}
];
export function selectProducts(items,{query='',category='Todas',sort='name'}={}) {
  const normalize=s=>s.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
  return items.filter(p=>(category==='Todas'||p.category===category)&&normalize(p.name+' '+p.description).includes(normalize(query)))
    .sort((a,b)=>sort==='price-asc'?a.price-b.price:sort==='price-desc'?b.price-a.price:a.name.localeCompare(b.name,'pt-BR'));
}
export function totalCart(cart) { return products.reduce((sum,p)=>sum+p.price*(cart[p.id]||0),0); }
