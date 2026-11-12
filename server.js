import express from "express";

const app = express();
const PORT = 3000;

// Middleware para permitir leitura de JSON no corpo das requisições (caso precise)
app.use(express.json());

// ==========================================
// EXEMPLO DO PROFESSOR (Base para a aula)
// ==========================================
function buscarPerfilSimulado(usuario, simularFalha = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simularFalha) {
        reject(new Error("Banco de dados indisponível no momento."));
      } else {
        resolve({
          usuario: usuario,
          status: "Ativo",
          laboratorio: "Lab 04",
        });
      }
    }, 1000);
  });
}

// Rota inicial para testar se o servidor está de pé
app.get("/", (req, res) => {
  res.send("Servidor Express online e pronto para os exercícios!");
});

// ==========================================
// ESPAÇO PARA OS EXERCÍCIOS DOS ALUNOS
// ==========================================




// ==========================================
// INICIALIZAÇÃO DO SERVIDOR
// ==========================================
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});