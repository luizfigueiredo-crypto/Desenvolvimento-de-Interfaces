# Desenvolvimento-de-Interfaces
TRABALHO TELA GOV
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Assinatura Fácil Gov.br — Protótipo</title>
<style>
:root{--bg:#eef2f7;--card:#fff;--ink:#14213d;--muted:#5b6678;--blue:#1351b4;--green:#168821;--line:#d5dbe5}
@media(prefers-color-scheme:dark){:root{--bg:#0f1622;--card:#182233;--ink:#eef2f7;--muted:#a6b1c2;--blue:#6ea0ff;--green:#4ec25a;--line:#2b3a52}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:18px/1.5 system-ui,Arial,sans-serif;display:flex;justify-content:center;padding:12px}
main{width:100%;max-width:420px;background:var(--card);border-radius:20px;border:1px solid var(--line);padding:20px}
h1{font-size:22px;margin:0 0 4px}
.bar{display:flex;gap:6px;margin:12px 0 4px}
.bar i{flex:1;height:8px;border-radius:4px;background:var(--line)}
.bar i.on{background:var(--blue)}
.step{color:var(--muted);font-size:15px;margin:0 0 16px}
button,input{font:inherit;width:100%;border-radius:12px;padding:16px;margin:6px 0}
button{border:0;background:var(--blue);color:#fff;font-weight:700;cursor:pointer}
button.sec{background:transparent;color:var(--blue);border:2px solid var(--blue)}
button.ok{background:var(--green)}
button:focus-visible,input:focus-visible{outline:3px solid #f5a623;outline-offset:2px}
input{border:2px solid var(--line);background:var(--card);color:var(--ink)}
input[type=file]{display:none}
.doc{border:2px dashed var(--line);border-radius:12px;padding:18px;text-align:center;color:var(--muted);min-height:110px}
.paper{border:1px solid var(--line);border-radius:8px;padding:14px;position:relative;min-height:190px;font-size:14px;color:var(--muted)}
.stamp{position:absolute;left:12px;right:12px;bottom:10px;border:2px solid var(--blue);color:var(--blue);border-radius:6px;padding:6px;font-size:13px;text-align:center}
.check{width:84px;height:84px;border-radius:50%;background:var(--green);color:#fff;font-size:52px;display:grid;place-items:center;margin:8px auto}
.center{text-align:center}
[hidden]{display:none!important}
</style>
</head>
<body>
<main>
<h1>Assinar documento</h1>
<div class="bar" aria-hidden="true"><i class="on"></i><i id="b2"></i><i id="b3"></i></div>
<p class="step" id="label">Passo 1 de 3 — Enviar</p>

<section id="s1">
  <button onclick="f.click()">📷 Tirar foto do documento</button>
  <button class="sec" onclick="f.click()">📁 Escolher PDF do celular</button>
  <input type="file" id="f" accept="image/*,application/pdf" capture="environment" onchange="pick(this)">
  <div class="doc" id="prev">Nenhum documento escolhido</div>
  <label for="rh">WhatsApp do RH (com DDD)</label>
  <input id="rh" inputmode="tel" placeholder="(61) 99999-9999">
  <button class="ok" onclick="go(2)">Avançar para assinar</button>
</section>

<section id="s2" hidden>
  <div class="paper">Contracheque (prévia)<div class="stamp">✔ Assinado digitalmente — Gov.br</div></div>
  <p>A assinatura já foi colocada no rodapé. Você não precisa arrastar nada.</p>
  <p>Enviamos um código por SMS para o seu celular.</p>
  <input id="otp" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="Código de 6 números">
  <button class="sec" onclick="otp.value='482913'">Simular leitura automática do SMS</button>
  <button class="ok" onclick="sign()">Confirmar e assinar</button>
  <p id="err" style="color:#c0392b" hidden>Digite os 6 números do código.</p>
</section>

<section id="s3" hidden class="center">
  <div class="check">✓</div>
  <h1>Documento assinado com sucesso!</h1>
  <p>Agora é só enviar ao RH.</p>
  <button class="ok" onclick="wa()">💬 Enviar pelo WhatsApp do RH</button>
  <button class="sec" onclick="alert('Cópia baixada (simulação).')">📄 Baixar cópia</button>
  <button class="sec" onclick="go(1)">Assinar outro documento</button>
</section>
</main>
<script>
const $=id=>document.getElementById(id),f=$('f'),rh=$('rh'),otp=$('otp');
const labels=['','Passo 1 de 3 — Enviar','Passo 2 de 3 — Assinar','Passo 3 de 3 — Concluído'];
function go(n){[1,2,3].forEach(i=>$('s'+i).hidden=i!==n);
 $('b2').className=n>1?'on':'';$('b3').className=n>2?'on':'';
 $('label').textContent=labels[n];window.scrollTo(0,0)}
function pick(i){const x=i.files[0];$('prev').textContent=x?('✔ '+x.name):'Nenhum documento escolhido'}
function sign(){if(otp.value.replace(/\D/g,'').length<6){$('err').hidden=false;return}$('err').hidden=true;go(3)}
function wa(){const n=rh.value.replace(/\D/g,'');
 const t=encodeURIComponent('Olá! Segue meu contracheque assinado pelo Gov.br.');
 window.open('https://wa.me/'+(n?'55'+n:'')+'?text='+t,'_blank')}
</script>
</body>
</html>
