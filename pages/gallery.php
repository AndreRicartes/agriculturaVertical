<?php
// filepath: c:\xampp\htdocs\agriculturaVertical\pages\gallery.php

include '../components/header.php';
?>

<div class="container mx-auto my-8">
    <h1 class="text-3xl font-bold text-center mb-6">Galeria de Imagens</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="../assets/images/sample1.jpg" alt="Imagem 1" class="w-full h-48 object-cover">
        </div>
        <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="../assets/images/sample2.jpg" alt="Imagem 2" class="w-full h-48 object-cover">
        </div>
        <div class="overflow-hidden rounded-lg shadow-lg">
            <img src="../assets/images/sample3.jpg" alt="Imagem 3" class="w-full h-48 object-cover">
        </div>
        <!-- Adicione mais imagens conforme necessário -->
    </div>
</div>

<?php
include '../components/footer.php';
?>