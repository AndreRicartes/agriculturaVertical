<?php
// Configurações do projeto Agricultura Vertical

// Definindo variáveis de ambiente
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'agricultura_vertical');

// Definindo constantes do projeto
define('BASE_URL', 'http://localhost/agriculturaVertical/');
define('ASSETS_URL', BASE_URL . 'assets/');

// Configurações de erro
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>