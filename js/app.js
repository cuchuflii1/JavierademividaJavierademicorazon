// ======================================================
// TRANSICIÓN ENTRE SECCIONES
// ======================================================

function irConTransicion(destino) {

    const overlay =
        document.getElementById("transicionPantalla");

    if (!destino) {
        return;
    }

    if (overlay) {
        overlay.classList.add("visible");
    }

    setTimeout(() => {

        destino.scrollIntoView({
            behavior: "auto",
            block: "start"
        });

    }, 550);

    setTimeout(() => {

        if (overlay) {
            overlay.classList.remove("visible");
        }

    }, 1050);
}


// ======================================================
// PORTADA
// ======================================================

const btnComenzar =
    document.getElementById("btnComenzar");

const historia =
    document.getElementById("historia");


if (
    btnComenzar &&
    historia
) {

    btnComenzar.addEventListener(
        "click",
        () => {

            irConTransicion(historia);

        }
    );
}


// ======================================================
// PRIMERA NOCHE
// ======================================================

const botonesRecuerdo =
    document.querySelectorAll(
        ".recuerdo-btn"
    );

const recuerdosAbiertos =
    new Set();

const fraseFinal =
    document.getElementById(
        "fraseFinal"
    );

const btnCumple =
    document.getElementById(
        "btnCumple"
    );


botonesRecuerdo.forEach(
    (boton) => {

        boton.addEventListener(
            "click",
            () => {

                const numero =
                    boton.dataset.recuerdo;

                const panel =
                    document.getElementById(
                        "recuerdo" + numero
                    );

                if (!panel) {
                    return;
                }

                boton.classList.toggle(
                    "activo"
                );

                panel.classList.toggle(
                    "activo"
                );

                if (
                    panel.classList.contains(
                        "activo"
                    )
                ) {

                    recuerdosAbiertos.add(
                        numero
                    );

                }

                if (
                    recuerdosAbiertos.size >= 3
                ) {

                    if (fraseFinal) {
                        fraseFinal.classList.add(
                            "visible"
                        );
                    }

                    if (btnCumple) {
                        btnCumple.classList.add(
                            "visible"
                        );
                    }

                }

            }
        );

    }
);


// ======================================================
// PRIMERA NOCHE -> CUMPLEAÑOS
// ======================================================

const cumpleRecuerdo =
    document.getElementById(
        "cumpleRecuerdo"
    );


if (
    btnCumple &&
    cumpleRecuerdo
) {

    btnCumple.addEventListener(
        "click",
        () => {

            irConTransicion(
                cumpleRecuerdo
            );

        }
    );
}


// ======================================================
// CUMPLEAÑOS
// ======================================================

const regaloCard =
    document.getElementById(
        "regaloCard"
    );

const regaloCerrado =
    document.getElementById(
        "regaloCerrado"
    );

const regaloAbierto =
    document.getElementById(
        "regaloAbierto"
    );

const btnBariloche =
    document.getElementById(
        "btnBariloche"
    );


if (
    regaloCard &&
    regaloCerrado &&
    regaloAbierto
) {

    regaloCard.addEventListener(
        "click",
        () => {

            if (
                regaloAbierto.classList.contains(
                    "activo"
                )
            ) {
                return;
            }

            regaloCerrado.style.display =
                "none";

            regaloAbierto.classList.add(
                "activo"
            );

            if (btnBariloche) {

                setTimeout(
                    () => {

                        btnBariloche.classList.add(
                            "visible"
                        );

                    },
                    450
                );

            }

        }
    );
}


// ======================================================
// CUMPLEAÑOS -> BARILOCHE
// ======================================================

const bariloche =
    document.getElementById(
        "bariloche"
    );


if (
    btnBariloche &&
    bariloche
) {

    btnBariloche.addEventListener(
        "click",
        () => {

            irConTransicion(
                bariloche
            );

        }
    );
}


// ======================================================
// BARILOCHE
// ======================================================

const btnEncontrarnos =
    document.getElementById(
        "btnEncontrarnos"
    );

const barilochePersonas =
    document.getElementById(
        "barilochePersonas"
    );

const corazonesEncuentro =
    document.getElementById(
        "corazonesEncuentro"
    );

const barilocheRecuerdo =
    document.getElementById(
        "barilocheRecuerdo"
    );

const btnIrParque =
    document.getElementById(
        "btnIrParque"
    );


if (
    btnEncontrarnos &&
    barilochePersonas &&
    corazonesEncuentro &&
    barilocheRecuerdo
) {

    btnEncontrarnos.addEventListener(
        "click",
        () => {

            barilochePersonas.classList.add(
                "juntos"
            );

            corazonesEncuentro.classList.add(
                "visible"
            );

            btnEncontrarnos.style.opacity =
                "0";

            btnEncontrarnos.style.pointerEvents =
                "none";

            setTimeout(
                () => {

                    barilocheRecuerdo.classList.add(
                        "visible"
                    );

                },
                600
            );

            if (btnIrParque) {

                setTimeout(
                    () => {

                        btnIrParque.classList.add(
                            "visible"
                        );

                    },
                    1000
                );

            }

        }
    );
}


// ======================================================
// BARILOCHE -> PARQUE
// ======================================================

const parque =
    document.getElementById(
        "parque"
    );


if (
    btnIrParque &&
    parque
) {

    btnIrParque.addEventListener(
        "click",
        () => {

            irConTransicion(
                parque
            );

        }
    );
}


// ======================================================
// PARQUE / POLOLEO
// ======================================================

const btnAbrirParque =
    document.getElementById(
        "btnAbrirParque"
    );

const papelitos =
    document.getElementById(
        "papelitos"
    );

const parqueReveal =
    document.getElementById(
        "parqueReveal"
    );

const btnIrCueca =
    document.getElementById(
        "btnIrCueca"
    );


if (
    btnAbrirParque &&
    parqueReveal
) {

    btnAbrirParque.addEventListener(
        "click",
        () => {

            if (papelitos) {

                papelitos.classList.add(
                    "visible"
                );

            }

            btnAbrirParque.innerHTML =
                "Mira bien... ❤️";

            btnAbrirParque.style.pointerEvents =
                "none";

            setTimeout(
                () => {

                    parqueReveal.classList.add(
                        "visible"
                    );

                },
                850
            );

            if (btnIrCueca) {

                setTimeout(
                    () => {

                        btnIrCueca.classList.add(
                            "visible"
                        );

                    },
                    1250
                );

            }

        }
    );
}


// ======================================================
// PARQUE -> CUECA
// ======================================================

const cueca =
    document.getElementById(
        "cueca"
    );


if (
    btnIrCueca &&
    cueca
) {

    btnIrCueca.addEventListener(
        "click",
        () => {

            irConTransicion(
                cueca
            );

        }
    );
}


// ======================================================
// CUECA
// ======================================================

const btnCueca =
    document.getElementById(
        "btnCueca"
    );

const cuecaReveal =
    document.getElementById(
        "cuecaReveal"
    );

const cuecaFoto =
    document.getElementById(
        "cuecaFoto"
    );

const btnIrAmo =
    document.getElementById(
        "btnIrAmo"
    );


if (
    btnCueca &&
    cuecaReveal &&
    cuecaFoto
) {

    btnCueca.addEventListener(
        "click",
        () => {

            cuecaFoto.classList.add(
                "activa"
            );

            btnCueca.innerHTML =
                "Ese momento ♥️";

            btnCueca.style.pointerEvents =
                "none";

            btnCueca.style.opacity =
                ".45";

            setTimeout(
                () => {

                    cuecaReveal.classList.add(
                        "visible"
                    );

                },
                400
            );

            if (btnIrAmo) {

                setTimeout(
                    () => {

                        btnIrAmo.classList.add(
                            "visible"
                        );

                    },
                    850
                );

            }

        }
    );
}


// ======================================================
// CUECA -> LO QUE AMO
// ======================================================

const amo =
    document.getElementById(
        "amo"
    );


if (
    btnIrAmo &&
    amo
) {

    btnIrAmo.addEventListener(
        "click",
        () => {

            irConTransicion(
                amo
            );

        }
    );
}


// ======================================================
// LO QUE AMO
// ======================================================

const amorCards =
    document.querySelectorAll(
        ".amor-card"
    );

const amoFinal =
    document.getElementById(
        "amoFinal"
    );

const btnFinal =
    document.getElementById(
        "btnFinal"
    );

let amoresAbiertos = 0;


amorCards.forEach(
    (card) => {

        card.addEventListener(
            "click",
            () => {

                if (
                    card.classList.contains(
                        "abierto"
                    )
                ) {
                    return;
                }

                const texto =
                    card.dataset.amor;

                const revelado =
                    card.querySelector(
                        ".amor-revelado"
                    );

                if (revelado) {

                    revelado.textContent =
                        texto;

                }

                card.classList.add(
                    "abierto"
                );

                amoresAbiertos++;

                if (
                    amoresAbiertos ===
                    amorCards.length
                ) {

                    setTimeout(
                        () => {

                            if (amoFinal) {

                                amoFinal.classList.add(
                                    "visible"
                                );

                            }

                            if (btnFinal) {

                                btnFinal.classList.add(
                                    "visible"
                                );

                            }

                        },
                        550
                    );

                    setTimeout(
                        () => {

                            if (amoFinal) {

                                amoFinal.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                });

                            }

                        },
                        900
                    );

                }

            }
        );

    }
);


// ======================================================
// LO QUE AMO -> GALERÍA
// ======================================================

const galeriaRecuerdos =
    document.getElementById(
        "galeriaRecuerdos"
    );


if (
    btnFinal &&
    galeriaRecuerdos
) {

    btnFinal.addEventListener(
        "click",
        () => {

            irConTransicion(
                galeriaRecuerdos
            );

        }
    );
}


// ======================================================
// GALERÍA -> FINAL
// ======================================================

const btnIrFinal =
    document.getElementById(
        "btnIrFinal"
    );

const finalWeb =
    document.getElementById(
        "finalWeb"
    );


if (
    btnIrFinal &&
    finalWeb
) {

    btnIrFinal.addEventListener(
        "click",
        () => {

            irConTransicion(
                finalWeb
            );

        }
    );
}


// ======================================================
// CORAZONES DEL FINAL
// ======================================================

function crearCorazonFinal() {

    const corazon =
        document.createElement(
            "span"
        );

    corazon.className =
        "corazon-final-flotante";

    corazon.textContent =
        Math.random() > .35
            ? "♥"
            : "♡";

    corazon.style.left =
        `${8 + Math.random() * 84}%`;

    corazon.style.fontSize =
        `${14 + Math.random() * 18}px`;

    corazon.style.animationDuration =
        `${6 + Math.random() * 4}s`;

    corazon.style.setProperty(
        "--desvio",
        `${-50 + Math.random() * 100}px`
    );

    corazon.style.setProperty(
        "--giro",
        `${-25 + Math.random() * 50}deg`
    );

    document.body.appendChild(
        corazon
    );

    setTimeout(
        () => {

            corazon.remove();

        },
        11000
    );
}


function lanzarCorazonesFinales() {

    let cantidad = 0;

    const intervalo =
        setInterval(
            () => {

                crearCorazonFinal();

                cantidad++;

                if (
                    cantidad >= 14
                ) {

                    clearInterval(
                        intervalo
                    );

                }

            },
            320
        );
}


// ======================================================
// TEXTO ESCRIBIÉNDOSE
// ======================================================

const teAmoEscritura =
    document.getElementById(
        "teAmoEscritura"
    );

let escrituraFinalHecha =
    false;


function escribirTeAmo() {

    if (
        !teAmoEscritura ||
        escrituraFinalHecha
    ) {
        return;
    }

    escrituraFinalHecha =
        true;

    const texto =
        teAmoEscritura.dataset.texto ||
        "Te amo muchísimo. ♥";

    let posicion = 0;

    teAmoEscritura.textContent =
        "";

    const escribirLetra =
        () => {

            posicion++;

            teAmoEscritura.textContent =
                texto.slice(
                    0,
                    posicion
                );

            if (
                posicion <
                texto.length
            ) {

                setTimeout(
                    escribirLetra,
                    85
                );

            } else {

                teAmoEscritura.classList.add(
                    "terminado"
                );

            }

        };

    escribirLetra();
}


// ======================================================
// LUCES DEL FINAL
// ======================================================

const lucesFinales =
    document.getElementById(
        "lucesFinales"
    );


function crearLucesFinales() {

    if (!lucesFinales) {
        return;
    }

    lucesFinales.innerHTML =
        "";

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const luz =
            document.createElement(
                "span"
            );

        luz.classList.add(
            "luz-final"
        );

        luz.style.left =
            `${Math.random() * 100}%`;

        luz.style.top =
            `${Math.random() * 100}%`;

        luz.style.setProperty(
            "--duracion",
            `${6 + Math.random() * 6}s`
        );

        luz.style.animationDelay =
            `${Math.random() * 5}s`;

        lucesFinales.appendChild(
            luz
        );

    }
}


// ======================================================
// REVELACIÓN FINAL
// ======================================================

const btnUltima =
    document.getElementById(
        "btnUltima"
    );

const finalReveal =
    document.getElementById(
        "finalReveal"
    );


if (
    btnUltima &&
    finalReveal
) {

    btnUltima.addEventListener(
        "click",
        () => {

            btnUltima.style.opacity =
                "0";

            btnUltima.style.pointerEvents =
                "none";

            setTimeout(
                () => {

                    finalReveal.classList.add(
                        "visible"
                    );

                    lanzarCorazonesFinales();

                    crearLucesFinales();

                    setTimeout(
                        () => {

                            escribirTeAmo();

                        },
                        700
                    );

                    setTimeout(
                        () => {

                            const tituloCumple =
                                finalReveal.querySelector(
                                    "h3"
                                );

                            if (tituloCumple) {

                                const posicion =
                                    tituloCumple
                                        .getBoundingClientRect()
                                        .top
                                    +
                                    window.scrollY
                                    -
                                    90;

                                window.scrollTo({
                                    top: posicion,
                                    behavior: "smooth"
                                });

                            }

                        },
                        650
                    );

                },
                300
            );

        }
    );

}


// ======================================================
// CONTADORES
// ======================================================

function calcularDias(
    fechaInicio
) {

    const inicio =
        new Date(
            fechaInicio.getFullYear(),
            fechaInicio.getMonth(),
            fechaInicio.getDate()
        );

    const hoy =
        new Date();

    const hoyLimpio =
        new Date(
            hoy.getFullYear(),
            hoy.getMonth(),
            hoy.getDate()
        );

    return Math.max(
        0,
        Math.floor(
            (
                hoyLimpio -
                inicio
            ) /
            (
                1000 *
                60 *
                60 *
                24
            )
        )
    );
}


function animarNumero(
    elemento,
    destino
) {

    if (!elemento) {
        return;
    }

    let actual = 0;

    const pasos = 45;

    const incremento =
        Math.max(
            1,
            Math.ceil(
                destino /
                pasos
            )
        );

    elemento.textContent =
        "0";

    const intervalo =
        setInterval(
            () => {

                actual +=
                    incremento;

                if (
                    actual >= destino
                ) {

                    actual =
                        destino;

                    clearInterval(
                        intervalo
                    );

                }

                elemento.textContent =
                    actual;

            },
            24
        );
}


const diasJuntos =
    document.getElementById(
        "diasJuntos"
    );

const diasConocidos =
    document.getElementById(
        "diasConocidos"
    );

const diasPololeo =
    document.getElementById(
        "diasPololeo"
    );


if (diasJuntos) {

    animarNumero(
        diasJuntos,
        calcularDias(
            new Date(
                2025,
                10,
                8
            )
        )
    );

}


if (diasConocidos) {

    animarNumero(
        diasConocidos,
        calcularDias(
            new Date(
                2025,
                10,
                8
            )
        )
    );

}


if (diasPololeo) {

    animarNumero(
        diasPololeo,
        calcularDias(
            new Date(
                2026,
                4,
                8
            )
        )
    );

}


// ======================================================
// RECUERDO ALEATORIO
// ======================================================

const btnRecuerdoAleatorio =
    document.getElementById(
        "btnRecuerdoAleatorio"
    );

const recuerdoSorpresa =
    document.getElementById(
        "recuerdoSorpresa"
    );

const fotoRecuerdoAleatorio =
    document.getElementById(
        "fotoRecuerdoAleatorio"
    );

const textoRecuerdoAleatorio =
    document.getElementById(
        "textoRecuerdoAleatorio"
    );

const numeroRecuerdoAleatorio =
    document.getElementById(
        "numeroRecuerdoAleatorio"
    );


const recuerdosAleatorios = [

    {
        foto: "fotos/foto1.jpg",
        texto: "Un recuerdo más contigo. ♥"
    },

    {
        foto: "fotos/foto2.jpg",
        texto: "Contigo hasta los momentos simples se sienten especiales."
    },

    {
        foto: "fotos/foto3.jpg",
        texto: "Otra fotito nuestra que quería guardar aquí."
    },

    {
        foto: "fotos/foto4.jpg",
        texto: "Me encanta seguir sumando recuerdos contigo."
    },

    {
        foto: "fotos/foto5.jpg",
        texto: "Otro pedacito de nosotros. ♥"
    },

    {
        foto: "fotos/foto6.jpg",
        texto: "Quiero seguir viviendo momentos así contigo."
    },

    {
        foto: "fotos/foto7.jpg",
        texto: "Tú haces especial hasta el momento más simple."
    },

    {
        foto: "fotos/foto8.jpg",
        texto: "Una más de todas las que todavía nos faltan."
    },

    {
        foto: "fotos/foto9.jpg",
        texto: "Otro recuerdo que merece quedarse aquí."
    },

    {
        foto: "fotos/foto10.jpg",
        texto: "Y todavía nos quedan muchísimos recuerdos por vivir. ♥"
    }

];


let ultimoRecuerdo =
    -1;


if (
    btnRecuerdoAleatorio &&
    recuerdoSorpresa &&
    fotoRecuerdoAleatorio
) {

    btnRecuerdoAleatorio.addEventListener(
        "click",
        () => {

            let indice;

            do {

                indice =
                    Math.floor(
                        Math.random() *
                        recuerdosAleatorios.length
                    );

            } while (
                indice ===
                    ultimoRecuerdo &&
                recuerdosAleatorios.length >
                    1
            );

            ultimoRecuerdo =
                indice;

            const recuerdo =
                recuerdosAleatorios[
                    indice
                ];

            fotoRecuerdoAleatorio.src =
                recuerdo.foto;

            if (
                textoRecuerdoAleatorio
            ) {

                textoRecuerdoAleatorio.textContent =
                    recuerdo.texto;

            }

            if (
                numeroRecuerdoAleatorio
            ) {

                numeroRecuerdoAleatorio.textContent =
                    String(
                        indice + 1
                    ).padStart(
                        2,
                        "0"
                    );

            }

            recuerdoSorpresa.classList.add(
                "visible"
            );

            btnRecuerdoAleatorio.textContent =
                "Otro recuerdo ♥";

        }
    );

}


// ======================================================
// MENSAJE SECRETO FINAL
// ======================================================

const corazonSecreto =
    document.getElementById(
        "corazonSecreto"
    );

const mensajeSecreto =
    document.getElementById(
        "mensajeSecreto"
    );


if (
    corazonSecreto &&
    mensajeSecreto
) {

    corazonSecreto.addEventListener(
        "click",
        () => {

            const abierto =
                mensajeSecreto.classList.contains(
                    "visible"
                );

            if (abierto) {

                mensajeSecreto.classList.remove(
                    "visible"
                );

                corazonSecreto.classList.remove(
                    "encontrado"
                );

            } else {

                mensajeSecreto.classList.add(
                    "visible"
                );

                corazonSecreto.classList.add(
                    "encontrado"
                );

            }

        }
    );

}


// ======================================================
// SECRETO PORTADA
// ======================================================

const corazonPortada =
    document.getElementById(
        "corazonPortada"
    );

const secretoPortada =
    document.getElementById(
        "secretoPortada"
    );

const cerrarSecretoPortada =
    document.getElementById(
        "cerrarSecretoPortada"
    );

let temporizadorSecreto;


function iniciarSecretoPortada() {

    clearTimeout(
        temporizadorSecreto
    );

    temporizadorSecreto =
        setTimeout(
            () => {

                if (
                    secretoPortada
                ) {

                    secretoPortada.classList.add(
                        "visible"
                    );

                }

            },
            900
        );
}


function cancelarSecretoPortada() {

    clearTimeout(
        temporizadorSecreto
    );

}


if (corazonPortada) {

    corazonPortada.addEventListener(
        "pointerdown",
        iniciarSecretoPortada
    );

    corazonPortada.addEventListener(
        "pointerup",
        cancelarSecretoPortada
    );

    corazonPortada.addEventListener(
        "pointerleave",
        cancelarSecretoPortada
    );

    corazonPortada.addEventListener(
        "pointercancel",
        cancelarSecretoPortada
    );

}


if (
    cerrarSecretoPortada &&
    secretoPortada
) {

    cerrarSecretoPortada.addEventListener(
        "click",
        () => {

            secretoPortada.classList.remove(
                "visible"
            );

        }
    );

}


if (secretoPortada) {

    secretoPortada.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target ===
                secretoPortada
            ) {

                secretoPortada.classList.remove(
                    "visible"
                );

            }

        }
    );

}


// ======================================================
// PENSANDO EN TI
// ======================================================

const linkMusica =
    document.getElementById(
        "linkMusica"
    );


if (linkMusica) {

    linkMusica.addEventListener(
        "click",
        (evento) => {

            evento.preventDefault();

            const destino =
                linkMusica.href;

            const nuevaVentana =
                window.open(
                    "",
                    "_blank"
                );

            linkMusica.classList.add(
                "abriendo-musica"
            );

            setTimeout(
                () => {

                    if (
                        nuevaVentana
                    ) {

                        nuevaVentana.location.href =
                            destino;

                    } else {

                        window.location.href =
                            destino;

                    }

                    linkMusica.classList.remove(
                        "abriendo-musica"
                    );

                },
                620
            );

        }
    );

}


// ======================================================
// MAPA DE NUESTRA HISTORIA
// ======================================================

const botonesMapa =
    document.querySelectorAll(
        "[data-destino]"
    );


botonesMapa.forEach(
    (boton) => {

        boton.addEventListener(
            "click",
            () => {

                const destino =
                    document.getElementById(
                        boton.dataset.destino
                    );

                if (!destino) {
                    return;
                }

                irConTransicion(
                    destino
                );

            }
        );

    }
);


// ======================================================
// VIDEO FINAL OCULTO
// ======================================================

const btnVideoFinal =
    document.getElementById(
        "btnVideoFinal"
    );

const videoFinalReveal =
    document.getElementById(
        "videoFinalReveal"
    );

const videoFinalPlayer =
    document.getElementById(
        "videoFinalPlayer"
    );


if (
    btnVideoFinal &&
    videoFinalReveal
) {

    btnVideoFinal.addEventListener(
        "click",
        () => {

            videoFinalReveal.classList.add(
                "visible"
            );

            btnVideoFinal.style.opacity =
                "0";

            btnVideoFinal.style.pointerEvents =
                "none";

            setTimeout(
                () => {

                    videoFinalReveal.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                },
                350
            );

        }
    );

}