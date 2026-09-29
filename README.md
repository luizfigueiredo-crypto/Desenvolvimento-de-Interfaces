# Desenvolvimento-de-Interfaces
TRABALHO TELA GOV
1. Problema

Servidores e trabalhadores terceirizados, especialmente com menor familiaridade tecnológica, têm dificuldade e frustração ao assinar documentos no portal Gov.br pelo celular. Os obstáculos: interface pouco intuitiva para upload, fluxo confuso de validação por código (OTP) e falta de feedback claro de que a assinatura foi concluída — gerando insegurança e abandono.

Evidências:

Dificuldade em localizar o botão de upload na versão mobile.
Confusão sobre onde posicionar a assinatura visual na folha pela tela de toque.
Incerteza se o código recebido por SMS/app é do login ou da assinatura.
Usuários não sabem onde o documento baixado foi salvo para enviá-lo ao RH.
2. Persona — Márcio Silveira
	
Idade	57 anos
Ocupação	Motorista terceirizado no IBGE
Local	Brasília - DF
Uso do celular	Chamadas e WhatsApp

Trabalha na rua, sem computador. Todo mês precisa baixar o contracheque e a folha de ponto, assinar pelo Gov.br no celular e enviar ao RH.

Objetivos: assinar rápido e sozinho, nos intervalos das viagens; ter certeza de que o documento foi assinado e entregue. Frustrações: termos técnicos ("assinatura qualificada", "token", "OTP"); interface poluída no celular; o site reinicia ao trocar de tela para copiar o código; não sabe onde o arquivo foi salvo. Comportamento: quando trava, desiste e pede ajuda aos filhos à noite; sente-se constrangido.

3. Jornada do usuário (fluxo atual)
Etapa	Ação	Dor	Emoção
1. Acesso	Abre assinador.iti.br no celular	Tela não otimizada; dúvida sobre nível Prata/Ouro	😐 Confuso
2. Upload	Procura o PDF recebido no WhatsApp	Difícil navegar nos arquivos; sem opção de foto	😟 Frustrado
3. Posicionamento	Marca onde vai o carimbo	Tela pequena; dedo cobre o texto	😰 Ansioso
4. Código (OTP)	Aguarda o código	Troca de app faz o site reiniciar e perder dados	🔴 Estressado
5. Conclusão	Digita e confirma	Sem aviso de "Concluído"; arquivo some	❓ Inseguro
4. Ideação

Pergunta: Como poderíamos simplificar a assinatura no Gov.br pelo celular para que o Seu Márcio consiga assinar e mandar seu contracheque ao RH sem travar e sem perder o arquivo?

💡 Ideia 1 — Wizard Mobile em 3 Passos ✅ (escolhida)

Tela guiada (Enviar → Assinar → Concluir) feita para celular. Foto ou PDF + contato do RH; assinatura automática no rodapé; código lido na mesma tela; envio direto ao RH pelo WhatsApp. Limitações: precisa de sinal e permissão de câmera.

💡 Ideia 2 — Robô no WhatsApp (Gov.br Bot)

O usuário manda a foto no chat, confirma com um código e recebe o PDF assinado. Limitações: regras rígidas de segurança para trafegar documentos oficiais no WhatsApp.

💡 Ideia 3 — Assinatura em um clique por notificação (Push)

O RH envia o documento ao CPF; o usuário assina pela notificação com biometria. Limitações: integração complexa entre empresas terceirizadas e Gov.br.

Justificativa

A Ideia 1 é a mais fácil e rápida de ser adotada e atende diretamente o Seu Márcio: permite fotografar o papel, não trava ao ler o SMS e envia o documento direto ao WhatsApp do RH, sem procurar arquivos na memória do telefone.

5. Wireframe
Tela 1 – Carregamento e destino: barra de progresso; botão 📷 Tirar foto; botão 📁 Escolher PDF; pré-visualização; campo "WhatsApp ou e-mail do RH"; botão verde Avançar para assinar.
Tela 2 – Assinatura e OTP: assinatura automática no rodapé (sem arrastar); "Código enviado por SMS"; campo com autofill; botão Confirmar e assinar.
Tela 3 – Conclusão: check verde + "Documento assinado com sucesso!"; botão 💬 Enviar pelo WhatsApp do RH; botão 📄 Baixar cópia.
