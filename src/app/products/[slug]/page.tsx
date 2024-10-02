import { ProductPage } from '@/components/ProductPage'

export default function Page({ params }: { params: { slug: string } }) {
    return (
      <>
          <ProductPage />
      </>
    )
    
  }