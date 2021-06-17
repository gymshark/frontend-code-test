export type ImageType = {
    alt: string;
    src: string;
};
export interface ProductProps {
    id: number;
    sku: string;
    isNewRelease: boolean;
    inStock: boolean;
    percentInStock: number;
    sizeInStock: string[];
    availableSizes: {
        inStock: boolean;
        inventoryQuantity: number;
        price: number;
        size: string;
        sku: string;
    }[];
    handle: string;
    title: string;
    type: string;
    gender: string[];
    fit: string | null;
    label: string;
    colour: string;
    canonicalColour: string;
    price: number;
    compareAtPrice: number;
    discountPercentage: number;
    featuredMedia: ImageType;
    media: ImageType[];
}
