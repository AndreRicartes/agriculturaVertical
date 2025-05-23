<?php
// Funções auxiliares para o projeto Agricultura Vertical

/**
 * Função para formatar datas
 *
 * @param string $date Data a ser formatada
 * @param string $format Formato desejado
 * @return string Data formatada
 */
function formatDate($date, $format = 'd/m/Y') {
    $timestamp = strtotime($date);
    return date($format, $timestamp);
}

/**
 * Função para sanitizar entradas de usuário
 *
 * @param string $data Dados a serem sanitizados
 * @return string Dados sanitizados
 */
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

/**
 * Função para redirecionar para uma URL
 *
 * @param string $url URL para redirecionar
 */
function redirectTo($url) {
    header("Location: $url");
    exit();
}

/**
 * Função para verificar se um usuário está autenticado
 *
 * @return bool Verdadeiro se autenticado, falso caso contrário
 */
function isAuthenticated() {
    return isset($_SESSION['user_id']);
}
?>