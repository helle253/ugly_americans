function o(){let e=document.getElementById("app");if(!e)return;let n=new Date;e.innerHTML=`
    <strong>js is alive.</strong>
    <div style="margin-top: .5rem; font-size: 0.9rem; color: #555;">
      time: ${n.toLocaleString()}<br/>
      mode: esm bundle via esbuild
    </div>
  `}o();
//# sourceMappingURL=main.js.map
