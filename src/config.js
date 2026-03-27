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
        },
    ]
};

export const CONTACT_CONFIG = {
    WHATSAPP: import.meta.env.VITE_WHATSAPP_NUMBER || '521234567890',
    FACEBOOK_PAGE: import.meta.env.VITE_FACEBOOK_PAGE || 'your.page.username', // Can be numeric ID or username
    MESSAGE: import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola, me interesa este producto del catálogo: '
};

export const BANNER_CONFIG = {
    HERO_IMAGE: 'https://lh3.googleusercontent.com/u/0/d/1hfDSDIQGiHyRMjW6AJuq1ADHApUUHAgJ'
};

export const APP_CONFIG = {
    LOGO: `${import.meta.env.BASE_URL}inventiva_logo.svg`,
    LOGO_SM: `${import.meta.env.BASE_URL}inventiva_logo_sm.svg`,
    LOGO_NOMBRE: `${import.meta.env.BASE_URL}inventiva_lab_nombre.svg`
};


