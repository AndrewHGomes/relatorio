<?php

date_default_timezone_set("America/Fortaleza");

class Conexao
{
  public $pdo;

  public function __construct()
  {
    try {
      $this->pdo = new PDO("mysql:host=localhost;dbname=delivery_gauchinho", "root", "");
      $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
      die("Erro na conexão: " . $e->getMessage());
    }
  }

  public function getPdo()
  {
    return $this->pdo;
  }

  public function executarConsulta($sql)
  {
    return $this->pdo->query($sql);
  }
}

$conexao = new Conexao;
