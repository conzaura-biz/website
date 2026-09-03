import { useState } from 'react';
import Icon from './Icon';
export default function FAQ({ items }) { const [active,setActive]=useState(0); return <div className="faq-list">{items.map((item,i)=>{const open=i===active;return <div className={`faq-item ${open?'active':''}`} key={item.question}><button onClick={()=>setActive(open?-1:i)} aria-expanded={open}><span>{item.question}</span><Icon name={open?'close':'plus'} size={15}/></button>{open&&<div className="faq-answer"><p>{item.answer}</p></div>}</div>})}</div>; }
