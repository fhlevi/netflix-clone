import { Plan } from "@/types/plan";

export const plans: Plan[] = [
    {
        name: 'Mobile',
        resolution: '480p',
        price: 'IDR 54,000',
        quality: 'Fair',
        devices: 'Mobile phone, tablet',
        simultaneous: 1,
        downloads: 1
    },
    {
        name: 'Basic',
        resolution: '720p (HD)',
        price: 'IDR 65,000',
        quality: 'Good',
        devices: 'TV, computer, mobile phone, tablet',
        simultaneous: 1,
        downloads: 1
    },
    {
        name: 'Standard',
        resolution: '1080p (Full HD)',
        price: 'IDR 120,000',
        quality: 'Great',
        devices: 'TV, computer, mobile phone, tablet',
        simultaneous: 2,
        downloads: 2
    },
    {
        name: 'Premium',
        resolution: '4K (Ultra HD) + HDR',
        price: 'IDR 186,000',
        quality: 'Best',
        devices: 'TV, computer, mobile phone, tablet',
        simultaneous: 4,
        downloads: 6,
        special: 'Spatial audio (immersive sound)',
        popular: true
    }
];