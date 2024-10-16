import { useState, useEffect } from 'react';
import styles from './styles.module.css'

export default function ImageModal() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
        const modalElement = document.getElementById('exampleModal');
        const bootstrapModal = new bootstrap.Modal(modalElement);
        const updateWindowWidth = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', updateWindowWidth);
        const lastShown = localStorage.getItem('lastModalShown');
        const now = new Date().getTime();
        const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        if (!lastShown || now - lastShown > oneDay) {
            const timer = setTimeout(() => {
                localStorage.setItem('lastModalShown', now);
                bootstrapModal.show();
            }, 7000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
        const modalElement = document.getElementById('exampleModal');
        const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
        bootstrapModal.hide();
        window.open('https://blinkist.o6eiov.net/jrKMza', '_blank');
    };

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-body d-flex justify-content-center">
                            <a href="#" onClick={handleClick} style={{ textDecoration: 'none' }}>
                                <img src="/advertising/desktop_b1.png" alt="Advertisement" className={styles.responsive_image} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
