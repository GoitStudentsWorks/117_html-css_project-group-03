import{g as n,S as w,a as b,b as L,P as S,A as g,W as x,O,G as q}from"./assets/vendor-BPxxalTj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();n.registerPlugin(w,b),document.querySelectorAll("a[href]").forEach(e=>{e.onclick=r=>{let a=r.target.closest("a");a.getAttribute("href").includes("#")&&a.getAttribute("href")!="#"&&(r.preventDefault(),a.classList.contains("a-nav-burger")&&document.querySelector(".menu-overlay").classList.remove("is-open"),n.to(window,{duration:.2,ease:"power1.inOut",scrollTo:`${a.getAttribute("href")}`}))}});let f=n.timeline({ease:"power1.inOut"});f.from("header",{y:-40,opacity:.5}),f.from("header .header-logo",{y:-5,opacity:0,duration:.15});for(let e=1;e<4;e++)f.from(`header .nav-list .nav-item:nth-child(${e})`,{x:-5,y:-15,opacity:0,duration:.15});for(let e=1;e<4;e++)f.from(`header .header-soc-media-list .header-soc-media-item:nth-child(${e})`,{x:-25,opacity:0,duration:.1});let y=n.timeline({ease:"power1.inOut"});y.from(".hero h1",{y:-115,opacity:0,duration:.8}),y.from(".hero p",{x:-45,opacity:0,duration:.35}),y.from(".hero .btn",{x:-45,opacity:0,duration:.3});let m=n.timeline({scrollTrigger:".yachts",start:"top 80%",delay:.4,ease:"power1.inOut"});m.from(".yachts .yachts-title",{y:-65,opacity:0,duration:.3});for(let e=1;e<4;e++)m.from(`.yachts .yachts-list .yachts-item:nth-child(${e})`,{x:-25,opacity:0,duration:.2}),m.from(`.yachts .yachts-list .yachts-item:nth-child(${e}) li`,{x:-15,opacity:0,duration:.15});m.from(".yachts .btn",{y:-25,opacity:0,duration:.2});let h=n.timeline({scrollTrigger:".advantages",start:"top 80%",delay:.5,ease:"power1.inOut"});h.from(".advantages img",{x:25,opacity:0,duration:.3});for(let e=1;e<5;e++)h.from(`.advantages .advantages-list .advantages-item:nth-child(${e})`,{y:-25,opacity:0,duration:.15}),h.from(`.advantages .advantages-list .advantages-item:nth-child(${e}) p`,{x:-15,opacity:0,duration:.15});let p=n.timeline({scrollTrigger:".reviews",start:"top 80%",delay:.3,ease:"power1.inOut"});p.from(".reviews .rev-title",{y:-65,opacity:0,duration:.5}),p.from(".reviews .rev-text",{x:-65,opacity:0,duration:.3});for(let e=1;e<4;e++)p.from(`.reviews .rev-list .rev-item:nth-child(${e})`,{y:-25,opacity:0,duration:.3});let d=n.timeline({scrollTrigger:"footer",start:"top 60%",delay:.3,ease:"power1.inOut"});d.from("footer .logo-footer",{y:-5,opacity:0,duration:.15});for(let e=1;e<4;e++)d.from(`footer .footer-menu-item .footer-menu-link:nth-child(${e})`,{x:-5,y:-15,opacity:0,duration:.15});for(let e=1;e<4;e++)d.from(`footer .footer-social-icons .footer-social-item:nth-child(${e})`,{x:-25,opacity:0,duration:.1});d.from("footer .slogan",{y:-25,opacity:0,duration:.25});for(let e=1;e<3;e++)d.from(`footer .footer-company li:nth-child(${e})`,{y:-25,opacity:0,duration:.2});document.onreadystatechange=()=>{const e=new L,r=new S(75,window.innerWidth/window.innerHeight,.1,70);r.position.x=15,r.position.z=40;const a=new g("#fff",2),c=new g("#fff",2);c.position.y=-5,e.add(a,c);const t=new x({alpha:!0});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight);const o=new O(r,t.domElement);o.autoRotate=!0,o.autoRotateSpeed=4,o.enableDamping=!0,o.dampingFactor=.01,o.enableZoom=!1,o.enableRotate=!0,o.enablePan=!1;const s=new q;let u=null,l=null;n.timeline({scrollTrigger:{trigger:".yachts3d",start:"top 80%"}}).add(()=>{s.load("models/yacht-1/scene.gltf",function(i){u=i.scene,e.add(u)},void 0,function(i){document.querySelector(".yachts3d").remove(),console.error(i)}),s.load("models/yacht-2/scene.gltf",function(i){l=i.scene,l.visible=!1,e.add(l)},void 0,function(i){document.querySelector(".yachts3d").remove(),console.error(i)})}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}),document.querySelector(".yachts3d .container").insertBefore(t.domElement,document.querySelector(".yachts3d .yachts-choose")),document.querySelectorAll(".yachts3d .container .yachts-choose li").forEach(i=>{i.onclick=()=>{document.querySelectorAll(".yachts3d .container .yachts-choose li").forEach(v=>v.classList.remove("active")),i.classList.add("active"),i.classList.contains("second")?(u.visible=!1,r.position.set(0,1,1.5),l.visible=!0):i.classList.contains("first")&&(l.visible=!1,r.position.set(15,0,40),u.visible=!0)}}),function i(){o.update(),t.render(e,r),requestAnimationFrame(i)}()};document.querySelector(".burger-btn").onclick=e=>{e.preventDefault(),document.querySelector(".menu-overlay").classList.add("is-open")},document.querySelector(".button-svg-close").onclick=e=>{e.preventDefault(),document.querySelector(".menu-overlay").classList.remove("is-open")};
//# sourceMappingURL=index.js.map
