
import { getSimilarProductService } from '@/lib/_services/similar-products.service';
import Content from './carousel-content';

type RelatedProductsContentProps = {
    categoryId: string,
}

export default async function RelatedProductsContent({categoryId}: RelatedProductsContentProps) {
    // services
    const data = await getSimilarProductService(categoryId);

    return (
        <Content items={data.products} />
    )
}