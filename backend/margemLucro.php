<?php

include './config.php';

// $usuario = $_POST['usuario'];
$dataInicial = date("2023-12-06");
$dataFinal = date("2025-02-03");

$sql = "SELECT Vendas.Data, Marcas.idMarca, Marcas.Descricao AS marca, SUM(VlrItem+COALESCE((SELECT SUM((Round(qtd,2) * Round(valor,2)) - Round(desconto)) FROM vendasdetcomp WHERE idvendasdet = vendasdet.codigo),0)) AS SUMValor, mercadorias.descricao, SUM(qtd * multiplo) AS Qtd, SUM(VendasDet.VlrCusto * (Qtd * Multiplo)) AS SUMVlrCusto, CAST(Count(Distinct(Vendas.Codigo)) AS UNSIGNED) AS NVendas FROM Marcas RIGHT JOIN Mercadorias ON (marcas.idMarca = Mercadorias.idMarca) INNER JOIN VendasDet ON (Mercadorias.codigo = VendasDet.CodMerc) INNER JOIN Vendas ON (VendasDet.CodVenda = Vendas.Codigo) WHERE Vendas.Data BETWEEN $dataInicial AND $dataFinal AND Tipo IN ('VE', 'NF', 'CFe', 'NFC') AND Situacao = 'A' GROUP BY Marcas.idMarca ORDER BY Marcas.Descricao";

$result = $conexao->executarConsulta($sql);

if ($result->rowCount() > 0) {
  while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    // Cálculo da margem de lucro
    $margemLucro = (($row['SUMValor'] - $row['SUMVlrCusto']) / $row['SUMValor']) * 100;
    echo "Data: " . $row['Data'] . " - Marca: " . $row['marca'] . " - Margem de Lucro: " . round($margemLucro, 2) . "% ";
  }
} else {
  echo "Nenhum resultado encontrado.";
  echo "<br/>";
  var_dump($result);
}
