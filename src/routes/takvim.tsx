import { createFileRoute } from '@tanstack/react-router';
import { CalendarView } from '@/components/yuvaapp/calendar-view';
import { AppShell } from '@/components/yuvaapp/shell';
export const Route=createFileRoute('/takvim')({
head:()=>({meta:[{title:'Ortak takvim — OrtakYuva'},{name:'description',content:'Anne ve baba için ortak takvim, randevu onayları, tekrar eden etkinlikler ve değişiklik geçmişi.'},{property:'og:title',content:'Ortak takvim — OrtakYuva'},{property:'og:description',content:'Anne ve baba için ortak takvim, randevu onayları, tekrar eden etkinlikler ve değişiklik geçmişi.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
component:Page
});
function Page(){return <AppShell><CalendarView/></AppShell>;}
