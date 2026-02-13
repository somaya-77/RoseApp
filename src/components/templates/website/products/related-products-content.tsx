
import Content from './carousel-content';
import { getSimilarProductService } from '@/lib/_services/similar-products.service';

export default async function RelatedProductsContent({categoryId}:{categoryId: string | null}) {

    // services
    const data = await getSimilarProductService(categoryId);

    return (
        <Content items={data.products} />
    )
}