import { DocumentNode } from "graphql";
import { print } from "graphql/language/printer";

const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://127.0.0.1:1337/graphql";

export async function getDataFromGqlWithRevalidate(
  gqlData: DocumentNode,
  variables: any = undefined,
  revalidate: number = 10
) {
  const data = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: print(gqlData),
      variables,
    }),
    next: { revalidate: revalidate },
  }).then((res) => res.json());
  return data;
}

export async function getStaticDataFromGql(
  gqlData: DocumentNode,
  variables: any = undefined
) {
  const data = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: print(gqlData),
      variables,
    }),
    cache: "force-cache",
  }).then((res) => res.json())
  .catch((e) => console.log("Herrrr", e));
  return data;
}

export async function getDynamicDataFromGql(
  gqlData: DocumentNode,
  variables: any = undefined
) {
  const data = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: print(gqlData),
      variables,
    }),
    cache: "no-store",
  }).then((res) => res.json());
  return data;
}
