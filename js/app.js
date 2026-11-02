const ICON = {
 ali:'<svg viewBox="0 0 24 24"><path d="M12 6c-3-3-8-1-8 4 0 5 4 10 8 10s8-5 8-10c0-5-5-7-8-4z"/><path d="M12 6c0-2 1-3 3-4"/></svg>',
 act:'<svg viewBox="0 0 24 24"><circle cx="14" cy="4.5" r="2"/><path d="M8 21l3-6 3 2v4M11 15l-1-5 4-1 3 4M6 10l4-1"/></svg>',
 des:'<svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
 bien:'<svg viewBox="0 0 24 24"><path d="M12 21C5 16 3 12 3 8.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 9 1.5C21 12 19 16 12 21z"/></svg>'
};
const CAT = {
 ali:{n:'Alimentación',c:'#F59E0B',d:'Ideas para comer rico y equilibrado'},
 act:{n:'Actividad física',c:'#16A34A',d:'Muévete a tu ritmo'},
 des:{n:'Descanso',c:'#6366F1',d:'Duerme y recupérate mejor'},
 bien:{n:'Bienestar',c:'#EC4899',d:'Mente tranquila, cuerpo contento'}
};
const RECS = [
 {id:1,cat:'ali',t:'Desayuno con avena y fruta',min:10,niv:'Fácil',pop:95,d:'Un desayuno rápido que da energía para la mañana y mantiene la saciedad.',pasos:['Cocina 1/2 taza de avena en leche o agua.','Agrega una fruta picada (banano, fresas o manzana).','Suma un puñado de nueces o semillas.'],tips:['Evita agregar mucha azúcar.','Puedes dejarla lista la noche anterior.']},
 {id:2,cat:'ali',t:'Hidratación: 8 vasos al día',min:5,niv:'Fácil',pop:90,d:'Tomar agua con regularidad ayuda a la concentración y al rendimiento físico.',pasos:['Toma un vaso al despertar.','Deja una botella visible en tu escritorio.','Pon alarmas cada 2 horas.'],tips:['Si te aburre el agua, agrégale limón o menta.']},
 {id:3,cat:'ali',t:'Plato balanceado en el almuerzo',min:30,niv:'Medio',pop:70,d:'Aprende a armar un plato con proporción adecuada de verduras, proteína y carbohidratos.',pasos:['Llena la mitad del plato con verduras.','Un cuarto con proteína (pollo, pescado, huevo o legumbres).','Un cuarto con carbohidrato (arroz, papa o yuca).'],tips:['Come despacio, mastica bien.']},
 {id:4,cat:'ali',t:'Meriendas saludables',min:5,niv:'Fácil',pop:65,d:'Opciones fáciles para no caer en los paquetes entre comidas.',pasos:['Prepara porciones de frutas secas sin azúcar.','Ten a la mano fruta fresca.','Alterna con yogur natural o queso fresco.'],tips:['Planifica la semana el domingo.']},
 {id:5,cat:'act',t:'Caminata de 30 minutos',min:30,niv:'Fácil',pop:92,d:'Caminar a paso ligero mejora el corazón, el ánimo y la condición física.',pasos:['Usa calzado cómodo.','Calienta 5 minutos con paso suave.','Camina a paso ligero 20 minutos y enfría 5 más.'],tips:['Hazlo con un amigo para mantener la constancia.']},
 {id:6,cat:'act',t:'Estiramientos de escritorio',min:10,niv:'Fácil',pop:80,d:'Rutina corta para aliviar cuello, espalda y muñecas si pasas horas sentado.',pasos:['Gira el cuello suavemente a ambos lados.','Estira brazos por encima de la cabeza 20 s.','Levántate y camina 2 minutos cada hora.'],tips:['No rebotes, mantén cada posición sin dolor.']},
 {id:7,cat:'act',t:'Rutina de fuerza en casa',min:30,niv:'Medio',pop:75,d:'Ejercicios con tu propio peso para ganar fuerza sin ir al gimnasio.',pasos:['10 sentadillas.','10 flexiones (puedes apoyar rodillas).','30 s de plancha.','Repite 3 rondas con descanso de 1 min.'],tips:['Prioriza la técnica sobre la velocidad.']},
 {id:8,cat:'act',t:'Trote suave para principiantes',min:30,niv:'Avanzado',pop:55,d:'Plan de intervalos para empezar a trotar sin lesionarte.',pasos:['Alterna 1 min trotando y 2 min caminando.','Repite 8 veces.','Aumenta el tiempo de trote cada semana.'],tips:['Consulta a un médico si tienes problemas cardíacos.']},
 {id:9,cat:'des',t:'Rutina para dormir mejor',min:30,niv:'Fácil',pop:88,d:'Hábitos nocturnos que ayudan a conciliar el sueño más rápido.',pasos:['Acuéstate y levántate a la misma hora.','Deja el celular 30 minutos antes de dormir.','Mantén el cuarto oscuro y fresco.'],tips:['Evita cafeína después de las 4 p. m.']},
 {id:10,cat:'des',t:'Siesta de 20 minutos',min:20,niv:'Fácil',pop:60,d:'Una siesta corta recarga energía sin dejarte aturdido.',pasos:['Busca un lugar tranquilo.','Pon una alarma de 20 minutos.','Levántate y toma agua.'],tips:['No tomes siestas largas después de las 3 p. m.']},
 {id:11,cat:'bien',t:'Respiración 4-7-8 para calmar el estrés',min:5,niv:'Fácil',pop:85,d:'Técnica de respiración sencilla para bajar la ansiedad en pocos minutos.',pasos:['Inhala por la nariz contando 4.','Sostén el aire contando 7.','Exhala por la boca contando 8. Repite 4 veces.'],tips:['Hazla sentado con la espalda recta.']},
 {id:12,cat:'bien',t:'Pausas activas de 5 minutos',min:5,niv:'Fácil',pop:78,d:'Pequeños descansos durante el estudio o trabajo para renovar la mente.',pasos:['Cada hora, levántate del puesto.','Mira por la ventana a un punto lejano 20 s.','Respira profundo y estira hombros.'],tips:['Programa una alarma para recordarlo.']}
];

let st = {fav:[], user:null, prof:{}, habits:[
  {n:'Tomar 8 vasos de agua',d:[1,1,0,1,0,0,0]},
  {n:'Caminar 30 minutos',d:[1,0,1,0,0,0,0]},
  {n:'Dormir 7 horas',d:[0,1,1,0,0,0,0]}
]};
try{const s=localStorage.getItem('vs');if(s)st=Object.assign(st,JSON.parse(s))}catch(e){}
function save(){try{localStorage.setItem('vs',JSON.stringify(st))}catch(e){}}
let prev='home', cur='home', catSel='';

function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1800)}
function go(s,arg){
  if(s==='detail'){prev=cur==='detail'?prev:cur;showDetail(arg)}
  if((s==='favs'||s==='profile'||s==='habits')&&!st.user){toast('Inicia sesión para usar esta sección');s='auth'}
  document.querySelectorAll('.screen').forEach(e=>e.classList.remove('on'));
  document.getElementById('s-'+s).classList.add('on');
  document.querySelectorAll('.menu a').forEach(a=>a.classList.toggle('on',a.dataset.s===s));
  document.getElementById('menu').classList.remove('open');
  cur=s; window.scrollTo(0,0);
  if(s==='home')renderHome(); if(s==='search')renderSearch(); if(s==='favs')renderFavs();
  if(s==='habits')renderHabits(); if(s==='profile')renderProfile();
  const b=document.getElementById('btnAuth'); b.textContent=st.user?'Salir':'Ingresar';
  b.onclick=st.user?logout:()=>go('auth');
}
function card(r){
  const c=CAT[r.cat], on=st.fav.includes(r.id)?'on':'';
  return `<div class="card" onclick="go('detail',${r.id})">
    <div class="thumb" style="background:linear-gradient(135deg,${c.c},${c.c}aa)">${ICON[r.cat]}
      <button class="fav ${on}" onclick="event.stopPropagation();toggleFav(${r.id})" aria-label="Favorito"><svg viewBox="0 0 24 24"><path d="M12 21C5 16 3 12 3 8.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 9 1.5C21 12 19 16 12 21z"/></svg></button>
    </div>
    <div class="body"><span class="tag" style="background:${c.c}">${c.n}</span><h3>${r.t}</h3><div class="meta">${r.min} min &middot; ${r.niv}</div></div></div>`;
}
function renderHome(){
  document.getElementById('catsHome').innerHTML=Object.keys(CAT).map(k=>`<div class="cat" onclick="catSel='${k}';go('search')"><div class="ic" style="background:${CAT[k].c}">${ICON[k]}</div><b>${CAT[k].n}</b><small>${CAT[k].d}</small></div>`).join('');
  let list, obj=st.prof&&st.prof.obj;
  if(obj){list=RECS.filter(r=>r.cat===obj).slice(0,3);document.getElementById('paraTitulo').textContent='Recomendado para ti';document.getElementById('paraNota').textContent='Según tu objetivo: '+CAT[obj].n+'.'}
  else{list=RECS.slice().sort((a,b)=>b.pop-a.pop).slice(0,3);document.getElementById('paraNota').textContent=st.user?'Completa tu perfil de salud para recibir recomendaciones personalizadas.':'Inicia sesión y completa tu perfil para ver recomendaciones personalizadas.'}
  document.getElementById('paraTi').innerHTML=list.map(card).join('');
  document.getElementById('popular').innerHTML=RECS.slice().sort((a,b)=>b.pop-a.pop).slice(3,6).map(card).join('');
}
function heroSearch(){document.getElementById('q').value=document.getElementById('heroQ').value;catSel='';go('search')}
function renderSearch(){
  document.getElementById('chips').innerHTML=['',...Object.keys(CAT)].map(k=>`<button class="chip ${catSel===k?'on':''}" onclick="catSel='${k}';renderSearch()">${k?CAT[k].n:'Todas'}</button>`).join('');
  const q=document.getElementById('q').value.toLowerCase().trim(), n=document.getElementById('fNivel').value, t=document.getElementById('fTiempo').value, o=document.getElementById('fOrden').value;
  let l=RECS.filter(r=>(!catSel||r.cat===catSel)&&(!n||r.niv===n)&&(!t||r.min<=+t)&&(!q||(r.t+' '+r.d+' '+CAT[r.cat].n).toLowerCase().includes(q)));
  l.sort(o==='az'?(a,b)=>a.t.localeCompare(b.t):(a,b)=>b.pop-a.pop);
  document.getElementById('cuenta').textContent=l.length+' resultado(s)';
  document.getElementById('resultados').innerHTML=l.length?l.map(card).join(''):'';
  if(!l.length)document.getElementById('resultados').innerHTML='<div class="empty" style="grid-column:1/-1">No encontramos recomendaciones con esos filtros. Prueba con otra palabra.</div>';
}
function showDetail(id){
  const r=RECS.find(x=>x.id===id), c=CAT[r.cat], on=st.fav.includes(id);
  const rel=RECS.filter(x=>x.cat===r.cat&&x.id!==id).slice(0,2);
  document.getElementById('detalle').innerHTML=`<div class="detail"><div>
    <div class="big" style="background:linear-gradient(135deg,${c.c},${c.c}aa)">${ICON[r.cat]}</div>
    <span class="tag" style="background:${c.c}">${c.n}</span><h1>${r.t}</h1>
    <p class="meta">${r.min} min &middot; Nivel ${r.niv}</p><p style="margin-top:10px">${r.d}</p>
    <h2>Paso a paso</h2><ol>${r.pasos.map(p=>'<li>'+p+'</li>').join('')}</ol>
    <h2>Consejos</h2><ul>${r.tips.map(p=>'<li>'+p+'</li>').join('')}</ul>
    <div class="aviso">Información general, no sustituye la opinión de un profesional de la salud.</div></div>
    <div><div class="panel"><button class="btn ${on?'sec':''}" style="width:100%;margin-bottom:10px" onclick="toggleFav(${id},true)">${on?'Quitar de favoritos':'Guardar en favoritos'}</button>
    <button class="btn nar" style="width:100%" onclick="addAsHabit(${id})">Agregar como hábito</button></div>
    <h2 style="font-size:18px">Relacionadas</h2>${rel.map(x=>`<div class="hab" style="cursor:pointer" onclick="go('detail',${x.id})"><div class="nm">${x.t}<div class="meta">${x.min} min</div></div></div>`).join('')}</div></div>`;
}
function toggleFav(id,redo){
  if(!st.user){toast('Inicia sesión para guardar favoritos');go('auth');return}
  const i=st.fav.indexOf(id); if(i>-1){st.fav.splice(i,1);toast('Quitado de favoritos')}else{st.fav.push(id);toast('Guardado en favoritos')}
  save(); if(redo)showDetail(id);
  if(cur==='home')renderHome(); if(cur==='search')renderSearch(); if(cur==='favs')renderFavs();
}
function renderFavs(){
  const l=RECS.filter(r=>st.fav.includes(r.id));
  document.getElementById('favGrid').innerHTML=l.length?l.map(card).join(''):'<div class="empty" style="grid-column:1/-1">Aún no tienes favoritos. Toca el corazón en cualquier recomendación para guardarla.<br><br><button class="btn" onclick="go(\'search\')">Explorar</button></div>';
}
const DIAS=['L','M','X','J','V','S','D'];
function renderHabits(){
  document.getElementById('habList').innerHTML=st.habits.map((h,i)=>`<div class="hab"><div class="nm">${h.n}</div><div class="dots">${h.d.map((v,j)=>`<div class="dot ${v?'on':''}" onclick="tickHabit(${i},${j})">${DIAS[j]}</div>`).join('')}</div></div>`).join('');
  const tot=st.habits.length*7, ok=st.habits.reduce((a,h)=>a+h.d.reduce((x,y)=>x+y,0),0), p=tot?Math.round(ok/tot*100):0;
  document.getElementById('barra').style.width=p+'%'; document.getElementById('progTxt').textContent=p+'% completado ('+ok+' de '+tot+')';
}
function tickHabit(i,j){st.habits[i].d[j]=st.habits[i].d[j]?0:1;save();renderHabits()}
function addHabit(){const n=prompt('Nombre del nuevo hábito:');if(n&&n.trim()){st.habits.push({n:n.trim(),d:[0,0,0,0,0,0,0]});save();renderHabits()}}
function addAsHabit(id){
  if(!st.user){toast('Inicia sesión primero');go('auth');return}
  const r=RECS.find(x=>x.id===id); if(!st.habits.some(h=>h.n===r.t)){st.habits.push({n:r.t,d:[0,0,0,0,0,0,0]});save()} toast('Agregado a tus hábitos')
}
function renderProfile(){
  const p=st.prof||{}; ['Nombre','Edad','Peso','Altura','Dieta','Nivel'].forEach(k=>{const e=document.getElementById('p'+k);if(e&&p[k]!==undefined)e.value=p[k]});
  if(p.obj)document.getElementById('pObj').value=p.obj; calcImc();
}
function calcImc(){
  const p=+document.getElementById('pPeso').value,a=+document.getElementById('pAltura').value/100;
  if(p&&a){const v=p/(a*a);document.getElementById('imc').textContent=v.toFixed(1);document.getElementById('imcTxt').textContent=v<18.5?'Por debajo del rango habitual':v<25?'Dentro del rango habitual':v<30?'Por encima del rango habitual':'Rango elevado: consulta a un profesional'}
  else{document.getElementById('imc').textContent='--';document.getElementById('imcTxt').textContent='Ingresa peso y estatura para calcularlo.'}
}
function saveProfile(){
  st.prof={Nombre:pNombre.value,Edad:pEdad.value,Peso:pPeso.value,Altura:pAltura.value,Dieta:pDieta.value,Nivel:pNivel.value,obj:pObj.value};
  save(); calcImc(); toast('Perfil guardado. Ya personalizamos tus recomendaciones');
}
function clearProfile(){if(confirm('¿Borrar todos tus datos de salud?')){st.prof={};save();['pNombre','pEdad','pPeso','pAltura'].forEach(i=>document.getElementById(i).value='');pObj.value='';calcImc();toast('Datos borrados')}}
let mode='login';
function authTab(m){mode=m;tLogin.classList.toggle('on',m==='login');tReg.classList.toggle('on',m==='reg');regOnly.style.display=regCheck.style.display=m==='reg'?'block':'none';authBtn.textContent=m==='reg'?'Crear cuenta':'Entrar';authErr.textContent=''}
function doAuth(){
  const m=aMail.value.trim(), p=aPass.value;
  if(!/^\S+@\S+\.\S+$/.test(m)){authErr.textContent='Escribe un correo válido.';return}
  if(p.length<8){authErr.textContent='La contraseña debe tener mínimo 8 caracteres.';return}
  if(mode==='reg'&&!aTerm.checked){authErr.textContent='Debes aceptar la política de privacidad.';return}
  st.user={mail:m,nombre:aNombre.value||m.split('@')[0]}; if(!st.prof.Nombre)st.prof.Nombre=st.user.nombre; save();
  toast(mode==='reg'?'Cuenta creada. ¡Bienvenido!':'Sesión iniciada'); go(mode==='reg'?'profile':'home');
}
function logout(){st.user=null;save();toast('Sesión cerrada');go('home')}
document.getElementById('pPeso').addEventListener('input',calcImc);document.getElementById('pAltura').addEventListener('input',calcImc);

document.querySelectorAll('.hero .art i').forEach((e,k)=>e.innerHTML=ICON[['ali','act','des','bien'][k]]);
// parámetros para capturas: #pantalla  y  ?wire
(function(){
  const qs=new URLSearchParams(location.search);
  if(qs.has('wire'))document.body.classList.add('wire');
  if(qs.has('demo')){st.user={mail:'demo@correo.com',nombre:'Demo'};st.fav=[1,5,9];st.prof={Nombre:'Demo',Edad:'21',Peso:'68',Altura:'170',Dieta:'Sin restricciones',Nivel:'Medio',obj:'act'}}
  const h=location.hash.replace('#','').split('-'); go(h[0]||'home',h[1]?+h[1]:undefined);
  if(h[0]==='auth'&&h[1]==='reg')authTab('reg');
})();
