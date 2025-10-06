     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Solución para el problema del mapa
        document.addEventListener('DOMContentLoaded', function() {
            // Esta función asegura que el mapa se cargue correctamente
            const mapIframe = document.querySelector('.mapa iframe');
            if (mapIframe) {
                // Forzar la recarga del iframe para asegurar que se muestre
                setTimeout(function() {
                    const src = mapIframe.src;
                    mapIframe.src = '';
                    mapIframe.src = src;
                }, 1000);
            }
        });