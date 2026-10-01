export const APP_CONFIG = {
    NAME: 'Inventiva Lab',
    SLOGAN: 'La creatividad no tiene límites',
    META_TITLE: 'Inventiva Lab - Catálogo Exclusivo',
    META_DESCRIPTION: 'Productos personalizados y papelería creativa.',
    LOGO: `${import.meta.env.BASE_URL}inventiva_logo.svg`,
    LOGO_SM: `${import.meta.env.BASE_URL}inventiva_logo.svg`,
    LOGO_NOMBRE: `${import.meta.env.BASE_URL}inventiva_lab_nombre.svg`,
    LOGO_SIMPLE: `${import.meta.env.BASE_URL}inventiva_logo.svg`,
    LOGO_ROTO: `${import.meta.env.BASE_URL}espada_rota.svg`,
    FAVICON: `${import.meta.env.BASE_URL}inventiva_lab_sm_blank.svg`
};

export const THEME_CONFIG = {
    colors: {
        darkest: '#957777',
        dark: '#eed6c4',
        contrast: '#483434',
        light: '#fff3e4',
        contrastLight: '#eed6c4',
    }
};

export const hexToRgbTuple = (hex) => {
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
        cleanHex = cleanHex.split('').map(c => c + c).join('');
    }
    const num = parseInt(cleanHex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `${r} ${g} ${b}`;
};

export const initTheme = () => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const colors = THEME_CONFIG.colors;
    Object.keys(colors).forEach(key => {
        const cssKey = `--color-cat-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssKey, hexToRgbTuple(colors[key]));
    });
};

export const BRAND_TEXTS = {
    HERO: {
        title: '¡Únete a la Comunidad!',
        subtitle: 'Síguenos para conocer nuevos productos y lanzamientos.'
    },
    ABOUT: {
        title: 'La mejor calidad',
        subtitle: 'En Inventiva Lab nos preocupamos por la calidad de nuestros productos. Por eso, cada artículo es revisado y probado antes de ser enviado.',
        cards: [
            {
                title: 'Proceso artesanal',
                description: 'Cada artículo se realiza a mano de forma minuciosa para garantizar la mejor calidad.'
            },
            {
                title: 'Diseño Exclusivo',
                description: 'Cada diseño es único y exclusivo para nuestros clientes.'
            },
            {
                title: 'Innovación Constante',
                description: 'Buscamos siempre crear nuevos productos para ti.'
            }
        ],
        passionTitle: 'Nuestra Pasión',
        passionParagraphs: [
            'En Inventiva Lab amamos crear, diseñar, innovar y principalmente jugar.',
            'Cada proyecto es una aventura donde nos encanta materializar tus ideas.',
            'Ya sea un diseño de una playera, un accesorio personalizado o cualquier objeto creado con dedicación, nuestro objetivo es transformar tu imaginación en algo tangible y especial.'
        ],
        footerSlogan: '',
        copyright: `© ${new Date().getFullYear()} - ${APP_CONFIG.NAME}`
    }
};

export const GOOGLE_DRIVE_CONFIG = {
    API_KEY: import.meta.env.VITE_GOOGLE_DRIVE_API_KEY || 'YOUR_GOOGLE_DRIVE_API_KEY',
    FOLDERS: [
        {
            id: 'all',
            name: 'Todos',
            icon: 'LayoutGrid',
            image: 'https://lh3.googleusercontent.com/u/0/d/1N4AFV7Up38yJmkVNuqqRKg9hM1rbDlfA=s400'
        },
        {
            id: 'https://drive.google.com/drive/u/3/folders/1JygqlI33WYg7DXXPsR72yZayu8AABtH_',
            name: 'Tazas',
            icon: 'Cup',
            image: 'https://lh3.googleusercontent.com/u/0/d/1XmjxC31PnRW-9raaZkIMRG9uvn6SylyF=s400'
        },
        {
            id: 'https://drive.google.com/drive/u/3/folders/1l2EFWoBgRXkaLxfoIpmWmbfOgkoZN1PH',
            name: 'Prendas',
            icon: 'Clothes',
            image: 'https://lh3.googleusercontent.com/u/0/d/1l6uKvbQgR2pz9X2Tz7DXHQ-oAq0djeRJ=s400'
        },
        {
            id: 'https://drive.google.com/drive/folders/1oTwWiIX9PwdaYwMM4jRF5DX1PxXbQRjY',
            name: 'Novedades',
            icon: 'Sparkles',
            image: 'https://lh3.googleusercontent.com/u/0/d/1Z0hD4C3MeHB_TotnSNOsS7VUzeQWavg6=s400'
        },
        {
            id: 'https://drive.google.com/drive/folders/1b8YPoDIsFPYK_DQV20yYrgB_A8LePKDP',
            name: 'Llaveros',
            icon: 'Key',
            image: 'https://lh3.googleusercontent.com/u/0/d/1JOfM__pIHcUfJbgPdK23Pzu7m9J33yPT=s400'
        }
    ]
};

export const CONTACT_CONFIG = {
    WHATSAPP: import.meta.env.VITE_WHATSAPP_NUMBER || '',
    FACEBOOK_PAGE: import.meta.env.VITE_FACEBOOK_PAGE || '',
    MESSAGE: import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola, me interesa este producto del catálogo: '
};

export const BANNER_CONFIG = {
    HERO_IMAGE: 'https://lh3.googleusercontent.com/u/0/d/1hfDSDIQGiHyRMjW6AJuq1ADHApUUHAgJ'
};
