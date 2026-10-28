import { createFileRoute } from '@tanstack/react-router';
import { HealthView } from '@/components/yuvaapp/views';
import { AppShell } from '@/components/yuvaapp/shell';
export const Route=createFileRoute('/saglik')({
head:()=>({meta:[{title:'Sağlık ve ihtiyaçlar — YUVAAPP'},{name:'description',content:'Çocuğunuzun sağlık, ilaç, alerji ve bakım bilgilerini birlikte takip edin.'},{property:'og:title',content:'Sağlık ve ihtiyaçlar — YUVAAPP'},{property:'og:description',content:'Çocuğunuzun sağlık, ilaç, alerji ve bakım bilgilerini birlikte takip edin.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
component:Page
});
function Page(){return <AppShell><HealthView/></AppShell>;}
