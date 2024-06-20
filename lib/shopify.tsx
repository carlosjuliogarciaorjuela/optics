// lib/shopify.tsx
export interface Product {
  node: {
    id: string;
    title: string;
    description: string;
    image: {
      src: string;
    };
  };
}

export interface ShopifyFetchResponse {
  status: number;
  body: {
    data: {
      products: {
        edges: Product[];
      };
    };
  };
}

// Definición de la función de fetch
export async function shopifyFetch({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, any>;
}): Promise<ShopifyFetchResponse> {
  const endpoint = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2021-07/graphql.json`;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!endpoint || !key) {
    throw new Error("Missing Shopify environment variables");
  }

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: JSON.stringify({ query, variables }),
    });

    const body = await result.json();

    return {
      status: result.status,
      body,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      body: { data: { products: { edges: [] } } },
    };
  }
}

// Función para obtener todos los productos
export async function getAllProducts(): Promise<ShopifyFetchResponse> {
  return shopifyFetch({
    query: `{
      products(sortKey: TITLE, first: 100) {
        edges {
          node {
            id
            title
            description
            image {
              src
            }
          }
        }
      }
    }`,
  });
}
