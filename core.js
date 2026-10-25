(function(root){
 const normalizeName=s=>typeof s==='string'?s.trim().replace(/\s+/g,' '):'';
 const validName=s=>{const n=normalizeName(s);return n.length>=2&&n.length<=60&&!/[<>\u0000-\u001f]/u.test(n);};
 const answered=(q,a)=>q.kind==='order'?Array.isArray(a)&&a.length===q.options.length&&new Set(a).size===a.length&&a.every(v=>Number.isInteger(v)&&v>=0&&v<q.options.length):Number.isInteger(a)&&a>=0&&a<q.options.length;
 const correct=(q,a)=>answered(q,a)&&(q.kind==='order'?a.every((v,i)=>v===q.answer[i]):a===q.answer);
 const summary=(qs,s)=>({total:qs.length,answered:qs.filter(q=>answered(q,s.answers[q.id])).length,listened:qs.filter(q=>s.listened[q.id]).length,correct:qs.filter(q=>correct(q,s.answers[q.id])).length});
 const fresh=version=>({version,index:0,answers:{},listened:{},plays:{},submitted:false,history:[]});
 function sanitize(raw,lesson){const s=fresh(lesson.version);if(!raw||raw.version!==lesson.version)return s;
  for(const q of lesson.questions){const a=raw.answers?.[q.id];if(q.kind==='order'){if(Array.isArray(a)&&new Set(a).size===a.length&&a.length<=q.options.length&&a.every(v=>Number.isInteger(v)&&v>=0&&v<q.options.length))s.answers[q.id]=a;}else if(answered(q,a))s.answers[q.id]=a;
   if(raw.listened?.[q.id]===true)s.listened[q.id]=true;
   if(Number.isInteger(raw.plays?.[q.id])&&raw.plays[q.id]>=0)s.plays[q.id]=raw.plays[q.id];}
  if(Number.isInteger(raw.index)&&raw.index>=0&&raw.index<lesson.questions.length)s.index=raw.index;
  s.submitted=raw.submitted===true&&lesson.questions.every(q=>answered(q,s.answers[q.id])&&s.listened[q.id]);
  if(Array.isArray(raw.history))s.history=raw.history.filter(x=>Number.isInteger(x.score)&&x.score>=0&&x.score<=lesson.questions.length&&typeof x.at==='string').slice(-20);
  return s;
 }
 const api={normalizeName,validName,answered,correct,summary,fresh,sanitize};root.ECO_CORE=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
