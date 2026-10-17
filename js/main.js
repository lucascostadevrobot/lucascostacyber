/**
 * ============================================================
 * LUCAS COSTA CYBER
 * MAIN JAVASCRIPT
 * ============================================================
 */

"use strict";


/* ============================================================
   DOM READY
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeNavigation();

        initializeScrollReveal();

        initializeTryHackMe();

    }
);


/* ============================================================
   MOBILE NAVIGATION
   ============================================================ */

function initializeNavigation() {

    const navToggle =
        document.querySelector(
            ".nav-toggle"
        );

    const navMenu =
        document.querySelector(
            "#primary-menu"
        );


    if (
        !navToggle ||
        !navMenu
    ) {

        return;

    }


    navToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navMenu.classList.toggle(
                    "open"
                );


            navToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            navToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Fechar menu"
                    : "Abrir menu"
            );

        }
    );


    /*
     * Fecha o menu após clicar
     * em qualquer item.
     */

    const menuLinks =
        navMenu.querySelectorAll(
            "a"
        );


    menuLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "open"
                    );


                    navToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    navToggle.setAttribute(
                        "aria-label",
                        "Abrir menu"
                    );

                }
            );

        }
    );

}


/* ============================================================
   SCROLL REVEAL
   ============================================================ */

function initializeScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    /*
     * Fallback para navegadores
     * sem IntersectionObserver.
     */

    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

}


/* ============================================================
   TRYHACKME
   ============================================================ */

/*
 * Configure SOMENTE dados públicos e verdadeiros.
 *
 * Exemplo:
 *
 * username: "seuusername",
 * rank: "Top 5%",
 * level: "32",
 * rooms: "87",
 * profileUrl: "https://tryhackme.com/p/seuusername"
 *
 * Não invente estatísticas.
 */

const tryHackMeData = {

    username:
        "CONFIGURAR",

    rank:
        "—",

    level:
        "—",

    rooms:
        "—",

    profileUrl:
        "#"

};


/* ============================================================
   APPLY TRYHACKME DATA
   ============================================================ */

function initializeTryHackMe() {

    const usernameElement =
        document.querySelector(
            "#thm-user"
        );


    const rankElement =
        document.querySelector(
            "#thm-rank"
        );


    const levelElement =
        document.querySelector(
            "#thm-level"
        );


    const roomsElement =
        document.querySelector(
            "#thm-rooms"
        );


    const profileElement =
        document.querySelector(
            "#thm-link"
        );


    if (usernameElement) {

        usernameElement.textContent =
            tryHackMeData.username;

    }


    if (rankElement) {

        rankElement.textContent =
            tryHackMeData.rank;

    }


    if (levelElement) {

        levelElement.textContent =
            tryHackMeData.level;

    }


    if (roomsElement) {

        roomsElement.textContent =
            tryHackMeData.rooms;

    }


    if (
        profileElement &&
        tryHackMeData.profileUrl !== "#"
    ) {

        profileElement.href =
            tryHackMeData.profileUrl;

        profileElement.target =
            "_blank";

        profileElement.rel =
            "noopener noreferrer";

    }

}


/* ============================================================
   FUTURE EXTENSION POINT
   ============================================================ */

/*
 * IMPORTANTE:
 *
 * Não realizar chamadas automáticas para APIs externas
 * sem avaliar:
 *
 * - autenticação
 * - CORS
 * - rate limiting
 * - exposição de dados
 * - política da plataforma
 * - segurança da integração
 *
 * Para uma landing page, dados públicos podem ser
 * atualizados manualmente.
 */


/* ============================================================
   SECURITY NOTES
   ============================================================ */

/*
 * Não utilizar:
 *
 * eval()
 * Function()
 * document.write()
 * innerHTML para dados externos
 *
 * Para conteúdo dinâmico, preferir:
 *
 * element.textContent = value;
 */


/* ============================================================
   EXAMPLE OF SAFE DOM UPDATE
   ============================================================ */

function setSafeText(
    selector,
    value
) {

    const element =
        document.querySelector(
            selector
        );


    if (!element) {

        return;

    }


    element.textContent =
        String(value);

}