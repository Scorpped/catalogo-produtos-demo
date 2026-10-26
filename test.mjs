import test from 'node:test';
import assert from 'node:assert/strict';
import {products,selectProducts,totalCart} from './catalog.mjs';
test('busca ignora acentos',()=>assert.equal(selectProducts(products,{query:'luminaria'})[0].id,1));
test('categoria e busca são combinadas',()=>assert.equal(selectProducts(products,{query:'fone',category:'Casa'}).length,0));
test('ordenação não altera os dados originais',()=>{const before=products.map(p=>p.id);const result=selectProducts(products,{sort:'price-asc'});assert.equal(result[0].price,4990);assert.deepEqual(products.map(p=>p.id),before);});
test('total usa centavos e quantidades',()=>assert.equal(totalCart({1:2,3:1}),42970));
