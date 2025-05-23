<?php
// filepath: c:\xampp\htdocs\agriculturaVertical\index.php
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;">
    <title>Agricultura Vertical - Tecnologia que Cultiva o Futuro Urbano</title>
    <link href="/agriculturaVertical/agriculturaVertical/assets/css/tailwind.css" rel="stylesheet">
</head>
<body class="bg-white text-gray-800">
    <?php include 'components/header.php'; ?>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-tech to-blue-digital text-white py-16">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Tecnologia que Cultiva o Futuro Urbano</h1>
                    <p class="text-xl mb-8">Soluções inteligentes para agricultura vertical em ambientes urbanos.</p>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="pages/about.php" class="btn-primary bg-white text-green-tech hover:bg-gray-100">Saiba mais</a>
                        <a href="pages/contact.php" class="border-2 border-white text-white font-semibold py-2 px-4 rounded-md hover:bg-white hover:text-green-tech transition duration-300">Contato</a>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <div class="relative">
                        <!-- Placeholder para imagem hero -->
                        <div class="bg-blue-light bg-opacity-20 rounded-lg h-80 flex items-center justify-center">
                            <span class="text-2xl font-montserrat">Imagem ilustrativa de agricultura vertical</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-green-tech">Nossas Soluções</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="card">
                    <div class="text-green-tech mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Sensores IoT</h3>
                    <p class="text-gray-modern">Monitoramento em tempo real de todos os parâmetros essenciais para o crescimento saudável das plantas.</p>
                </div>
                
                <div class="card">
                    <div class="text-blue-digital mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Dashboard Inteligente</h3>
                    <p class="text-gray-modern">Interface amigável para controle e visualização de dados sobre suas culturas em qualquer dispositivo.</p>
                </div>
                
                <div class="card">
                    <div class="text-green-tech mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Automação Completa</h3>
                    <p class="text-gray-modern">Sistemas que ajustam automaticamente iluminação, irrigação e nutrição com base em dados coletados.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                    <h2 class="text-3xl font-bold mb-4 text-green-tech">Sobre o Projeto</h2>
                    <p class="mb-4 text-gray-modern">A Agricultura Vertical combina o melhor da tecnologia IoT com práticas agrícolas sustentáveis para criar soluções inovadoras de cultivo em ambientes urbanos.</p>
                    <p class="mb-6 text-gray-modern">Nosso sistema permite o cultivo eficiente de alimentos em espaços reduzidos, com economia de água e energia, monitoramento em tempo real e automação inteligente.</p>
                    <a href="pages/about.php" class="btn-primary">Conheça nossa história</a>
                </div>
                <div class="md:w-1/2">
                    <!-- Placeholder para imagem about -->
                    <div class="bg-blue-light bg-opacity-20 rounded-lg h-80 flex items-center justify-center">
                        <span class="text-2xl font-montserrat">Imagem sobre o projeto</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-blue-digital to-green-tech text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-4">Pronto para revolucionar seu cultivo?</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">Junte-se a nós na jornada para transformar a produção de alimentos em ambientes urbanos de forma sustentável e tecnológica.</p>
            <a href="pages/contact.php" class="btn-primary bg-white text-green-tech hover:bg-gray-100 inline-block">Entre em contato</a>
        </div>
    </section>

    <?php include 'components/footer.php'; ?>
    <script src="assets/js/app.js"></script>
</body>
</html>