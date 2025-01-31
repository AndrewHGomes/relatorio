<?php

$host = 'localhost';
$db = 'sicomercio';
$usuarioBanco = '';
$senhaBanco = '';

try {
  $pdo = new PDO("mysql:host=$host;dbname=$db", $usuarioBanco, $senhaBanco);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die("Erro na conexão: " . $e->getMessage());
}
