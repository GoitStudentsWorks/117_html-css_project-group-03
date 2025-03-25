import gsap from"gsap";import{ScrollTrigger}from"gsap/ScrollTrigger";import{ScrollToPlugin}from"gsap/ScrollToPlugin";import*as THREE from"three";import{OrbitControls}from"three/examples/jsm/Addons.js";import{GLTFLoader}from"three/examples/jsm/Addons.js";gsap.registerPlugin(ScrollTrigger,ScrollToPlugin),document.querySelectorAll("a[href]").forEach((c=>{c.onclick=e=>{let t=e.target.closest("a");t.getAttribute("href").includes("#")&&"#"!=t.getAttribute("href")&&(e.preventDefault(),t.classList.contains("a-nav-burger")&&document.querySelector(".menu-overlay").classList.remove("is-open"),gsap.to(window,{duration:.2,ease:"power1.inOut",scrollTo:`${t.getAttribute("href")}`}))}}));let tl=gsap.timeline({ease:"power1.inOut"});tl.from("header",{y:-40,opacity:.5}),tl.from("header .header-logo",{y:-5,opacity:0,duration:.15});for(let e=1;e<4;e++)tl.from(`header .nav-list .nav-item:nth-child(${e})`,{x:-5,y:-15,opacity:0,duration:.15});for(let e=1;e<4;e++)tl.from(`header .header-soc-media-list .header-soc-media-item:nth-child(${e})`,{x:-25,opacity:0,duration:.1});let tl2=gsap.timeline({ease:"power1.inOut"});tl2.from(".hero h1",{y:-115,opacity:0,duration:.8}),tl2.from(".hero p",{x:-45,opacity:0,duration:.35}),tl2.from(".hero .btn",{x:-45,opacity:0,duration:.3});let yachtsTL=gsap.timeline({scrollTrigger:".yachts",start:"top 80%",delay:.4,ease:"power1.inOut"});yachtsTL.from(".yachts .yachts-title",{y:-65,opacity:0,duration:.3});for(let e=1;e<4;e++)yachtsTL.from(`.yachts .yachts-list .yachts-item:nth-child(${e})`,{x:-25,opacity:0,duration:.2}),yachtsTL.from(`.yachts .yachts-list .yachts-item:nth-child(${e}) li`,{x:-15,opacity:0,duration:.15});yachtsTL.from(".yachts .btn",{y:-25,opacity:0,duration:.2});let advantagesTL=gsap.timeline({scrollTrigger:".advantages",start:"top 80%",delay:.5,ease:"power1.inOut"});advantagesTL.from(".advantages img",{x:25,opacity:0,duration:.3});for(let e=1;e<5;e++)advantagesTL.from(`.advantages .advantages-list .advantages-item:nth-child(${e})`,{y:-25,opacity:0,duration:.15}),advantagesTL.from(`.advantages .advantages-list .advantages-item:nth-child(${e}) p`,{x:-15,opacity:0,duration:.15});let reviewsTL=gsap.timeline({scrollTrigger:".reviews",start:"top 80%",delay:.3,ease:"power1.inOut"});reviewsTL.from(".reviews .rev-title",{y:-65,opacity:0,duration:.5}),reviewsTL.from(".reviews .rev-text",{x:-65,opacity:0,duration:.3});for(let e=1;e<4;e++)reviewsTL.from(`.reviews .rev-list .rev-item:nth-child(${e})`,{y:-25,opacity:0,duration:.3});let footerTL=gsap.timeline({scrollTrigger:"footer",start:"top 60%",delay:.3,ease:"power1.inOut"});footerTL.from("footer .logo-footer",{y:-5,opacity:0,duration:.15});for(let e=1;e<4;e++)footerTL.from(`footer .footer-menu-item .footer-menu-link:nth-child(${e})`,{x:-5,y:-15,opacity:0,duration:.15});for(let e=1;e<4;e++)footerTL.from(`footer .footer-social-icons .footer-social-item:nth-child(${e})`,{x:-25,opacity:0,duration:.1});footerTL.from("footer .slogan",{y:-25,opacity:0,duration:.25});for(let e=1;e<3;e++)footerTL.from(`footer .footer-company li:nth-child(${e})`,{y:-25,opacity:0,duration:.2});document.onreadystatechange=()=>{const e=new THREE.Scene,t=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,70);t.position.x=15,t.position.z=40;const o=new THREE.AmbientLight("#fff",2),i=new THREE.AmbientLight("#fff",2);i.position.y=-5,e.add(o,i);const r=new THREE.WebGLRenderer({alpha:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight);const a=new OrbitControls(t,r.domElement);a.autoRotate=!0,a.autoRotateSpeed=4,a.enableDamping=!0,a.dampingFactor=.01,a.enableZoom=!1,a.enableRotate=!0,a.enablePan=!1;const n=new GLTFLoader;let s=null,l=null;gsap.timeline({scrollTrigger:{trigger:".yachts3d",start:"top 80%"}}).add((()=>{n.load("models/yacht-1/scene.gltf",(function(t){s=t.scene,e.add(s)}),void 0,(function(e){document.querySelector(".yachts3d").remove(),console.error(e)})),n.load("models/yacht-2/scene.gltf",(function(t){l=t.scene,l.visible=!1,e.add(l)}),void 0,(function(e){document.querySelector(".yachts3d").remove(),console.error(e)}))})),window.addEventListener("resize",(()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})),document.querySelector(".yachts3d .container").insertBefore(r.domElement,document.querySelector(".yachts3d .yachts-choose")),document.querySelectorAll(".yachts3d .container .yachts-choose li").forEach((e=>{e.onclick=()=>{document.querySelectorAll(".yachts3d .container .yachts-choose li").forEach((e=>e.classList.remove("active"))),e.classList.add("active"),e.classList.contains("second")?(s.visible=!1,t.position.set(0,1,1.5),l.visible=!0):e.classList.contains("first")&&(l.visible=!1,t.position.set(15,0,40),s.visible=!0)}})),function o(){a.update(),r.render(e,t),requestAnimationFrame(o)}()};