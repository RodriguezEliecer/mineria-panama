document.addEventListener('DOMContentLoaded', () => {
    const botonesLeer = document.querySelectorAll('.btn-cotizar');
    const modal = document.getElementById('modalImpacto');
    const cerrarModal = document.getElementById('cerrarModal');
    const titulo = document.getElementById('impactoTitulo');
    const detalle = document.getElementById('impactoDetalle');
    const fuente = document.getElementById('impactoFuente');
    const imagen = document.getElementById('impactoImagen');
    const extra = document.getElementById('impactoExtra');

    if (!modal || !cerrarModal) return;

    const impactos = {
        ambiental: {
            titulo: "Impacto Ambientales",
            detalle: "El proyecto Cobre Panamá ha generado deforestación en Donoso, Colón, y riesgos de contaminación de ríos por el uso de químicos en la extracción.",
            extra: "El Ministerio de Ambiente supervisa más de 370 compromisos ambientales establecidos en el Estudio de Impacto Ambiental, incluyendo planes de reforestación y monitoreo de calidad de agua.",
            fuente: "https://www.miambiente.gob.pa/mi-ambiente-auditoria-integral-del-proyecto-mina-de-cobre-panama",
            imagen: "./assets/images/ambiental.jpg"
        },
        social: {
            titulo: "Impacto Sociales",
            detalle: "Las comunidades cercanas a la mina han enfrentado tensiones sociales por reasentamientos, pérdida de tierras agrícolas y cambios culturales.",
            extra: "Aunque existen programas sociales y comunitarios, los beneficios son percibidos como insuficientes frente a los costos sociales y culturales que enfrentan las comunidades.",
            fuente: "https://www.panamaamerica.com.pa/nacion",
            imagen: "./assets/images/social.jpg"
        },
        economico: {
            titulo: "Impacto Económicos",
            detalle: "Desde noviembre de 2023 la mina Cobre Panamá permanece inactiva, generando una pérdida estimada de $1,700 millones en 2024.",
            extra: "Las pérdidas incluyen $500 millones en impuestos y regalías, $250 millones en salarios y casi $1,000 millones en compras locales, afectando directamente a proveedores y trabajadores.",
            fuente: "https://www.panamaamerica.com.pa/economia/un-vacio-de-1700-millones-lo-que-pierde-panama-sin-la-mina-de-cobre-1249250",
            imagen: "./assets/images/economico.jpg"
        },
        conflictos: {
            titulo: "Conflictos y Debate Nacional",
            detalle: "En 2023–2024, Panamá vivió protestas masivas contra el contrato minero de Cobre Panamá. La Corte Suprema declaró inconstitucional el contrato, lo que llevó a la suspensión de operaciones y a arbitrajes internacionales iniciados por la empresa matriz. Este conflicto abrió un debate nacional sobre el modelo de desarrollo y el futuro de la minería.",
            extra: "Miles de ciudadanos participaron en bloqueos de carreteras y manifestaciones, convirtiéndose en uno de los movimientos sociales más grandes de la historia reciente del país.",
            fuente: "https://www.bbc.com/mundo/articles/cl7x74vp7vro",
            imagen: "./assets/images/conflicto.jpg"
        },
        legal: {
            titulo: "Marco Legal",
            detalle: "La actividad minera en Panamá está regulada por el Código de Recursos Minerales y supervisada por el MICI. Sin embargo, el marco legal ha sido criticado por falta de transparencia en concesiones y débil fiscalización ambiental.",
            extra: "Tras la crisis de Cobre Panamá, se discute una reforma integral que garantice sostenibilidad, participación ciudadana y justicia social. El Acuerdo de Escazú, ratificado en 2020, refuerza el derecho de acceso a la información y la participación pública en temas ambientales.",
            fuente: "https://docs.panama.justia.com/federales/codigos/codigo-de-recursos-minerales.pdf",
            imagen: "./assets/images/marcolegal.jpg"
        }

    };

    botonesLeer.forEach(btn => {
        btn.addEventListener('click', () => {
            const tipo = btn.closest('.auto-card').dataset.impacto;
            if (impactos[tipo]) {
                titulo.textContent = impactos[tipo].titulo;
                detalle.textContent = impactos[tipo].detalle;
                extra.textContent = impactos[tipo].extra;
                fuente.href = impactos[tipo].fuente;
                imagen.src = impactos[tipo].imagen;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});