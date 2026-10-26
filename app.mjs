import React,{useState} from 'https://esm.sh/react@18.3.1';
import {createRoot} from 'https://esm.sh/react-dom@18.3.1/client';
import {products,selectProducts,totalCart} from './catalog.mjs';
const h=React.createElement, money=v=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v/100);
function App(){
  const [query,setQuery]=useState(''),[category,setCategory]=useState('Todas'),[sort,setSort]=useState('name'),[cart,setCart]=useState({}),[open,setOpen]=useState(false);
  const visible=selectProducts(products,{query,category,sort}),count=Object.values(cart).reduce((a,b)=>a+b,0);
  const change=(id,delta)=>setCart(old=>({...old,[id]:Math.max(0,(old[id]||0)+delta)}));
  return h('div',null,
    h('div',{className:'notice'},'PROJETO DE DEMONSTRAÇÃO · Produtos e marca fictícios · Sem compras reais'),
    h('header',null,h('a',{href:'/',className:'brand'},'forma',h('span',null,'®')),h('span',{className:'navnote'},'Objetos para o seu cotidiano'),h('button',{className:'bag',onClick:()=>setOpen(!open),'aria-expanded':open},'Sacola demo ('+count+')')),
    h('main',null,h('section',{className:'hero'},h('div',null,h('p',{className:'eyebrow'},'COLEÇÃO / 01'),h('h1',null,'Menos excesso.',h('br'),'Mais intenção.'),h('p',{className:'intro'},'Uma seleção fictícia de objetos para trabalhar, criar e viver melhor.')),h('div',{className:'heroart','aria-hidden':true},h('div',{className:'orb'}),h('span',null,'Design que faz espaço.'))),
      h('section',{'aria-label':'Catálogo'},h('div',{className:'cataloghead'},h('h2',null,'Explore a coleção'),h('span',{'aria-live':'polite'},visible.length+' produtos')),
        h('div',{className:'filters'},h('label',null,'Buscar produto',h('input',{type:'search',placeholder:'Nome ou descrição',value:query,onChange:e=>setQuery(e.target.value)})),h('label',null,'Categoria',h('select',{value:category,onChange:e=>setCategory(e.target.value)},...['Todas','Casa','Tecnologia','Escritório'].map(c=>h('option',{key:c},c)))),h('label',null,'Ordenar',h('select',{value:sort,onChange:e=>setSort(e.target.value)},h('option',{value:'name'},'Nome'),h('option',{value:'price-asc'},'Menor preço'),h('option',{value:'price-desc'},'Maior preço')))),
        h('div',{className:'grid'},...visible.map(p=>h('article',{key:p.id},h('div',{className:'productart',style:{background:p.color}},h('span',{'aria-hidden':true},p.symbol),h('small',null,p.category)),h('div',{className:'productbody'},h('h3',null,p.name),h('p',null,p.description),h('div',{className:'price'},h('strong',null,money(p.price)),h('button',{onClick:()=>change(p.id,1),'aria-label':'Adicionar '+p.name},'+ Adicionar')))))),visible.length===0&&h('p',{className:'empty'},'Nenhum produto encontrado. Experimente outra busca.')),
      open&&h('section',{className:'cart','aria-label':'Sacola de demonstração'},h('h2',null,'Sua seleção'),count===0?h('p',null,'Sua sacola está vazia.'):h('ul',null,...products.filter(p=>cart[p.id]>0).map(p=>h('li',{key:p.id},h('span',null,p.name+' · '+money(p.price)),h('div',null,h('button',{onClick:()=>change(p.id,-1),'aria-label':'Remover uma unidade de '+p.name},'−'),h('span',null,' '+cart[p.id]+' '),h('button',{onClick:()=>change(p.id,1),'aria-label':'Adicionar uma unidade de '+p.name},'+'))))),h('strong',{'aria-live':'polite'},'Total demonstrativo: '+money(totalCart(cart))),h('p',null,'Nenhum pagamento ou pedido é realizado. A seleção existe apenas nesta sessão.'))),
    h('footer',null,'FORMA / Demonstração de interface em React · Nycolas França'));
}
createRoot(document.getElementById('root')).render(h(App));
