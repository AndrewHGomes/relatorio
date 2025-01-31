<?php


// Conexão com o banco de dados
include './config.php';


// Função para validar usuário e senha
function validarUsuario($usuario, $senha)
{
  global $pdo;

  // Consulta ao banco de dados
  $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE usuario = :usuario");
  $stmt->bindParam(':usuario', $usuario);
  $stmt->execute();

  $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

  // Verifica se o usuário existe e se a senha está correta
  if ($usuario && password_verify($senha, $usuario['senha'])) {
    return true; // Validação bem-sucedida
  } else {
    return false; // Falha na validação
  }
}

// Exemplo de uso
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $usuario = $_POST['usuario'];
  $senha = $_POST['senha'];

  if (validarUsuario($username, $senha)) {
    echo "Usuário validado com sucesso!";
  } else {
    echo "Algo deu errado! Verifique Nome de usuário e Senha.";
  }
}
