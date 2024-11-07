const movable = document.getElementById('movable');
        const target = document.getElementById('target');
        let posX = 0;
        let posY = 0;
        const movimento = 10;

        document.addEventListener('keydown', (event) => {
            if (event.key === 'w') {
                posY -= movimento;
                if (posY < 0) {
                    posY = 0;
                }
            } else if (event.key === 's') {
                posY += movimento;
                if (posY > 350) {
                    posY = 350;
                }
            } else if (event.key === 'a') {
                posX -= movimento;
                if (posX < 0) {
                    posX = 0;
                }
            } else if (event.key === 'd') {
                posX += movimento;
                if (posX > 550) {
                    posX = 550;
                }
            }

            movable.style.top = posY + 'px';
            movable.style.left = posX + 'px';

            if (colisaoDetectada(movable, target)) {
                alert('Colisão detectada!');
            }
        });

        function colisaoDetectada(el1, el2) {
            const rect1 = el1.getBoundingClientRect();
            const rect2 = el2.getBoundingClientRect();

            if (rect1.top > rect2.bottom) {
                return false;
            }
            if (rect1.bottom < rect2.top) {
                return false;
            }
            if (rect1.left > rect2.right) {
                return false;
            }
            if (rect1.right < rect2.left) {
                return false;
            }

            return true;
        }