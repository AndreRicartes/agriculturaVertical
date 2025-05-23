<?php
// filepath: c:\xampp\htdocs\agriculturaVertical\pages\contact.php

include('../components/header.php');
?>

<div class="container mx-auto my-8">
    <h1 class="text-3xl font-bold text-center mb-4">Contato</h1>
    <p class="text-center mb-8">Entre em contato conosco preenchendo o formulário abaixo.</p>

    <form action="process_contact.php" method="POST" class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <input type="text" id="name" name="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea id="message" name="message" rows="4" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
        </div>
        <button type="submit" class="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600">Enviar</button>
    </form>
</div>

<?php
include('../components/footer.php');
?>