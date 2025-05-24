/**
 * Agricultura Vertical - JavaScript Principal
 * Funcionalidades: Animações, interatividade e controles do site
 */

// Configurações globais
const CONFIG = {
    animationDuration: 600,
    mapLoadDelay: 2000,
    scrollOffset: 100
};

/**
 * Inicialização quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initAnimations();
    initProducersSection();
    initCounters();
});

/**
 * Smooth scrolling para links âncora
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Inicializar animações de entrada
 */
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos animados
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all ${CONFIG.animationDuration}ms ease`;
        observer.observe(el);
    });
}

/**
 * Animação de contadores na hero section
 */
function initCounters() {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateCounters, 1000);
                heroObserver.unobserve(entry.target);
            }
        });
    });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
}

/**
 * Animar números dos contadores
 */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    counters.forEach(counter => {
        const target = counter.textContent;
        if (target.includes('%')) {
            const num = parseInt(target);
            animateNumber(counter, 0, num, '%');
        }
    });
}

/**
 * Animação individual de números
 * @param {Element} element - Elemento do contador
 * @param {number} start - Valor inicial
 * @param {number} end - Valor final
 * @param {string} suffix - Sufixo (%, etc.)
 */
function animateNumber(element, start, end, suffix = '') {
    const duration = 2000;
    const increment = (end - start) / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

/**
 * Inicializar funcionalidades da seção de produtores
 */
function initProducersSection() {
    initFilters();
    initProducerCards();
}

/**
 * Interatividade dos filtros da seção produtores
 */
function initFilters() {
    const filtros = document.querySelectorAll('.filtros-airbnb select');
    const buscarBtn = document.querySelector('.filtros-airbnb .btn-primary');

    filtros.forEach(filtro => {
        filtro.addEventListener('change', function() {
            console.log('Filtro alterado:', this.name || this.id, '=', this.value);
            // Aqui você pode implementar a lógica de filtragem real
            applyFilters();
        });
    });

    if (buscarBtn) {
        buscarBtn.addEventListener('click', function() {
            console.log('Busca executada');
            applyFilters();
            showSearchFeedback();
        });
    }
}

/**
 * Aplicar filtros aos cards de produtores
 */
function applyFilters() {
    const cards = document.querySelectorAll('.produtor-card');
    const loadingOverlay = createLoadingOverlay();
    
    // Mostrar loading
    document.querySelector('.row.g-4.mb-5').appendChild(loadingOverlay);
    
    setTimeout(() => {
        // Simular filtragem - aqui você conectaria com sua API/banco de dados
        cards.forEach((card, index) => {
            card.style.transition = 'all 0.3s ease';
            if (Math.random() > 0.3) { // 70% de chance de mostrar
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0.5';
            }
        });
        
        // Remover loading
        loadingOverlay.remove();
    }, 800);
}

/**
 * Criar overlay de loading
 */
function createLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'col-12 text-center my-4';
    overlay.innerHTML = `
        <div class="d-flex align-items-center justify-content-center">
            <div class="spinner-border text-success me-3" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
            <span class="text-muted">Aplicando filtros...</span>
        </div>
    `;
    return overlay;
}

/**
 * Mostrar feedback da busca
 */
function showSearchFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'alert alert-success alert-dismissible fade show mt-3';
    feedback.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        Busca realizada! Encontrados 6 produtores na região.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const filtrosContainer = document.querySelector('.filtros-airbnb').parentElement;
    filtrosContainer.appendChild(feedback);
    
    // Auto remover após 3 segundos
    setTimeout(() => {
        if (feedback.parentElement) {
            feedback.remove();
        }
    }, 3000);
}

/**
 * Interatividade dos cards de produtores
 */
function initProducerCards() {
    const cards = document.querySelectorAll('.produtor-card');
    
    cards.forEach(card => {
        // Adicionar efeito de hover suave
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Botões de ação
        const btnTrocar = card.querySelector('.btn-primary');
        const btnComprar = card.querySelector('.btn-success');
        const btnReceber = card.querySelector('.btn-outline-danger');
        const btnPerfil = card.querySelector('.btn-outline-secondary');
        
        if (btnTrocar) {
            btnTrocar.addEventListener('click', () => handleTroca(card));
        }
        
        if (btnComprar) {
            btnComprar.addEventListener('click', () => handleCompra(card));
        }
        
        if (btnReceber) {
            btnReceber.addEventListener('click', () => handleDoacao(card));
        }
        
        if (btnPerfil) {
            btnPerfil.addEventListener('click', () => handlePerfil(card));
        }
    });
}

/**
 * Handlers para ações dos produtores
 */
function handleTroca(card) {
    const produtoNome = card.querySelector('.card-title').textContent;
    const produtorNome = card.querySelector('h6').textContent;
    
    showActionModal('Solicitar Troca', `
        <div class="text-center">
            <i class="fas fa-exchange-alt fa-3x text-warning mb-3"></i>
            <h5>Trocar com ${produtorNome}</h5>
            <p>Produto: <strong>${produtoNome}</strong></p>
            <p class="text-muted">Que produto você gostaria de oferecer em troca?</p>
            <input type="text" class="form-control mb-3" placeholder="Ex: Tomates cereja, Manjericão...">
            <textarea class="form-control mb-3" rows="3" placeholder="Mensagem para o produtor (opcional)"></textarea>
        </div>
    `, 'Enviar Proposta', 'warning');
}

function handleCompra(card) {
    const produtoNome = card.querySelector('.card-title').textContent;
    const preco = card.querySelector('.text-success').textContent;
    
    showActionModal('Comprar Produto', `
        <div class="text-center">
            <i class="fas fa-shopping-cart fa-3x text-success mb-3"></i>
            <h5>Comprar ${produtoNome}</h5>
            <p>Preço: <strong class="text-success">${preco}</strong></p>
            <p class="text-muted">Confirme sua compra para prosseguir com o contato.</p>
        </div>
    `, 'Confirmar Compra', 'success');
}

function handleDoacao(card) {
    const produtoNome = card.querySelector('.card-title').textContent;
    const produtorNome = card.querySelector('h6').textContent;
    
    showActionModal('Receber Doação', `
        <div class="text-center">
            <i class="fas fa-heart fa-3x text-danger mb-3"></i>
            <h5>Doação de ${produtorNome}</h5>
            <p>Produto: <strong>${produtoNome}</strong></p>
            <p class="text-muted">Confirme para receber as informações de contato.</p>
        </div>
    `, 'Confirmar Recebimento', 'danger');
}

function handlePerfil(card) {
    const produtorNome = card.querySelector('h6').textContent;
    
    showActionModal('Perfil do Produtor', `
        <div class="row">
            <div class="col-md-4 text-center">
                <img src="${card.querySelector('.rounded-circle').src}" 
                     class="rounded-circle mb-3" width="100" height="100">
                <h5>${produtorNome}</h5>
                <div class="mb-2">
                    <span class="text-warning">★★★★★</span>
                    <small class="text-muted d-block">15 trocas realizadas</small>
                </div>
            </div>
            <div class="col-md-8">
                <h6>Sobre o Produtor</h6>
                <p class="text-muted">Produtor urbano especializado em hidroponia vertical. Utiliza sensores IoT para monitoramento em tempo real.</p>
                
                <h6>Sistema de Cultivo</h6>
                <ul class="text-muted">
                    <li>Hidroponia NFT (Nutrient Film Technique)</li>
                    <li>Sensores ESP32 com LoRa</li>
                    <li>Monitoramento 24/7 de pH, TDS e temperatura</li>
                </ul>
                
                <h6>Produtos Disponíveis</h6>
                <div class="d-flex gap-2 flex-wrap">
                    <span class="badge bg-success">Alface</span>
                    <span class="badge bg-success">Rúcula</span>
                    <span class="badge bg-success">Manjericão</span>
                </div>
            </div>
        </div>
    `, 'Entrar em Contato', 'primary');
}

/**
 * Mostrar modal de ação
 */
function showActionModal(title, content, buttonText, buttonColor) {
    // Remover modal existente se houver
    const existingModal = document.getElementById('actionModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'actionModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-${buttonColor}" onclick="processAction('${buttonText}')">${buttonText}</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

/**
 * Processar ação do modal
 */
function processAction(action) {
    // Fechar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('actionModal'));
    modal.hide();
    
    // Mostrar sucesso
    setTimeout(() => {
        showSuccessToast(`${action} realizada com sucesso! Você receberá as informações de contato em breve.`);
    }, 500);
}

/**
 * Mostrar toast de sucesso
 */
function showSuccessToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-white bg-success border-0 position-fixed';
    toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999;';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fas fa-check-circle me-2"></i>${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();
    
    // Remover após esconder
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

/**
 * Variáveis globais do mapa
 */
let mapaLeaflet = null;
let marcadores = [];

/**
 * Dados dos produtores com coordenadas reais de São Paulo
 */
const produtoresData = [
    {
        id: 1,
        nome: "João Silva",
        produto: "Alface Crespa Orgânica",
        tipo: "disponivel",
        preco: null,
        lat: -23.548943,
        lng: -46.638558,
        bairro: "Pinheiros, SP",
        rating: 5,
        trocas: 15,
        descricao: "Cultivada em sistema hidropônico com sensores IoT. Pronta para colheita, sem agrotóxicos.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
        id: 2,
        nome: "Maria Santos",
        produto: "Manjericão Fresco",
        tipo: "venda",
        preco: "R$ 5,00",
        lat: -23.544794,
        lng: -46.644464,
        bairro: "Vila Madalena, SP",
        rating: 4,
        trocas: 8,
        descricao: "Aromático e saboroso, cultivado em horta vertical. Ideal para temperos e chás.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
        id: 3,
        nome: "Carlos Oliveira",
        produto: "Tomates Cereja",
        tipo: "disponivel",
        preco: null,
        lat: -23.533773,
        lng: -46.652593,
        bairro: "Perdizes, SP",
        rating: 5,
        trocas: 23,
        descricao: "Doces e suculentos, monitorados por ESP32. Perfeitos para saladas e pratos especiais.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
        id: 4,
        nome: "Ana Costa",
        produto: "Rúcula Orgânica",
        tipo: "disponivel",
        preco: null,
        lat: -23.545186,
        lng: -46.640339,
        bairro: "Consolação, SP",
        rating: 4,
        trocas: 12,
        descricao: "Folhas tenras e saborosas, cultivadas em ambiente controlado. Rica em nutrientes.",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face"
    },
    {
        id: 5,
        nome: "Pedro Lima",
        produto: "Espinafre Baby",
        tipo: "venda",
        preco: "R$ 4,50",
        lat: -23.546775,
        lng: -46.643574,
        bairro: "Bela Vista, SP",
        rating: 5,
        trocas: 18,
        descricao: "Folhas jovens e macias, perfeitas para saladas. Sistema monitorado 24/7.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
    {
        id: 6,
        nome: "Lúcia Ferreira",
        produto: "Cebolinha Verde",
        tipo: "doacao",
        preco: null,
        lat: -23.557849,
        lng: -46.632977,
        bairro: "Liberdade, SP",
        rating: 5,
        trocas: 5,
        descricao: "Tempero fresco e aromático. Excedente da horta escolar, disponível para doação.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b332d926?w=80&h=80&fit=crop&crop=face"
    }
];

/**
 * Carregar mapa Leaflet com produtores
 */
function carregarMapa() {
    const mapaDiv = document.getElementById('mapa-produtores');
    
    // Estado de loading
    mapaDiv.innerHTML = `
        <div class="mapa-loading w-100 h-100">
            <div class="text-center">
                <div class="spinner-border text-success mb-3" role="status">
                    <span class="visually-hidden">Carregando...</span>
                </div>
                <h6 class="text-success">Conectando Rede LoRa...</h6>
                <p class="text-muted small">Inicializando mapa interativo</p>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        // Limpar conteúdo e inicializar mapa
        mapaDiv.innerHTML = '';
        
        // Coordenadas centrais de São Paulo
        const centroSP = [-23.550520, -46.633309];
        
        // Inicializar mapa Leaflet
        mapaLeaflet = L.map('mapa-produtores').setView(centroSP, 13);
        
        // Adicionar tiles do OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(mapaLeaflet);
        
        // Adicionar marcadores dos produtores
        adicionarMarcadores();
        
        // Ajustar visualização para mostrar todos os marcadores
        ajustarVisualizacao();
        
        // Mostrar feedback de sucesso
        mostrarFeedbackMapa();
        
    }, 2000);
}

/**
 * Adicionar marcadores dos produtores ao mapa
 */
function adicionarMarcadores() {
    produtoresData.forEach(produtor => {
        // Criar ícone customizado baseado no tipo
        const iconClass = `custom-marker ${produtor.tipo}`;
        
        const customIcon = L.divIcon({
            className: iconClass,
            html: getMarkerIcon(produtor.tipo),
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });
        
        // Criar marcador
        const marker = L.marker([produtor.lat, produtor.lng], {
            icon: customIcon
        }).addTo(mapaLeaflet);
        
        // Criar popup customizado
        const popupContent = criarPopupContent(produtor);
        marker.bindPopup(popupContent);
        
        // Adicionar eventos
        marker.on('click', () => {
            // Animar marcador ao clicar
            marker.getElement().style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                if (marker.getElement()) {
                    marker.getElement().style.animation = '';
                }
            }, 600);
        });
        
        // Armazenar referência
        marcadores.push({
            marker: marker,
            data: produtor
        });
    });
}

/**
 * Obter ícone do marcador baseado no tipo
 */
function getMarkerIcon(tipo) {
    const icons = {
        'disponivel': '<i class="fas fa-leaf" style="color: white; font-size: 12px; margin-top: 6px;"></i>',
        'venda': '<i class="fas fa-dollar-sign" style="color: #333; font-size: 12px; margin-top: 6px;"></i>',
        'doacao': '<i class="fas fa-heart" style="color: white; font-size: 12px; margin-top: 6px;"></i>'
    };
    return icons[tipo] || icons['disponivel'];
}

/**
 * Criar conteúdo do popup
 */
function criarPopupContent(produtor) {
    const badgeClass = {
        'disponivel': 'bg-success',
        'venda': 'bg-warning text-dark',
        'doacao': 'bg-danger'
    };
    
    const badgeText = {
        'disponivel': 'Disponível',
        'venda': 'Venda',
        'doacao': 'Doação'
    };
    
    const actionButton = {
        'disponivel': `<button class="btn btn-success btn-sm w-100" onclick="handleMarkerAction(${produtor.id}, 'trocar')">
                         <i class="fas fa-exchange-alt me-1"></i>Trocar
                       </button>`,
        'venda': `<button class="btn btn-warning btn-sm w-100" onclick="handleMarkerAction(${produtor.id}, 'comprar')">
                    <i class="fas fa-shopping-cart me-1"></i>Comprar ${produtor.preco}
                  </button>`,
        'doacao': `<button class="btn btn-danger btn-sm w-100" onclick="handleMarkerAction(${produtor.id}, 'receber')">
                     <i class="fas fa-heart me-1"></i>Receber
                   </button>`
    };
    
    const stars = '★'.repeat(produtor.rating) + '☆'.repeat(5 - produtor.rating);
    
    return `
        <div class="popup-content">
            <div class="d-flex align-items-center mb-2">
                <img src="${produtor.avatar}" 
                     class="rounded-circle me-2" 
                     width="30" height="30" alt="${produtor.nome}">
                <div class="flex-grow-1">
                    <h6 class="mb-0">${produtor.nome}</h6>
                    <small class="text-muted">${produtor.bairro}</small>
                </div>
                <span class="badge ${badgeClass[produtor.tipo]}">${badgeText[produtor.tipo]}</span>
            </div>
            
            <h6 class="mb-1">${produtor.produto}</h6>
            <p class="small text-muted mb-2">${produtor.descricao}</p>
            
            <div class="d-flex align-items-center mb-2">
                <span class="text-warning small me-1">${stars}</span>
                <small class="text-muted">(${produtor.trocas} ${produtor.tipo === 'venda' ? 'vendas' : produtor.tipo === 'doacao' ? 'doações' : 'trocas'})</small>
            </div>
            
            <div class="row g-1">
                <div class="col-8">
                    ${actionButton[produtor.tipo]}
                </div>
                <div class="col-4">
                    <button class="btn btn-outline-secondary btn-sm w-100" onclick="handleMarkerAction(${produtor.id}, 'perfil')">
                        <i class="fas fa-user"></i>
                    </button>
                </div>
            </div>
            
            <div class="mt-2 pt-2 border-top">
                <small class="text-success">
                    <i class="fas fa-wifi me-1"></i>
                    Online via LoRa • Atualizado há 2 min
                </small>
            </div>
        </div>
    `;
}

/**
 * Ajustar visualização do mapa para mostrar todos os marcadores
 */
function ajustarVisualizacao() {
    if (marcadores.length === 0) return;
    
    const group = new L.featureGroup(marcadores.map(m => m.marker));
    mapaLeaflet.fitBounds(group.getBounds().pad(0.1));
}

/**
 * Mostrar feedback de sucesso do mapa
 */
function mostrarFeedbackMapa() {
    const stats = {
        disponivel: produtoresData.filter(p => p.tipo === 'disponivel').length,
        venda: produtoresData.filter(p => p.tipo === 'venda').length,
        doacao: produtoresData.filter(p => p.tipo === 'doacao').length
    };
    
    showSuccessToast(`Mapa carregado! ${stats.disponivel} disponíveis, ${stats.venda} vendas, ${stats.doacao} doações encontradas.`);
}

/**
 * Handler para ações dos marcadores
 */
function handleMarkerAction(produtorId, acao) {
    const produtor = produtoresData.find(p => p.id === produtorId);
    if (!produtor) return;
    
    // Fechar popup
    mapaLeaflet.closePopup();
    
    switch (acao) {
        case 'trocar':
            handleTrocaFromMap(produtor);
            break;
        case 'comprar':
            handleCompraFromMap(produtor);
            break;
        case 'receber':
            handleDoacaoFromMap(produtor);
            break;
        case 'perfil':
            handlePerfilFromMap(produtor);
            break;
    }
}

/**
 * Handlers específicos para ações do mapa
 */
function handleTrocaFromMap(produtor) {
    showActionModal('Solicitar Troca via LoRa', `
        <div class="text-center">
            <i class="fas fa-satellite-dish fa-3x text-success mb-3"></i>
            <h5>Conectar com ${produtor.nome}</h5>
            <p>Produto: <strong>${produtor.produto}</strong></p>
            <p class="text-muted">Localização: ${produtor.bairro}</p>
            <div class="alert alert-info">
                <i class="fas fa-wifi me-2"></i>
                <strong>Conexão LoRa:</strong> Sinal forte • Latência: 45ms
            </div>
            <input type="text" class="form-control mb-3" placeholder="Que produto você oferece?">
            <textarea class="form-control mb-3" rows="2" placeholder="Mensagem (opcional)"></textarea>
        </div>
    `, 'Enviar via LoRa', 'success');
}

function handleCompraFromMap(produtor) {
    showActionModal('Comprar via LoRa', `
        <div class="text-center">
            <i class="fas fa-shopping-cart fa-3x text-warning mb-3"></i>
            <h5>${produtor.produto}</h5>
            <p><strong>${produtor.preco}</strong> • ${produtor.nome}</p>
            <p class="text-muted">${produtor.bairro}</p>
            <div class="alert alert-warning">
                <i class="fas fa-broadcast-tower me-2"></i>
                <strong>Rede LoRa:</strong> Conexão segura estabelecida
            </div>
        </div>
    `, 'Confirmar Compra', 'warning');
}

function handleDoacaoFromMap(produtor) {
    showActionModal('Receber Doação', `
        <div class="text-center">
            <i class="fas fa-heart fa-3x text-danger mb-3"></i>
            <h5>${produtor.produto}</h5>
            <p>Doação de <strong>${produtor.nome}</strong></p>
            <p class="text-muted">${produtor.bairro}</p>
            <div class="alert alert-success">
                <i class="fas fa-leaf me-2"></i>
                <strong>Impacto:</strong> Você está contribuindo para o desperdício zero!
            </div>
        </div>
    `, 'Aceitar Doação', 'danger');
}

function handlePerfilFromMap(produtor) {
    showActionModal(`Perfil: ${produtor.nome}`, `
        <div class="row">
            <div class="col-md-4 text-center">
                <img src="${produtor.avatar}" 
                     class="rounded-circle mb-3" width="80" height="80">
                <h6>${produtor.nome}</h6>
                <small class="text-muted">${produtor.bairro}</small>
                <div class="mt-2">
                    <span class="text-warning">${'★'.repeat(produtor.rating)}${'☆'.repeat(5 - produtor.rating)}</span>
                    <small class="text-muted d-block">${produtor.trocas} interações</small>
                </div>
            </div>
            <div class="col-md-8">
                <h6>Sistema de Cultivo</h6>
                <ul class="small text-muted">
                    <li>Hidroponia NFT com sensores ESP32</li>
                    <li>Monitoramento LoRa em tempo real</li>
                    <li>pH, TDS e temperatura automatizados</li>
                    <li>Cultivo 100% sustentável</li>
                </ul>
                
                <h6>Produto Atual</h6>
                <p class="small">${produtor.descricao}</p>
                
                <div class="alert alert-success small">
                    <i class="fas fa-shield-alt me-2"></i>
                    <strong>Produtor Verificado</strong> • Rede LoRa ativa
                </div>
            </div>
        </div>
    `, 'Enviar Mensagem', 'primary');
}

/**
 * Filtrar marcadores no mapa
 */
function filtrarMarcadoresMapa(filtros) {
    if (!mapaLeaflet) return;
    
    marcadores.forEach(item => {
        const { marker, data } = item;
        let mostrar = true;
        
        // Aplicar filtros
        if (filtros.tipo && filtros.tipo !== 'todos' && data.tipo !== filtros.tipo) {
            mostrar = false;
        }
        
        if (filtros.produto && !data.produto.toLowerCase().includes(filtros.produto.toLowerCase())) {
            mostrar = false;
        }
        
        // Mostrar/ocultar marcador
        if (mostrar) {
            marker.addTo(mapaLeaflet);
        } else {
            mapaLeaflet.removeLayer(marker);
        }
    });
    
    // Reajustar visualização
    setTimeout(() => {
        const visibleMarkers = marcadores.filter(item => 
            mapaLeaflet.hasLayer(item.marker)
        ).map(item => item.marker);
        
        if (visibleMarkers.length > 0) {
            const group = new L.featureGroup(visibleMarkers);
            mapaLeaflet.fitBounds(group.getBounds().pad(0.1));
        }
    }, 100);
}

// Adicionar animação CSS para pulse dos marcadores
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .marker-pulse:hover {
        transform: scale(1.2);
        transition: transform 0.2s ease;
    }
`;
document.head.appendChild(style);

// Expor função globalmente para uso no HTML
window.carregarMapa = carregarMapa;