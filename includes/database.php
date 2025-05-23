<?php
$host = 'localhost'; // Endereço do servidor de banco de dados
$dbname = 'agricultura_vertical'; // Nome do banco de dados
$username = 'root'; // Nome de usuário do banco de dados
$password = ''; // Senha do banco de dados

try {
    // Cria uma nova conexão com o banco de dados
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Define o modo de erro do PDO para exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Captura e exibe erros de conexão
    echo "Erro de conexão: " . $e->getMessage();
}
?>